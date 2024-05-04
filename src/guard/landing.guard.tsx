// "use client";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';
import { restrictedRoutes } from "../constants/routes";

/**
* function: manage access to landing
* if accessToke in local storge exists: redirect to app 
* if accessToke in local storge not exists: redirect to stay in landing
* @return {<AppPage/> || navigate: <Landing/>}
*/

const LandindGuard: React.FC = () => { 
    const isAccessToken = localStorage.getItem('access_token')
    return isAccessToken? <Navigate replace to={restrictedRoutes.APP} /> : <Outlet/>
}

export default LandindGuard;
