import { endPoints, redirectUrlConstant } from "@/constants";
import { accessTokenEndpoint } from "@/models/endPoints/accessTokeEndpoint";

export const getAccessToken = async (): Promise<accessTokenEndpoint> => {

    const accessTokenUrl: string = endPoints.accessToken;
    const redirectUrl: string = redirectUrlConstant;
    const urlParams = new URLSearchParams(window.location.search);
    const codeUrl: string | null = urlParams.get("code");
    const codeVerifier: string | null = localStorage.getItem('code_verifier');
    const clientId = import.meta.env.VITE_APP_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_APP_CLIENT_SECRET;
    
    if (!codeUrl || !codeVerifier) {
        throw new Error('Código de autorización o verificador de código no encontrados.');
    }
    
    const response = await fetch(accessTokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: codeUrl,
            redirect_uri: redirectUrl,
            client_id: clientId,
            client_secret: clientSecret,
            code_verifier: codeVerifier,
        }),
    });
    const data = await response.json();
    return data;

};



