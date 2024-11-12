import React from 'react';
import './solicitacoes.css';

function FinancialRequests() {
  return (
    <div className="container">

      {/* Conteúdo Principal */}
      <main className="main-content">
        <h1>Buscar solicitações de lançamentos financeiros</h1>
        <div className="search-box">
          <div className="search-controls">
            <input
              type="text"
              placeholder="Pesquise por nome pessoa, descrição, valor, núm. de documento, identificador do lançamento."
              className="input-text"
            />
            <button className="search-button">Buscar</button>
            <button className="advanced-search">Busca avançada</button>
          </div>
          <div className="filters">
            <button className="filter-button">Pendentes</button>
            <button className="filter-button">Receitas pendentes</button>
            <button className="filter-button">Despesas pendentes</button>
            <button className="filter-button">Receita de reembolso pendente</button>
            <button className="filter-button">Despesa de reembolso pendente</button>
          </div>
        </div>
      </main>

      {/* Suporte */}
      <aside className="support-button">
        Suporte e Novidades
      </aside>
    </div>
  );
}

export default FinancialRequests;
