import React, { useState } from 'react';
import { FaSearch, FaCog } from 'react-icons/fa';

// Importa useNavigate para manipular navegação de páginas
import { useNavigate } from 'react-router-dom';  // Importa o hook useNavigate da biblioteca react-router-dom para navegação entre páginas

import './receitas_despesas.css'

const Financeiro = () => {
  const [filtro, setFiltro] = useState('Todas');
  
  // Usa o hook useNavigate para navegar para outras páginas
  const navigate = useNavigate();  // Cria uma instância de navegação
  
  // Função para manipular a navegação para uma nova página
  const handleNewLaunch = () => {
    console.log("Abrindo formulário para novo processo...");  // Exibe mensagem no console
    navigate('/financeiro/receitas-despesas/novo-lancamento');  // Navega para a página de criação de um novo andamento
  };

  return (
    <div className="financeiro">
      <header className="header">
        <h1>Receitas e despesas</h1>
      </header>
      
      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="total"> 
            <h3>Total</h3>
            <p>R$ 0,00</p>
            <p className="receitas">R$ 0,00</p>
            <p className="despesas">R$ 0,00</p>
            <p className="pendentes">R$ 4.000,00</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          {/* Tabs */}
          <div className="tabs">
            <button className="tab active">Receitas</button>
            <button className="tab">Despesas</button>
          </div>
          
          {/* Novo Lançamento */}
          <button className="new-process-btn" onClick={handleNewLaunch}>Novo Lançamento</button>
          
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquise pelo identificador, valor, plano de contas, cliente ou marcador"
            />
            <button className="search-btn"><FaSearch /></button>
            <button className="advanced-search">Busca avançada</button>
          </div>
          
          {/* Filtros */}
          <div className="filters">
            <button className={`filter ${filtro === 'Todas' ? 'active' : ''}`} onClick={() => setFiltro('Todas')}>Todas</button>
            <button className={`filter ${filtro === 'Pendentes' ? 'active' : ''}`} onClick={() => setFiltro('Pendentes')}>Pendentes</button>
            <button className={`filter ${filtro === 'Recebidas' ? 'active' : ''}`} onClick={() => setFiltro('Recebidas')}>Recebidas</button>
            <button className={`filter ${filtro === 'Atrasadas' ? 'active' : ''}`} onClick={() => setFiltro('Atrasadas')}>Atrasadas</button>
          </div>
          
          {/* Filtro por Data */}
          <div className="date-filter">
            <label>Vencimento</label>
            <input type="date" />
          </div>
          
          {/* Lista de Lançamentos */}
          <div className="transaction-list">
            <div className="transaction-item">
              <input type="checkbox" />
              <span>Data de vencimento</span>
              <span>19/11/2024</span>
              <span className="valor">R$ 4.000,00</span>
              <span>Plano de contas: Honorários contratuais</span>
              <span>Cliente: MARCOS ANTÔNIO DA SILVA</span>
              <span className="status-pendente">Pendente</span>
              <span className="action-btn"><FaCog /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;
