import React, { useState } from 'react';
import { FaSearch, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './receitas_despesas.css';

const Financeiro = () => {
  const [filtro, setFiltro] = useState('Todas');
  const [aba, setAba] = useState('Receitas'); // Estado para controlar a aba ativa
  const navigate = useNavigate();

  const handleNewLaunch = () => {
    console.log("Abrindo formulário para novo processo...");
    navigate('/financeiro/receitas-despesas/lancamento-receita');
  };

  return (
    <div className="financeiro">
      <header className="header">
        <h1>Receitas e Despesas</h1>
      </header>
      
      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="total"> 
            <h3>Total</h3>
            <p>R$ 0,00</p>
            <p className="receitas">R$ 0,00</p>
            <p className="despesas">R$ 0,00</p>
            <p className="pendentes">R$ 0,00</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          {/* Tabs */}
          <div className="tabs">
            <button 
              className={`tab ${aba === 'Receitas' ? 'active' : ''}`} 
              onClick={() => setAba('Receitas')}
            >
              Receitas
            </button>
            <button 
              className={`tab ${aba === 'Despesas' ? 'active' : ''}`} 
              onClick={() => setAba('Despesas')}
            >
              Despesas
            </button>
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
            <h2>{aba === 'Receitas' ? 'Lista de Receitas' : 'Lista de Despesas'}</h2>
            <div className="transaction-item">
              <input type="checkbox" />
              <span>Data de vencimento</span>
              <span>20/12/2025</span>
              <span className="valor">R$ 0,00</span>
              <span>{aba === 'Receitas' ? 'Plano de contas: Honorários contratuais' : 'Plano de contas: Despesas operacionais'}</span>
              <span>{aba === 'Receitas' ? 'Cliente: PEDRO DAS QUINTAS CORVOS' : 'Fornecedor: ABC Fornecedores Ltda'}</span>
              <span className="status-pendente">Pendente</span>
              <span className="action-btn"><FaCog /></span>
            </div>
            {/* Outros itens de receitas ou despesas podem ser adicionados aqui */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;
