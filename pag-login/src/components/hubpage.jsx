import React from 'react';
import { Link } from 'react-router-dom'; 

const HubPage = () => {
  return (
    <div className="hub-page">
      <h1>Bem-vindo ao Hub!</h1>
      <p>Você está na página principal.</p>

      {}
      <Link to="/">Voltar ao Login</Link>
    </div>
  );
};

export default HubPage;
