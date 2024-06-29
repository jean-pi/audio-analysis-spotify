import { Routes, Route, Navigate } from "react-router-dom"

import { publicRoutes, restrictedRoutes } from "./constants"

import AuthGuard from "@/guard/auth.guard"
import LandindGuard from "@/guard/landing.guard"
import { Suspense, lazy } from "react"
import {LazyWaiting} from "@/pages/AppPage/components/LazyWaiting"

const AppPage = lazy(()=> import("@/pages/AppPage/AppPage"));
const Landing = lazy(()=> import("@/pages/Landing/Landing"));

import {QueryClient,  QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <Suspense fallback={<LazyWaiting/>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<AuthGuard/>}>
              <Route path={restrictedRoutes.APP} element={<AppPage/>}/>
          </Route>
          <Route element={<LandindGuard/>}>
            <Route path={publicRoutes.LANDING} element={<Landing/>}/>
          </Route>
          <Route path="*" element={<Navigate to={restrictedRoutes.APP}/>} />

        </Routes>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
