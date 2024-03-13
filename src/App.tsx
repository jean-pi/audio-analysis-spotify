import { Routes, Route, Navigate } from "react-router-dom"

import { publicRoutes, restrictedRoutes } from "./constants"

import { Landing } from "@/pages"
import { AppPage } from "@/pages"
import AuthGuard from "./guard/auth.guard"
import LandindGuard from "./guard/landing.guard"


function App() {



  return (
    <Routes>

      <Route element={<AuthGuard/>}>
        <Route path={restrictedRoutes.APP} element={<AppPage/>}/>
      </Route>
      <Route element={<LandindGuard/>}>
        <Route path={publicRoutes.LANDING} element={<Landing/>}/>
      </Route>
      <Route path="*" element={<Navigate to={restrictedRoutes.APP}/>} />
    </Routes>
  )
}

export default App
