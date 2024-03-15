import { codeVerifier,codeChallenge } from "./codeChallengeVerifierGenerator";

const redirectUri = 'http://localhost:5173/app/';
const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")


export const linkAuth = () =>{
  window.localStorage.setItem('code_verifier', codeVerifier);

  const params =  {
    response_type: 'code',
    client_id: "89654d500fb846f398c518323434fb65",
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

