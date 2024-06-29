import { endPoints} from "@/constants";
import { accessTokenEndpoint } from "@/models/endPoints/accessTokeEndpoint";


export const refreshAccessToken = async (): Promise<accessTokenEndpoint> => {

    const accessTokenUrl: string = endPoints.accessToken;
    const clientId = import.meta.env.VITE_APP_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_APP_CLIENT_SECRET;
    const refreshToken: string | null = localStorage.getItem('refresh_token');

    if (!refreshToken) {
        throw new Error('Código de autorización o verificador de código no encontrados.');
    }

    const response = await fetch(accessTokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret,
        }).toString(),
    });
    return response.json();
};


