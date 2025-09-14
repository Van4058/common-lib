class SessionService {
    private token: string | null = null;
    private user: any = null;
    private refreshToken: string | null = null;
    private expiresAt: number | null = null;

    // ---- Token ----
    setToken(token: string, refreshToken?: string, expiresAt?: number) {
        this.token = token;
        if (refreshToken) this.refreshToken = refreshToken;
        if (expiresAt) this.expiresAt = expiresAt;
    }

    getToken() {
        return this.token;
    }

    getRefreshToken() {
        return this.refreshToken;
    }

    getExpiresAt() {
        return this.expiresAt;
    }

    isAuthenticated() {
        return !!this.token;
    }

    // ---- User ----
    setUser(user: any) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    // ---- Clear all ----
    clear() {
        this.token = null;
        this.refreshToken = null;
        this.expiresAt = null;
        this.user = null;
    }
}

export const sessionService = new SessionService();
