import React from 'react'
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// vendors 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// importing pages
import Home from "./components/pages/Home.jsx"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
