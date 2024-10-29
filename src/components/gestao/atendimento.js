// Atendimentos.js

// Importa o React e o hook useState para gerenciar o estado do componente
import React, { useState } from 'react';

// Importa o arquivo de estilos CSS para o componente
import './atendimento.css';

// Define o componente funcional Atendimentos
const Atendimentos = () => {
  // Declara uma variável de estado 'showAdvancedSearch' e uma função 'setShowAdvancedSearch' para controlar a exibição da busca avançada
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  // Define uma função para alternar o estado de 'showAdvancedSearch'
  const toggleAdvancedSearch = () => {
    // Atualiza o estado com o valor oposto do estado anterior
    setShowAdvancedSearch(prevState => !prevState);
  };

  // Retorna o JSX que representa o componente
  return (
    <div>
      <main>
        <div className="top-bar">
          <div className="left">
            <h1>Buscar Atendimentos</h1> {/* Título da página */}
          </div>
          <div className="right">
            {/* Botões de ação na barra superior */}
            <button id="new">Novo</button>
            <button id="help">Ajuda</button>
            <button id="video">Vídeo</button>
            <button id="support">Suporte</button>
          </div>
        </div>

        <div className="search-bar-wrapper">
          {/* Campo de busca para procurar atendimentos */}
          <input type="text" className="search-bar" placeholder="Buscar atendimentos" />
          <button className="search-btn">Buscar</button> {/* Botão para executar a busca */}
        </div>

        <div className="advanced-search-toggle">
          {/* Botão para alternar a exibição da busca avançada */}
          <button id="toggle-advanced-search" onClick={toggleAdvancedSearch}>
            {/* Exibe texto condicional com base no estado de showAdvancedSearch */}
            {showAdvancedSearch ? 'Ocultar Busca Avançada ⯅' : 'Busca Avançada ⯆'}
          </button>
        </div>

        {/* Renderiza a seção de busca avançada se showAdvancedSearch for verdadeiro */}
        {showAdvancedSearch && (
          <section id="advanced-search" className="advanced-search">
            <form>
              <div className="advanced-search-fields">
                {/* Grupo de campos para o assunto da busca */}
                <div className="field-group">
                  <label htmlFor="subject">Assunto:</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                {/* Grupo de campos para a pasta da busca */}
                <div className="field-group">
                  <label htmlFor="folder">Pasta:</label>
                  <input type="text" id="folder" name="folder" />
                </div>
                {/* Grupo de campos para o marcador da busca */}
                <div className="field-group">
                  <label htmlFor="tag">Marcador:</label>
                  <input type="text" id="tag" name="tag" />
                </div>
                {/* Grupo de campos para o envolvido da busca */}
                <div className="field-group">
                  <label htmlFor="involved">Envolvido:</label>
                  <input type="text" id="involved" name="involved" />
                </div>
              </div>
              <div className="advanced-search-fields">
                {/* Grupo de campos para a descrição da busca */}
                <div className="field-group">
                  <label htmlFor="description">Descrição:</label>
                  <input type="text" id="description" name="description" />
                </div>
                {/* Grupo de campos para o status da busca */}
                <div className="field-group">
                  <label htmlFor="status">Status:</label>
                  <input type="text" id="status" name="status" />
                </div>
                {/* Grupo de campos para a data da busca */}
                <div className="field-group">
                  <label htmlFor="date">Data:</label>
                  <input type="date" id="date" name="date" />
                </div>
                {/* Grupo de campos para a prioridade da busca */}
                <div className="field-group">
                  <label htmlFor="priority">Prioridade:</label>
                  <select id="priority" name="priority">
                    {/* Opções para selecionar a prioridade */}
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                  </select>
                </div>
              </div>
              <button type="submit">Pesquisar</button> {/* Botão para submeter a busca avançada */}
            </form>
          </section>
        )}

        <section className="atendimentos">
          <div className="attendance-item">
            {/* Informações sobre um atendimento específico */}
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
            {/* Botões para navegar entre as páginas */}
            <button>«</button>
            <button>1</button>
            <button>2</button>
            <button>»</button>
          </div>
          <div className="page-info">Página 1 de 2</div> {/* Informação sobre a página atual */}
        </section>
      </main>

      <footer>
        <p>© 2025 Prometheus - Todos os direitos reservados.</p> {/* Informações de copyright no rodapé */}
      </footer>
    </div>
  );
};

// Exporta o componente Atendimentos para ser utilizado em outras partes do aplicativo
export default Atendimentos;
