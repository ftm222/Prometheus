import React, { useState, useEffect } from 'react'; // Importa a biblioteca React e os hooks useState e useEffect para gerenciamento de estado e efeitos colaterais
import './MainContent.css'; // Importa o arquivo CSS específico para estilização do componente MainContent
import Sidebar from './sidebar'; // Importa o componente Sidebar do arquivo 'sidebar.js'

const MainContent = () => { // Define o componente funcional MainContent
  const [message, setMessage] = useState(''); // Cria um estado 'message' para armazenar a mensagem recebida do backend, inicializado como uma string vazia
  const [sidebarOpen, setSidebarOpen] = useState(false); // Cria um estado 'sidebarOpen' para controlar a visibilidade da Sidebar, inicializado como falso
  const [dropdownOpen, setDropdownOpen] = useState(false); // Cria um estado 'dropdownOpen' para controlar a visibilidade do dropdown, inicializado como falso

  // useEffect para buscar dados da API quando o componente é montado
  useEffect(() => {
    fetch('/api/reports') // Faz uma requisição GET para a API em '/api/reports'
      .then(response => { // Processa a resposta da requisição
        if (!response.ok) { // Verifica se a resposta não está ok (status HTTP diferente de 2xx)
          throw new Error('Network response was not ok'); // Lança um erro se a resposta não for satisfatória
        }
        return response.json(); // Retorna a resposta convertida para JSON
      })
      .then(data => setMessage(data.message)) // Armazena a mensagem recebida no estado 'message'
      .catch(error => console.error('Error fetching reports:', error)); // Captura e exibe erros no console
  }, []); // O array vazio significa que o efeito roda apenas na montagem do componente

  // Função para alternar a visibilidade da Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev); // Atualiza o estado 'sidebarOpen' alternando seu valor atual
  };

  // Função para tratar ações do dropdown
  const handleDropdownClick = (option) => {
    if (option === 'deleteAll') { // Verifica se a opção selecionada é 'deleteAll'
      console.log('Excluir todos os relatórios'); // Exibe mensagem no console
    } else if (option === 'configureDeletion') { // Verifica se a opção selecionada é 'configureDeletion'
      console.log('Configurar exclusão'); // Exibe mensagem no console
    }
  };

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev); // Atualiza o estado 'dropdownOpen' alternando seu valor atual
  };

  return ( // Retorna o JSX que representa a interface do componente
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : ''}`}> {/* Container principal com classe dinâmica, adiciona 'sidebar-open' se a Sidebar estiver aberta */}
      
      {/* Sidebar aparece apenas se 'sidebarOpen' for verdadeiro */}
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />} {/* Renderiza o componente Sidebar se 'sidebarOpen' for verdadeiro, passando props para ele */}

      <div className="main-content"> {/* Div para o conteúdo principal da página */}
        {/* Cabeçalho atualizado */}
        <header className="header"> {/* Define o cabeçalho da página */}
          <div className="container header-content"> {/* Container para o conteúdo do cabeçalho */}
            <button className="hamburger-menu" onClick={toggleSidebar}> {/* Botão de menu hamburger que alterna a Sidebar ao ser clicado */}
              ☰ {/* Ícone de menu hamburger */}
            </button>
            <h2>Relatórios</h2> {/* Título da seção, alterado para h2 para manter a hierarquia semântica */}
            <div className="dropdown"> {/* Div para o dropdown */}
              <button className="dropdown-button" onClick={toggleDropdown}> {/* Botão que alterna a visibilidade do dropdown */}
                Perfil {/* Texto do botão */}
              </button>
              {dropdownOpen && ( // Renderiza o conteúdo do dropdown apenas se 'dropdownOpen' for verdadeiro
                <div className="dropdown-content"> {/* Container para o conteúdo do dropdown */}
                  <ul> {/* Lista para as opções do dropdown */}
                    <li onClick={() => handleDropdownClick('deleteAll')}>Excluir todos os relatórios</li> {/* Item da lista que chama a função para excluir todos os relatórios ao ser clicado */}
                    <li onClick={() => handleDropdownClick('configureDeletion')}>Configurar exclusão</li> {/* Item da lista que chama a função para configurar exclusão ao ser clicado */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="report-content"> {/* Div para o conteúdo dos relatórios */}
          <div className="clipboard"> {/* Div para as imagens de pranchetas */}
            <img src="/path/to/clipboard1.png" alt="Prancheta 1" /> {/* Imagem da prancheta 1 */}
            <img src="/path/to/clipboard2.png" alt="Prancheta 2" /> {/* Imagem da prancheta 2 */}
          </div>
          <p>{message || 'Você não possui relatórios gerados de gestão'}</p> {/* Exibe a mensagem recebida ou uma mensagem padrão caso 'message' esteja vazio */}
        </div>
      </div>
    </div>
  );
};

export default MainContent; // Exporta o componente MainContent para uso em outros arquivos
