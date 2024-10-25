// src/components/Gestao/Gestao.js
import React from 'react';
import { Link } from 'react-router-dom';

const Gestao = () => {
  return (
    <div>
      <h1>Gestão</h1>
      <Link to="/gestao/atendimento">
        <button>Atendimento</button>
      </Link>
    </div>
  );
};

export default Gestao;
