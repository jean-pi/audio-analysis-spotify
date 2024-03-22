import { Routes, Route, Navigate } from "react-router-dom"

import { publicRoutes, restrictedRoutes } from "./constants"

import AuthGuard from "@/guard/auth.guard"
import LandindGuard from "@/guard/landing.guard"
import { Suspense, lazy } from "react"
import {LazyWaiting} from "@/pages/AppPage/components/LazyWaiting"
import AppContextProvider from "@/pages/AppPage/context/appContext"

const AppPage = lazy(()=> import("@/pages/AppPage/AppPage"));
const Landing = lazy(()=> import("@/pages/Landing/Landing"));

function App() {
  return (
    <Suspense fallback={<LazyWaiting/>}>
      <Routes>
        <Route element={<AuthGuard/>}>
          <AppContextProvider>
            <Route path={restrictedRoutes.APP} element={<AppPage/>}/>
          </AppContextProvider>
        </Route>
        <Route element={<LandindGuard/>}>
          <Route path={publicRoutes.LANDING} element={<Landing/>}/>
        </Route>
        <Route path="*" element={<Navigate to={restrictedRoutes.APP}/>} />
      </Routes>
    </Suspense>
  )
}

export default App
