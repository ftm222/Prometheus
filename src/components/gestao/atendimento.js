// Atendimentos.js
import React, { useState } from 'react';
import './atendimento.css';

const Atendimentos = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(prevState => !prevState);
  };

  return (
    <div>
      <main>
        <div className="top-bar">
          <div className="left">
            <h1>Buscar Atendimentos</h1>
          </div>
          <div className="right">
            <button id="new">Novo</button>
            <button id="help">Ajuda</button>
            <button id="video">Vídeo</button>
            <button id="support">Suporte</button>
          </div>
        </div>

        <div className="search-bar-wrapper">
          <input type="text" className="search-bar" placeholder="Buscar atendimentos" />
          <button className="search-btn">Buscar</button>
        </div>

        <div className="advanced-search-toggle">
          <button id="toggle-advanced-search" onClick={toggleAdvancedSearch}>
            {showAdvancedSearch ? 'Ocultar Busca Avançada ⯅' : 'Busca Avançada ⯆'}
          </button>
        </div>

        {showAdvancedSearch && (
          <section id="advanced-search" className="advanced-search">
            <form>
              <div className="advanced-search-fields">
                <div className="field-group">
                  <label htmlFor="subject">Assunto:</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="field-group">
                  <label htmlFor="folder">Pasta:</label>
                  <input type="text" id="folder" name="folder" />
                </div>
                <div className="field-group">
                  <label htmlFor="tag">Marcador:</label>
                  <input type="text" id="tag" name="tag" />
                </div>
                <div className="field-group">
                  <label htmlFor="involved">Envolvido:</label>
                  <input type="text" id="involved" name="involved" />
                </div>
              </div>
              <div className="advanced-search-fields">
                <div className="field-group">
                  <label htmlFor="description">Descrição:</label>
                  <input type="text" id="description" name="description" />
                </div>
                <div className="field-group">
                  <label htmlFor="status">Status:</label>
                  <input type="text" id="status" name="status" />
                </div>
                <div className="field-group">
                  <label htmlFor="date">Data:</label>
                  <input type="date" id="date" name="date" />
                </div>
                <div className="field-group">
                  <label htmlFor="priority">Prioridade:</label>
                  <select id="priority" name="priority">
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                  </select>
                </div>
              </div>
              <button type="submit">Pesquisar</button>
            </form>
          </section>
        )}

        <section className="atendimentos">
          <div className="attendance-item">
            <p><strong>ID:</strong> ATE.0000145</p>
            <p><strong>Área:</strong> Administrativa</p>
            <p><strong>Última atualização:</strong> 10/07/2024</p>
            <p><strong>Cliente:</strong> Josilene Batista de Oliveira</p>
            <p><strong>Unidade Organizacional:</strong> Fernandes & Caleo Associados</p>
            <p><strong>Responsáveis:</strong> Fernanda França</p>
            <p><strong>Situação:</strong> Ativo</p>
            <p><strong>Observação:</strong> Pode verificar por favor o que podemos fazer?</p>
          </div>
        </section>

        <section className="pagination">
          <div>
            <button>«</button>
            <button>1</button>
            <button>2</button>
            <button>»</button>
          </div>
          <div className="page-info">Página 1 de 2</div>
        </section>
      </main>

      <footer>
        <p>© 2025 Prometheus - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Atendimentos;
