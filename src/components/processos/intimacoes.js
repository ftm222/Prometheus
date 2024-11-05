// Intimacoes.js

import React, { useState } from 'react';
import './intimacoes.css';

function Intimacoes() {
  const [intimacoes, setIntimacoes] = useState([
    {
      id: 1,
      publicacao: '06/11/2024',
      disponibilizacao: '05/11/2024',
      processo: '0735139-31.2022.8.07.0001',
      cliente: 'ANDRE SCARASSAT',
      descricao: '41579/DF ADVOGADO: EDMILSON ALEXANDRE PEREIRA L...',
      status: 'Pendente',
      tags: ['BC', 'QC', 'ND']
    },
    {
      id: 2,
      publicacao: '06/11/2024',
      disponibilizacao: '05/11/2024',
      processo: '0727364-94.2024.8.07.0000',
      cliente: 'JOSE ALCINO SCARASSATI',
      descricao: 'BANCO DO BRASIL S/A – POLO Passivo PARTE: JOSE ALCI...',
      status: 'Pendente',
      tags: ['GC', 'ND', 'BC']
    },
    // Adicione os outros itens conforme a imagem
  ]);

  // Função para filtrar apenas intimações pendentes
  const filtrarPendentes = () => {
    const intimacoesPendentes = intimacoes.filter(item => item.status === 'Pendente');
    setIntimacoes(intimacoesPendentes);
  };

  return (
    <div className="intimacoes">
      <header>
        <h1>Intimações</h1>
        <div className="tabs">
          <button>Intimações</button>
          <button>Intimações descartadas</button>
          <button>Captura de intimações</button>
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Pesquise pela descrição da intimação..." />
        <button className="search-btn">Busca avançada</button>
        <div className="filter-buttons">
          <button className="filter-btn" onClick={() => setIntimacoes(intimacoes)}>Todas</button>
          <button className="filter-btn" onClick={filtrarPendentes}>Pendentes</button>
          <button className="filter-btn">Arquivadas</button>
          <button className="filter-btn">Processadas</button>
        </div>
      </div>

      <div className="actions">
        <button className="sort-btn">Publicações mais recentes</button>
        <button className="batch-actions-btn">Ações em lote</button>
      </div>

      <div className="intimacoes-list">
        {intimacoes.map((item) => (
          <IntimacaoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function IntimacaoItem({ item }) {
  return (
    <div className="intimacao-item">
      <input type="checkbox" />
      <div className="intimacao-details">
        <p><strong>Publicação</strong>: {item.publicacao}</p>
        <p><strong>Disponibilização</strong>: {item.disponibilizacao}</p>
      </div>
      <div className="process-details">
        <p><strong>Número do processo</strong>: {item.processo}</p>
        <p><strong>Cliente</strong>: {item.cliente}</p>
        <p><strong>Descrição</strong>: {item.descricao}</p>
      </div>
      <div className="status">
        <span className="status-badge">{item.status}</span>
      </div>
      <div className="tags">
        {item.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Intimacoes;
