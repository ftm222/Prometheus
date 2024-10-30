import React from 'react';
import './processos.css';

function ProcessosPage() {
  return (
    <main>
      <h1>Processos</h1>

      {/* Top Buttons and Search */}
      <div className="top-bar">
        <button className="new-process-btn">Novo processo</button>
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquise por pasta, nº processo, marcador, assunto ou envolvidos"
        />
        <button className="search-btn">🔍</button>
        <button className="advanced-search-btn">Busca avançada</button>
        <button className="filter-btn">📁</button>
        <button className="status-filter all">Todos (414)</button>
        <button className="status-filter incomplete">Incompletos (1)</button>
        <button className="status-filter moved">Movimentados (169)</button>
        <button className="status-filter stopped">Parados (240)</button>
      </div>

      {/* Sort and Batch Actions */}
      <div className="sort-and-actions">
        <select className="sort-dropdown">
          <option value="recent">Últimos cadastrados</option>
        </select>
        <button className="batch-actions-btn">Ações em lote</button>
      </div>

      {/* Process List */}
      <div className="process-list">
        {[
          {
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
            cliente: "MARIA DE FATIMA OLIVEIRA GOMES",
            envolvido: "Autor",
            processo: "PRO.0001013 - 0722958-67.2024.8.07.0020 (CNJ)",
            assunto: "civel",
            orgao: "TJDF - Águas Claras - Distrito Federal/Brasília",
            status: "Movimentado",
            statusClass: "moved",
            tag: "GC",
          },
        ].map((item, index) => (
          <div key={index} className="process-item">
            <input type="checkbox" />
            <div className="process-details">
              <p><strong>Cliente:</strong> {item.cliente}</p>
              <p><strong>Envolvido:</strong> {item.envolvido}</p>
              <p><strong>Número do processo:</strong> {item.processo}</p>
              <p><strong>Assunto:</strong> {item.assunto}</p>
              <p><strong>Órgão:</strong> {item.orgao}</p>
            </div>
            <div className="process-status">
              {item.status && (
                <span className={`status-tag ${item.statusClass}`}>
                  {item.status}
                </span>
              )}
              {item.tag && <span className="tag">{item.tag}</span>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProcessosPage;
