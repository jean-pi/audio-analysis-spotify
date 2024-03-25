import { endPoints, redirectUrlConstant, scopesAuth } from "@/constants";
import { codeVerifier, generateCodeChallenge } from "./codeChallengeVerifierGenerator";

export const linkAuth = async() =>{
  
  const redirectUri: string = redirectUrlConstant;
  const scopes: string = scopesAuth;
  const authUrl: URL = new URL(endPoints.authorize)
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  window.localStorage.setItem('code_verifier', codeVerifier);

  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope: scopes,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

