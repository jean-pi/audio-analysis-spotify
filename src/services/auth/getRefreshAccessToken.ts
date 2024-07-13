import { endPoints} from "@/constants";
import { accessTokenEndpoint } from "@/models/endPoints/accessTokeEndpoint";
import { ErrorResponse} from "@/models/errorModels"


export const GetRefreshAccessToken = async (): Promise<accessTokenEndpoint | ErrorResponse> => {

    const accessTokenUrl: string = endPoints.accessToken;
    const clientId = import.meta.env.VITE_APP_CLIENT_ID;
    const refreshToken: string | null = localStorage.getItem('refresh_token');

    if (!refreshToken) {
        const noTokenError: ErrorResponse = {
            error: "token no found",
            error_description: "can't access the app without an access token"
        }
        return noTokenError;
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
    })

    try {
        const response = await fetch(accessTokenUrl, {
            method: 'POST',
            headers: headers,
            body: body.toString(),
        });

        if (!response.ok) {
            const errorData: ErrorResponse = await response.json();
            return errorData;
        }

        const data: accessTokenEndpoint = await response.json();
        return data;

    } catch (error) {
        return {
            error: 'network_error',
            error_description: 'There was a problem connecting to the Spotify API.'
        };
    }
    
};


