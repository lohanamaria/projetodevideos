import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">


      <Link to="/" className="nav-link">Home</Link>
      <Link to="/destaque" className="nav-link">Em Destaque</Link>
      <Link to="/registro" className="nav-link">Novo Vídeo</Link>
    </div>
  );
};

export default Navbar;
