import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"

import { publicRoutes, restrictedRoutes } from "./constants"

import { Landing } from "@/pages"
import { AppPage } from "@/pages"


function App() {


  useEffect( ()=>{


    return ()=>{}
  },[])


  
  return (
    <Routes>
      <Route path={publicRoutes.LANDING} element={<Landing/>} />
      <Route path={restrictedRoutes.APP} element={<AppPage/>}/>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
