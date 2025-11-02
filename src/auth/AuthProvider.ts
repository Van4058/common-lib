// src/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { KeycloakInstance } from 'keycloak-js';
import { createKeycloakInstance, getKeycloak } from './keycloakClient';
import {jwtDecode} from "jwt-decode";

type AuthState = {
    initialized: boolean;
    authenticated: boolean;
    kc?: KeycloakInstance;
};

const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider: React.FC<{
    config: { url: string; realm: string; clientId: string };
    children: React.ReactNode;
}> = ({ config, children }) => {
    const [state, setState] = useState<AuthState>({ initialized: false, authenticated: false });

    useEffect(() => {
        const kc = createKeycloakInstance(config);
        // init options: check-sso keeps user if already logged in; pkceMethod for SPA
        kc
            .init({
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
                pkceMethod: 'S256',
                // enableLogging: true
            })
            .then((auth) => {
                setState({ initialized: true, authenticated: auth, kc });
                // setup token refresh
                const minValidity = 30; // seconds
                const refreshLoop = () => {
                    if (!kc) return;
                    kc.updateToken(minValidity).catch(() => {
                        // token refresh failed -> force logout or re-login
                        console.warn('token refresh failed');
                    });
                };
                // run periodically (also updateToken itself will fetch if needed)
                const id = window.setInterval(refreshLoop, 20 * 1000);
                return () => window.clearInterval(id);
            })
            .catch((e) => {
                console.error('Keycloak init failed', e);
                setState({ initialized: true, authenticated: false });
            });
    }, [config]);

    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    const kc = ctx.kc;
    return {
        initialized: ctx.initialized,
        authenticated: ctx.authenticated,
        login: (opts?: { redirectUri?: string }) => kc?.login(opts),
        logout: (opts?: { redirectUri?: string }) => kc?.logout(opts),
        getToken: async () => {
            if (!kc) throw new Error('Keycloak not initialized');
            // ensure token valid
            await kc.updateToken(30).catch(() => {
                // could not refresh
            });
            return kc.token;
        },
        hasRole: (role: string, resource?: string) => {
            if (!kc) return false;
            return kc.hasRealmRole(role) || (resource ? kc.hasResourceRole(role, resource) : false);
        },
        subject: () => kc?.tokenParsed?.sub,
        getPermission: () => {
            if (!kc) throw new Error('Keycloak not initialized');
            // ensure token valid
            return jwtDecode(kc.token);
        },
        hasPermission: (key: string) => {
            if (!kc) throw new Error('Keycloak not initialized');

            return (jwtDecode(kc.token) as Record<string, any>)[key] ?? undefined;
        }
    };
}
