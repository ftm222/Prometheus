import React, { useState } from 'react'; // Importando useState para gerenciar o estado do dropdown
import { Link } from 'react-router-dom'; // Importando o Link para navegação entre as rotas
import { FaHome } from 'react-icons/fa'; // Importando o ícone FaHome
import './navbar.css'; // Importando o arquivo de estilos CSS

const Navbar = () => {
  // Estado para controlar qual dropdown está aberto
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para o campo de busca

  // Função para abrir o dropdown
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName); // Abre o dropdown ao passar o mouse
  };

  // Função para fechar o dropdown ao sair do mouse
  const handleMouseLeave = () => {
    setActiveDropdown(null); // Fecha o dropdown ao sair do mouse
  };

  // Função para lidar com a busca
  const handleSearch = () => {
    console.log('Buscando:', searchQuery);
    // Implementar a lógica de busca, como redirecionar para uma página de resultados
  };

  // Função para fechar o dropdown ao clicar em um link
  const handleLinkClick = () => {
    setActiveDropdown(null); // Fecha o dropdown ao clicar em um link
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">Prometheus</div>

        {/* Ícone de casinha para voltar à página inicial */}
        <Link to="/" className="home-icon" title="Página Inicial">
          <FaHome />
        </Link>

        <ul className="navbar-links">
          {/* Gestão Dropdown */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('gestao')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Gestão</Link>
            {activeDropdown === 'gestao' && (
              <ul className="dropdown-menu">
                <li><Link to="/gestao/atendimento" onClick={handleLinkClick}>Atendimentos</Link></li>
                <li><Link to="/gestao/pessoa" onClick={handleLinkClick}>Pessoa</Link></li>
                <li><Link to="/gestao/workflow" onClick={handleLinkClick}>Workflow</Link></li>
                <li><Link to="/gestao/timesheet" onClick={handleLinkClick}>Timesheet</Link></li>
                <li><Link to="/gestao/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Atividades Dropdown */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('atividades')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Atividades</Link>
            {activeDropdown === 'atividades' && (
              <ul className="dropdown-menu">
                <li><Link to="/atividades" onClick={handleLinkClick}>Lista de Atividades</Link></li>
                <li><Link to="/painel" onClick={handleLinkClick}>Painel de Tarefas</Link></li>
                <li><Link to="/kanban" onClick={handleLinkClick}>Kanban de Tarefas</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Processos Dropdown */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('processos')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Processos</Link>
            {activeDropdown === 'processos' && (
              <ul className="dropdown-menu">
                <li><Link to="/processos" onClick={handleLinkClick}>Processos</Link></li>
                <li><Link to="/intimacoes" onClick={handleLinkClick}>Intimações</Link></li>
                <li><Link to="/central" onClick={handleLinkClick}>Central de Captura</Link></li>
                <li><Link to="/andamentos" onClick={handleLinkClick}>Andamentos Processuais</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Financeiro Dropdown */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('financeiro')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Financeiro</Link>
            {activeDropdown === 'financeiro' && (
              <ul className="dropdown-menu">
                <li><Link to="/receitas" onClick={handleLinkClick}>Receitas e Despesas</Link></li>
                <li><Link to="/extrato" onClick={handleLinkClick}>Extrato de Conta</Link></li>
                <li><Link to="/solicitacoes" onClick={handleLinkClick}>Solicitações</Link></li>
                <li><Link to="/integracao" onClick={handleLinkClick}>Integração de Receitas</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          {/* Documentos Dropdown */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('documentos')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Documentos</Link>
            {activeDropdown === 'documentos' && (
              <ul className="dropdown-menu">
                <li><Link to="/documentos" onClick={handleLinkClick}>Documentos</Link></li>
                <li><Link to="/modelos" onClick={handleLinkClick}>Modelos de Documentos</Link></li>
              </ul>
            )}
          </li>

          {/* Extensões Dropdown */}
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('extensoes')} onMouseLeave={handleMouseLeave}>
            <Link to="#">Extensões</Link>
            {activeDropdown === 'extensoes' && (
              <ul className="dropdown-menu">
                <li><Link to="/conexoes" onClick={handleLinkClick}>Conexões</Link></li>
                <li><Link to="/relatorios" onClick={handleLinkClick}>Relatórios</Link></li>
              </ul>
            )}
          </li>

          <div className="navbar-right">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado do campo de busca
            />
            <button onClick={handleSearch}>Buscar</button>

            <div className="navbar-icons">
              {/* Notificações Dropdown */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('notificacoes')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">🔔</button>
                {activeDropdown === 'notificacoes' && (
                  <ul className="dropdown-menu">
                    <li><Link to="/notificacoes" onClick={handleLinkClick}>Notificações</Link></li>
                  </ul>
                )}
              </div>
              
              {/* Configurações */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('configuracoes')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">⚙️</button>
                {activeDropdown === 'configuracoes' && (
                  <ul className="dropdown-menu">
                    <li><Link to="/perfil" onClick={handleLinkClick}>Perfil</Link></li>
                    <li><Link to="/preferencias" onClick={handleLinkClick}>Preferências</Link></li>
                    <li><Link to="/sair" onClick={handleLinkClick}>Sair</Link></li>
                  </ul>
                )}
              </div>
              
              {/* Ajuda */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('ajuda')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">❓</button>
                {activeDropdown === 'ajuda' && (
                  <ul className="dropdown-menu">
                    <li><Link to="/ajuda">Ajuda</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                  </ul>
                )}
              </div>

              {/* Usuário */}
              <div className="dropdown" onMouseEnter={() => handleMouseEnter('usuario')} onMouseLeave={handleMouseLeave}>
                <button className="icon-button">👤</button>
                {activeDropdown === 'usuario' && (
                  <ul className="dropdown-menu">
                  <li><Link to="/perfil" onClick={handleLinkClick}>Meu Perfil</Link></li>
                  <li><Link to="/configuracoes" onClick={handleLinkClick}>Configurações</Link></li>
                  <li><Link to="/sair" onClick={handleLinkClick}>Sair</Link></li>
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

export default Navbar;
