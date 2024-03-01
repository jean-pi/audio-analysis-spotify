import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"

import { publicRoutes, restrictedRoutes } from "./constants"

import { Landing } from "./pages/Landing"


function App() {


  useEffect( ()=>{


    return ()=>{}
  },[])


  
  return (
    <Routes>
      <Route path={publicRoutes.LANDING} element={<Landing/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
