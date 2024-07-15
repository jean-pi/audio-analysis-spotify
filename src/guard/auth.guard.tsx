"use client";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';
import { publicRoutes} from "@/constants";

/**
* function: manage access to app
* if url respone is error: redirect to landing
* if url response is code: redirect to app
* if accessToke in local storge exists: redirect to app
* @return {<AppPage/> || navigate: <Landing/>}
*/

const AuthGuard: React.FC = () => { 

    const urlParams = new URLSearchParams(window.location.search);
    const urlIsError = urlParams.get("error");
    // const urlIsCode = urlParams.get("code");
    const isAccessToken = localStorage.getItem('access_token');

    
    return !urlIsError || !isAccessToken === null? <Outlet/> : <Navigate replace to={publicRoutes.LANDING} />;
}

export default AuthGuard;
