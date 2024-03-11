import { Navigate, Outlet } from "react-router-dom";
import { publicRoutes,restrictedRoutes } from "@/constants";


export type AuthGuardrops = {
    
}


const AuthGuard: React.FC<AuthGuardrops> = () => { 

    const urlParams = new URLSearchParams(window.location.search);

    const AccessRespondUrl = urlParams.get("error");
    const dataLocalStorage = localStorage.getItem('code_verifier');
    return dataLocalStorage ? <Navigate replace to={restrictedRoutes.APP}/> : <Navigate replace to={publicRoutes.LANDING} />;   
}

export default AuthGuard;
