import React, { useState } from 'react'; // Importando React e o hook useState para gerenciar estados locais do componente
import { Link } from 'react-router-dom'; // Importando o componente Link para navegação entre páginas sem recarregar
import { FaHome } from 'react-icons/fa'; // Importando o ícone FaHome da biblioteca react-icons
import './navbar.css'; // Importando o arquivo CSS para estilizar o componente Navbar

const Navbar = () => {
  // Definindo o estado activeDropdown para controlar qual dropdown está aberto
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Definindo o estado searchQuery para armazenar o texto de busca

  // Função que abre o dropdown ao passar o mouse sobre ele
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName); // Define o dropdown ativo com o nome passado
  };

  // Função que fecha o dropdown ao sair com o mouse
  const handleMouseLeave = () => {
    setActiveDropdown(null); // Remove o dropdown ativo ao sair do mouse
  };

  // Função para realizar a busca com o valor de searchQuery
  const handleSearch = () => {
    console.log('Buscando:', searchQuery); // Loga a busca no console
    // Aqui a lógica da busca poderia redirecionar para uma página de resultados
  };

  // Função que fecha o dropdown quando um link é clicado
  const handleLinkClick = () => {
    setActiveDropdown(null); // Fecha o dropdown ativo ao clicar em um link
  };

  return (
    <nav className="navbar"> {/* Define a barra de navegação com a classe navbar */}
      <div className="navbar-left"> {/* Div para alinhar à esquerda os itens da navbar */}
        <div className="navbar-logo">Prometheus</div> {/* Nome ou logo da aplicação */}

        {/* Link para a página inicial com ícone de casa */}
        <Link to="/" className="home-icon" title="Página Inicial">
          <FaHome /> {/* Ícone de casa importado */}
        </Link>

        <ul className="navbar-links"> {/* Lista de links do menu principal */}
          {/* Dropdown de Gestão */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('gestao')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Gestão</Link> {/* Link fictício para abrir o menu de Gestão */}
            {activeDropdown === 'gestao' && ( // Verifica se o dropdown de Gestão está ativo
              <ul className="dropdown-menu"> {/* Exibe os links do dropdown se ativo */}
                <li><Link to="/gestao/atendimento" onClick={handleLinkClick}>Atendimentos</Link></li>
                <li><Link to="/gestao/pessoa" onClick={handleLinkClick}>Pessoa</Link></li>
                <li><Link to="/gestao/workflow" onClick={handleLinkClick}>Workflow</Link></li>
                <li><Link to="/gestao/timesheet" onClick={handleLinkClick}>Timesheet</Link></li>
                <li><Link to="/gestao/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown de Atividades */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('atividades')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Atividades</Link> {/* Link fictício para abrir o menu de Atividades */}
            {activeDropdown === 'atividades' && ( // Verifica se o dropdown de Atividades está ativo
              <ul className="dropdown-menu"> {/* Exibe os links do dropdown se ativo */}
                <li><Link to="/atividades" onClick={handleLinkClick}>Lista de Atividades</Link></li>
                <li><Link to="/painel" onClick={handleLinkClick}>Painel de Tarefas</Link></li>
                <li><Link to="/kanban" onClick={handleLinkClick}>Kanban de Tarefas</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown de Processos */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('processos')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Processos</Link> {/* Link fictício para abrir o menu de Processos */}
            {activeDropdown === 'processos' && ( // Verifica se o dropdown de Processos está ativo
              <ul className="dropdown-menu"> {/* Exibe os links do dropdown se ativo */}
                <li><Link to="/processos" onClick={handleLinkClick}>Processos</Link></li>
                <li><Link to="/processos/intimacoes" onClick={handleLinkClick}>Intimações</Link></li> {/* Correção aqui */}
                <li><Link to="/central" onClick={handleLinkClick}>Central de Captura</Link></li>
                <li><Link to="/andamentos" onClick={handleLinkClick}>Andamentos Processuais</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown de Financeiro */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('financeiro')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Financeiro</Link> {/* Link fictício para abrir o menu de Financeiro */}
            {activeDropdown === 'financeiro' && ( // Verifica se o dropdown de Financeiro está ativo
              <ul className="dropdown-menu"> {/* Exibe os links do dropdown se ativo */}
                <li><Link to="/receitas" onClick={handleLinkClick}>Receitas e Despesas</Link></li>
                <li><Link to="/extrato" onClick={handleLinkClick}>Extrato de Conta</Link></li>
                <li><Link to="/solicitacoes" onClick={handleLinkClick}>Solicitações</Link></li>
                <li><Link to="/integracao" onClick={handleLinkClick}>Integração de Receitas</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown de Documentos */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('documentos')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Documentos</Link> {/* Link fictício para abrir o menu de Documentos */}
            {activeDropdown === 'documentos' && ( // Verifica se o dropdown de Documentos está ativo
              <ul className="dropdown-menu"> {/* Exibe os links do dropdown se ativo */}
                <li><Link to="/documentos" onClick={handleLinkClick}>Documentos</Link></li>
                <li><Link to="/modelos" onClick={handleLinkClick}>Modelos de Documentos</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown de Extensões */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('extensoes')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Extensões</Link> {/* Link fictício para abrir o menu de Extensões */}
            {activeDropdown === 'extensoes' && ( // Verifica se o dropdown de Extensões está ativo
              <ul className="dropdown-menu"> {/* Exibe os links do dropdown se ativo */}
                <li><Link to="/conexoes" onClick={handleLinkClick}>Conexões</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          <div className="navbar-right"> {/* Container para elementos da barra de navegação à direita */}
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Atualiza searchQuery com o valor do campo de busca
            />
            <button onClick={handleSearch}>Buscar</button> {/* Botão para iniciar a busca */}

            <div className="navbar-icons"> {/* Container para ícones da barra de navegação */}
              {/* Dropdown de Notificações */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('notificacoes')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">🔔</button>
                {activeDropdown === 'notificacoes' && ( // Exibe o menu de Notificações se ativo
                  <ul className="dropdown-menu">
                    <li><Link to="/notificacoes" onClick={handleLinkClick}>Notificações</Link></li>
                  </ul>
                )}
              </div>

              {/* Dropdown de Configurações */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('configuracoes')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">⚙️</button>
                {activeDropdown === 'configuracoes' && ( // Exibe o menu de Configurações se ativo
                  <ul className="dropdown-menu">
                    <li><Link to="/configuracoes" onClick={handleLinkClick}>Configurações</Link></li>
                  </ul>
                )}
              </div>

              {/* Dropdown de Ajuda */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('ajuda')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">❓</button>
                {activeDropdown === 'ajuda' && ( // Exibe o menu de Ajuda se ativo
                  <ul className="dropdown-menu">
                    <li><Link to="/ajuda" onClick={handleLinkClick}>Ajuda</Link></li>
                    <li><Link to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
                  </ul>
                )}
              </div>

              {/* Dropdown de Usuário */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('usuario')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">👤</button>
                {activeDropdown === 'usuario' && ( // Exibe o menu de Usuário se ativo
                  <ul className="dropdown-menu">
                    <li><Link to="/usuario/perfil" onClick={handleLinkClick}>Perfil</Link></li>
                    <li><Link to="/usuario/sair" onClick={handleLinkClick}>Sair</Link></li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; // Exporta o componente Navbar para ser utilizado em outras partes da aplicação
