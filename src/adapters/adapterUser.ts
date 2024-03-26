
import { User } from "@/models";
import { userEndpointModel } from "@/models/endPoints";

/**
 * @param userJson json con toda la info del endpoint de curren user
 * @return  objeto que contiene la parametros del usuario lista para usar en componentes
 */

export const adapterUser = (userJson: userEndpointModel): User =>{
    const photoUrl = userJson.images[0].url;
    const displayName = userJson.display_name;
    const urlToPerfil = userJson.external_urls.spotify;
    let user: User = new User(displayName, photoUrl, urlToPerfil);
    return user;
}