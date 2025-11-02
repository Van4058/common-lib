// src/keycloakClient.ts
import Keycloak, { KeycloakInstance } from 'keycloak-js';

let kc: KeycloakInstance | null = null;

export function createKeycloakInstance(config: {
    url: string;
    realm: string;
    clientId: string;
}) {
    kc = new Keycloak({
        url: config.url,
        realm: config.realm,
        clientId: config.clientId
    });
    return kc;
}

export function getKeycloak() {
    if (!kc) throw new Error('Keycloak not initialized');
    return kc;
}
