import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Destaque from './Destaque'
import Registro from './Registro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
