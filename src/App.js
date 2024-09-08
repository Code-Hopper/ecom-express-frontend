import React from 'react'
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// vendors 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// importing pages
import Home from "./components/pages/Home.jsx"
import CustomerLogin from './components/pages/login-register/CustomerLogin.jsx'
import CustomerRegistration from './components/pages/login-register/CustomerRegistration.jsx'
import Account from './components/pages/Account.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          
          <Route path='/user/login' element={<CustomerLogin />} />
          
          <Route path='/user/register' element={<CustomerRegistration />} />

          <Route path='/account' element={<Account />} />
      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
