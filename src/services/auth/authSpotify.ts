import { codeVerifier,codeChallenge } from "./codeChallengeVerifierGenerator";

export const linkAuth = () =>{
  
  const redirectUri = 'http://localhost:5173/app/';
  const scopes = 'user-read-private user-read-email';
  const authUrl = new URL("https://accounts.spotify.com/authorize")
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  window.localStorage.setItem('code_verifier', codeVerifier);

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

