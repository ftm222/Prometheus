// src/components/Header.js
import React from 'react'; // Importa a biblioteca React para criar o componente
import { useLocation } from 'react-router-dom'; // Importa o hook useLocation do react-router-dom
import './Header.css'; // Importa o arquivo CSS para os estilos do componente Header

const Header = () => { // Define o componente funcional Header
  const location = useLocation(); // Hook para obter a URL atual

  // Verifica se a URL atual é a página inicial ("/")
  if (location.pathname !== '/') { // Se a rota atual não for a raiz
    return null; // Não renderiza o "Painel de Controle" se não for a página inicial
  }

  return ( // Retorna o JSX do componente Header
    <header className="header"> {/* Elemento de cabeçalho com classe "header" */}
      {/* Contêiner flexível para organizar o título e os botões */}
      <div className="header-content"> {/* Div que agrupa o conteúdo do cabeçalho */}
        {/* Título da página "Painel de Controle" */}
        <h1 className="header-title">Painel de Controle</h1> {/* Título principal do cabeçalho */}
        {/* Grupo de botões "Pessoal" e "Escritório" */}
        <div className="button-group"> {/* Div que agrupa os botões */}
          {/* Botão "Pessoal" */}
          <button className="header-button">Pessoal</button> {/* Botão para seção Pessoal */}
          {/* Botão "Escritório" */}
          <button className="header-button">Escritório</button> {/* Botão para seção Escritório */}
        </div>
      </div>
    </header>
  ); // Fim do retorno do JSX
};

export default Header; // Exporta o componente Header para ser utilizado em outras partes do projeto
