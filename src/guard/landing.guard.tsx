// "use client";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';
import { restrictedRoutes } from "../constants/routes";


export type LandindGuardProps = {
    
}

const LandindGuard: React.FC<LandindGuardProps> = () => { 

    const dataLocalStorage = localStorage.getItem('code_verifier');

    return !dataLocalStorage? <Outlet/> : <Navigate replace to={restrictedRoutes.APP} />;   
}

export default LandindGuard;
