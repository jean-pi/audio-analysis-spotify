
/**
* @param {number} length - length of the codeVerifier, the longer the better
* @return code with the PKCE standard
*/

const generateRandomString = (length:number) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}




/**
* @param {string} plain - codeVerifier generate with generateRandomString()
* @return code verifier convert to (hash) with the algorith SHA256
*/

const sha256 = async (plain: string) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}





/**
* @param {ArrayBuffer} input - code return by sha256()
* @return transform to a base64 the code return by sha256()
*/

const base64encode = (input: ArrayBuffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
}
  



export async function generateCodeChallenge(codeVerifier: string) {
    const hashed = await sha256(codeVerifier);
    return base64encode(hashed);
}

export const codeVerifier = generateRandomString(64);





  