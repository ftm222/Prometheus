import React, { useState, useEffect } from 'react'; // Importa React, useState e useEffect
import './MainContent.css'; // Importa o arquivo CSS
import Sidebar from './sidebar'; // Corrigido para o nome correto do arquivo Sidebar

const MainContent = () => {
  const [message, setMessage] = useState(''); // Estado para armazenar a mensagem do backend
  const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar a visibilidade da Sidebar
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar a visibilidade do dropdown

  // useEffect para buscar dados da API
  useEffect(() => {
    fetch('/api/reports')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message)) // Armazena a mensagem recebida
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  // Função para alternar visibilidade da Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Função para tratar ações do dropdown
  const handleDropdownClick = (option) => {
    if (option === 'deleteAll') {
      console.log('Excluir todos os relatórios');
    } else if (option === 'configureDeletion') {
      console.log('Configurar exclusão');
    }
  };

  // Função para alternar o dropdown
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : ''}`}> {/* Container principal com classe dinâmica */}
      
      {/* Sidebar aparece apenas se 'sidebarOpen' for true */}
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}

      <div className="main-content"> {/* Conteúdo principal da página */}
        {/* Cabeçalho atualizado */}
        <header className="header"> {/* Corrigido de 'navbar' para 'header' */}
          <div className="container header-content"> {/* 'header-content' para alinhamento adequado */}
            <button className="hamburger-menu" onClick={toggleSidebar}>
              ☰
            </button>
            <h2>Relatórios</h2> {/* Alterado de h1 para h2 para manter a hierarquia semântica */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleDropdown}>
                Perfil
              </button>
              {dropdownOpen && ( // Exibe o dropdown se estiver aberto
                <div className="dropdown-content">
                  <ul>
                    <li onClick={() => handleDropdownClick('deleteAll')}>Excluir todos os relatórios</li>
                    <li onClick={() => handleDropdownClick('configureDeletion')}>Configurar exclusão</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="report-content"> {/* Conteúdo dos relatórios */}
          <div className="clipboard"> {/* Imagens de pranchetas */}
            <img src="/path/to/clipboard1.png" alt="Prancheta 1" />
            <img src="/path/to/clipboard2.png" alt="Prancheta 2" />
          </div>
          <p>{message || 'Você não possui relatórios gerados de gestão'}</p> {/* Exibe a mensagem ou uma padrão */}
        </div>
      </div>
    </div>
  );
};

export default MainContent; // Exporta o componente MainContent
