import React from 'react'; // Importa a biblioteca React para poder criar componentes
import './processos.css'; // Importa o arquivo de estilos CSS para aplicar ao componente

// Define o componente funcional ProcessosPage
function ProcessosPage() {
  return (
    <main> {/* Início da estrutura principal da página */}
      <h1>Processos</h1> {/* Título da página */}

      {/* Top Buttons and Search */}
      <div className="top-bar"> {/* Container para a barra superior com botões e barra de pesquisa */}
        <button className="new-process-btn">Novo processo</button> {/* Botão para criar um novo processo */}
        <input
          type="text" // Tipo do input é texto
          className="search-bar" // Classe para aplicar estilos à barra de pesquisa
          placeholder="Pesquise por pasta, nº processo, marcador, assunto ou envolvidos" // Texto que aparece quando a barra está vazia
        />
        <button className="search-btn">🔍</button> {/* Botão de pesquisa */}
        <button className="advanced-search-btn">Busca avançada</button> {/* Botão para busca avançada */}
        <button className="filter-btn">📁</button> {/* Botão de filtro */}
        <button className="status-filter all">Todos (0)</button> {/* Botão para mostrar todos os processos */}
        <button className="status-filter incomplete">Incompletos (0)</button> {/* Botão para mostrar processos incompletos */}
        <button className="status-filter moved">Movimentados (0)</button> {/* Botão para mostrar processos movimentados */}
        <button className="status-filter stopped">Parados (0)</button> {/* Botão para mostrar processos parados */}
      </div>

      {/* Sort and Batch Actions */}
      <div className="sort-and-actions"> {/* Container para opções de ordenação e ações em lote */}
        <select className="sort-dropdown"> {/* Menu suspenso para selecionar o tipo de ordenação */}
          <option value="recent">Últimos cadastrados</option> {/* Opção para ordenar pelos últimos cadastrados */}
        </select>
        <button className="batch-actions-btn">Ações em lote</button> {/* Botão para realizar ações em lote */}
      </div>

      {/* Process List */}
      <div className="process-list"> {/* Container para a lista de processos */}
        {[
          {
            cliente: "SDREDES SEGURANCA DE REDES LTDA - ME", // Nome do cliente
            envolvido: "Reclamado", // Tipo de envolvido no processo
            processo: "PRO.0001015 - 0000916-54.2024.5.10.0013 (CNJ)", // Número do processo
            assunto: "trabalhista", // Assunto do processo
            orgao: "TRT10 - TRT Da 10ª Região - Distrito Federal/Brasília", // Órgão responsável
            status: "Incompleto", // Status do processo
            statusClass: "incomplete", // Classe CSS para o status
            tag: "ND", // Tag associada ao processo
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
        ].map((item, index) => ( // Mapeia cada item do array de processos para criar elementos JSX
          <div key={index} className="process-item"> {/* Container para cada item de processo */}
            <input type="checkbox" /> {/* Checkbox para seleção do processo */}
            <div className="process-details"> {/* Container para os detalhes do processo */}
              <p><strong>Cliente:</strong> {item.cliente}</p> {/* Exibe o nome do cliente */}
              <p><strong>Envolvido:</strong> {item.envolvido}</p> {/* Exibe o tipo de envolvido */}
              <p><strong>Número do processo:</strong> {item.processo}</p> {/* Exibe o número do processo */}
              <p><strong>Assunto:</strong> {item.assunto}</p> {/* Exibe o assunto do processo */}
              <p><strong>Órgão:</strong> {item.orgao}</p> {/* Exibe o órgão responsável */}
            </div>
            <div className="process-status"> {/* Container para o status do processo */}
              {item.status && ( // Verifica se há um status definido
                <span className={`status-tag ${item.statusClass}`}> {/* Exibe o status com a classe apropriada */}
                  {item.status}
                </span>
              )}
              {item.tag && <span className="tag">{item.tag}</span>} {/* Exibe a tag se estiver presente */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProcessosPage; // Exporta o componente para ser utilizado em outras partes da aplicação
