import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './processos.css';

function ProcessosPage() {
  const navigate = useNavigate();
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const [processos] = useState([
    {
      id: 1,
      cliente: "SDREDES SEGURANCA DE REDES LTDA - ME",
      envolvido: "Reclamado",
      processo: "PRO.0001015 - 0000916-54.2024.5.10.0013 (CNJ)",
      assunto: "trabalhista",
      orgao: "TRT10 - TRT Da 10ª Região - Distrito Federal/Brasília",
      status: "Incompleto",
      statusClass: "incomplete",
      tag: "ND",
    },
    {
      id: 2,
      cliente: "LUIZ ANTONIO FERREIRA DE ALMEIDA",
      envolvido: "Réu",
      processo: "PRO.0001014 - 0754668-20.2024.8.07.0016 (CNJ)",
      assunto: "penal",
      orgao: "TJDF - Tribunal De Justiça Do Distrito Federal E Território",
      status: "",
      statusClass: "",
      tag: "",
    },
    {
      id: 3,
      cliente: "MARIA DE FATIMA OLIVEIRA GOMES",
      envolvido: "Autor",
      processo: "PRO.0001013 - 0722958-67.2024.8.07.0020 (CNJ)",
      assunto: "civel",
      orgao: "TJDF - Águas Claras - Distrito Federal/Brasília",
      status: "Movimentado",
      statusClass: "moved",
      tag: "GC",
    },
  ]);

  const handleNewProcess = () => {
    console.log("Abrindo formulário para novo processo...");
    navigate('/processos/novo-processo');
  };

  const formatProcessData = (item) => {
    const formattedItem = {
      ...item,
      status: item.status || 'Sem Status',
      statusClass: item.status ? item.statusClass : 'sem-status',
      tag: item.tag || 'Sem Tag',
    };
    return formattedItem;
  };

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <main>
      <h1>Processos</h1>

      <div className="top-bar">
        <button className="new-process-btn" onClick={handleNewProcess}>Novo processo</button>
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquise por pasta, nº processo, marcador, assunto ou envolvidos"
        />
        <button className="search-btn">🔍</button>
        <button className="advanced-search-btn" onClick={toggleAdvancedSearch}>Busca avançada</button>
        <button className="filter-btn">📁</button>
        <button className="status-filter all">Todos (0)</button>
        <button className="status-filter incomplete">Incompletos (0)</button>
        <button className="status-filter moved">Movimentados (0)</button>
        <button className="status-filter stopped">Parados (0)</button>
      </div>

      <div className="sort-and-actions">
        <select className="sort-dropdown">
          <option value="recent">Últimos cadastrados</option>
        </select>
        <button className="batch-actions-btn">Ações em lote</button>
      </div>

      <div className="process-list">
        {processos.map((item) => {
          const formattedItem = formatProcessData(item);
          return (
            <div key={formattedItem.id} className="process-item">
              <input type="checkbox" />
              <div className="process-details">
                <p><strong>Cliente:</strong> {formattedItem.cliente}</p>
                <p><strong>Envolvido:</strong> {formattedItem.envolvido}</p>
                <p><strong>Número do processo:</strong> {formattedItem.processo}</p>
                <p><strong>Assunto:</strong> {formattedItem.assunto}</p>
                <p><strong>Órgão:</strong> {formattedItem.orgao}</p>
              </div>
              <div className="process-status">
                <span className={`status-tag ${formattedItem.statusClass}`}>
                  {formattedItem.status}
                </span>
                <span className="tag">{formattedItem.tag}</span>
              </div>
            </div>
          );
        })}
      </div>

      {showAdvancedSearch && (
        <div className="advanced-search-popup">
          <div className="advanced-search-content">
            <h2>Busca Avançada</h2>
            <form>
              <label>
                Cliente:
                <input type="text" name="cliente" />
              </label>
              <label>
                Envolvido:
                <input type="text" name="envolvido" />
              </label>
              <label>
                Assunto:
                <input type="text" name="assunto" />
              </label>
              <label>
                Órgão:
                <input type="text" name="orgao" />
              </label>
              <button type="submit">Buscar</button>
              <button type="button" onClick={toggleAdvancedSearch}>Fechar</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProcessosPage;
