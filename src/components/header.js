// src/components/Header.js
import React from 'react'; // Importa a biblioteca React para criar o componente
import { useLocation } from 'react-router-dom'; // Importa o hook useLocation do react-router-dom
import './Header.css'; // Importa o arquivo CSS para os estilos do componente Header

const Header = () => {
  const location = useLocation(); // Hook para obter a URL atual

  // Verifica se a URL atual é a página inicial ("/")
  if (location.pathname !== '/') {
    return null; // Se não for a página inicial, não renderiza o "Painel de Controle"
  }

  return (
    <header className="header">
      {/* Contêiner flexível para organizar o título e os botões */}
      <div className="header-content">
        {/* Título da página "Painel de Controle" */}
        <h1 className="header-title">Painel de Controle</h1>
        {/* Grupo de botões "Pessoal" e "Escritório" */}
        <div className="button-group">
          {/* Botão "Pessoal" */}
          <button className="header-button">Pessoal</button>
          {/* Botão "Escritório" */}
          <button className="header-button">Escritório</button>
        </div>
      </div>
    </header>
  );
};

export default Header; // Exporta o componente Header para ser utilizado em outras partes do projeto
