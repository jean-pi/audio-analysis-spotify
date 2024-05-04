import { endPoints, redirectUrlConstant, scopesAuth} from "@/constants";
import { codeVerifier, generateCodeChallenge } from "./codeChallengeVerifierGenerator";

/**
* @constant {string} redirectUri - next url after success auth, must match the one provided in the spotify dev panel
* @constant {string} endPoints - list of endpoints, that i use in my app
* @constant {string} scopesAuth - limits of the auth
* @return create a link and redirect for auth
*/

export const linkAuth = async() =>{

  const authUrl: URL = new URL(endPoints.authorize)
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  window.localStorage.setItem('code_verifier', codeVerifier);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope: scopesAuth,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUrlConstant,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

