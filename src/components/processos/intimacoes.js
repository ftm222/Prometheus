// Intimacoes.js
import React, { useState } from 'react';
import './intimacoes.css';

// Componente principal Intimacoes
function Intimacoes() {
  // Define o estado das intimações com uma lista de objetos de exemplo
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
  ]);

  // Função para filtrar apenas intimações com status "Pendente"
  const filtrarPendentes = () => {
    const intimacoesPendentes = intimacoes.filter(item => item.status === 'Pendente');
    setIntimacoes(intimacoesPendentes);
  };

  // Define o estado para controlar a exibição do modal de busca avançada
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  // Função para abrir o modal de busca avançada
  const handleAdvancedSearchClick = () => {
    setShowAdvancedSearch(true); // Atualiza o estado para exibir o modal
  };

  // Função para fechar o modal de busca avançada
  const closeAdvancedSearch = () => {
    setShowAdvancedSearch(false);
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
        <button className="btn-advanced-search" onClick={handleAdvancedSearchClick}>
          Busca avançada
        </button>
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

      {/* Modal de Busca Avançada */}
      {showAdvancedSearch && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeAdvancedSearch}>
              &times;
            </span>
            <AdvancedSearch closeModal={closeAdvancedSearch} />
          </div>
        </div>
      )}
    </div>
  );
}

// Componente AdvancedSearch para a busca avançada
function AdvancedSearch({ closeModal }) {
  const [formData, setFormData] = useState({
    tipoDiario: false,
    tipoEletronica: false,
    justica: "",
    estado: "",
    filtroData: "Data da Publicação",
    periodoInicio: "",
    periodoFim: "",
    responsavelProcesso: "",
    grupoTrabalho: "",
    exibirExcluidos: "Não exibir excluídos",
    filtros: "",
    responsavelIntimacao: "",
    advogadoTermoPesquisa: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleClear = () => {
    setFormData({
      tipoDiario: false,
      tipoEletronica: false,
      justica: "",
      estado: "",
      filtroData: "Data da Publicação",
      periodoInicio: "",
      periodoFim: "",
      responsavelProcesso: "",
      grupoTrabalho: "",
      exibirExcluidos: "Não exibir excluídos",
      filtros: "",
      responsavelIntimacao: "",
      advogadoTermoPesquisa: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching with:", formData);
    closeModal();
  };

  return (
    <form className="advanced-search" onSubmit={handleSubmit}>
      <h2>Busca avançada</h2>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="tipoDiario"
            checked={formData.tipoDiario}
            onChange={handleChange}
          />
          Diário
        </label>
        <label>
          <input
            type="checkbox"
            name="tipoEletronica"
            checked={formData.tipoEletronica}
            onChange={handleChange}
          />
          Eletrônica
        </label>
      </div>

      <div className="form-group">
        <label>Justiça</label>
        <select name="justica" value={formData.justica} onChange={handleChange}>
          <option value="">Pesquise</option>
          {/* Adicionar opções dinamicamente aqui */}
        </select>
      </div>

      <div className="form-group-buttons">
        <button type="button" onClick={handleClear}>Limpar</button>
        <button type="submit">Aplicar Filtros</button>
      </div>
    </form>
  );
}

// Componente que renderiza cada item de intimação individualmente
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
