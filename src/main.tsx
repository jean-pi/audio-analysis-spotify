
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@/styles/index.module.scss"
import { BrowserRouter } from 'react-router-dom'
//import React from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</React.StrictMode>,
)
