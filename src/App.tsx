import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"

import { publicRoutes, restrictedRoutes } from "./constants"

import { Landing } from "@/pages"
import { AppPage } from "@/pages"
import AuthGuard from "./guard/auth.guard"


function App() {


  useEffect( ()=>{


    return ()=>{}
  },[])



  return (
    <Routes>
      <Route element={<AuthGuard/>}>
        <Route path={publicRoutes.LANDING} element={<Landing/>} />
        <Route path={restrictedRoutes.APP} element={<AppPage/>}/>
        <Route path="*" element={<div>404</div>} />
      </Route>
      {/* <Route element={<AuthGuard/>}>
        <Route path={restrictedRoutes.APP} element={<AppPage/>}/>
      </Route>
      <Route element={<AuthGuard/>}>
        <Route path="*" element={<div>404</div>} />
      </Route> */}
    </Routes>
  )
}

export default App
