import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Destaque from './Destaque';
import Registro from './Registro';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destaque" element={<Destaque />} />
        <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
