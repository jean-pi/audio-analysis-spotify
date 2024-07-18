import { endPoints} from "@/constants";
import { accessTokenEndpoint } from "@/models/endPoints/accessTokeEndpoint";



export const GetRefreshAccessToken = async (): Promise<accessTokenEndpoint> => {

    const accessTokenUrl: string = endPoints.accessToken;
    const clientId = import.meta.env.VITE_APP_CLIENT_ID;
    const refreshToken: string | null = localStorage.getItem('refresh_token');


    if (!refreshToken) {
        throw new Error('Código de autorización o verificador de código no encontrados.');
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
    })

    const response = await fetch(accessTokenUrl, {
        method: 'POST',
        headers: headers,
        body: body.toString(),
    });

    const data: accessTokenEndpoint = await response.json();
    return data;

};


