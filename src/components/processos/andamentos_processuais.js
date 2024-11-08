// Importa as dependências necessárias
import React, { useState } from "react";  // Importa o React e o hook useState para o gerenciamento de estados
import { FaSearch, FaPlus, FaEnvelope } from "react-icons/fa";  // Importa ícones específicos de react-icons (fa-search, fa-plus, fa-envelope)

// Importa useNavigate para manipular navegação de páginas
import { useNavigate } from 'react-router-dom';  // Importa o hook useNavigate da biblioteca react-router-dom para navegação entre páginas

import './andamentos_processuais.css';  // Importa o arquivo CSS para estilização do componente

// Define o componente funcional ProcessListPage
const ProcessListPage = () => {
  // Usa o hook useNavigate para navegar para outras páginas
  const navigate = useNavigate();  // Cria uma instância de navegação

  // Define dois estados com o hook useState
  const [searchTerm, setSearchTerm] = useState("");  // Estado para armazenar o termo de busca
  const [filter, setFilter] = useState("Todos");  // Estado para armazenar o filtro selecionado (inicialmente "Todos")

  // Dados de exemplo dos processos (seriam normalmente vindos de uma API ou banco de dados)
  const processos = [
    {
      data: "08/11/2024",  // Data do processo
      orgao: "TJDF",  // Órgão responsável
      tipo: "Intimação",  // Tipo de andamento do processo
      processo: "0729159-45.2018.8.07.0001",  // Número do processo
      cliente: "MANOEL MARTINS JUNIOR",  // Nome do cliente
      descricao: "13ª Vara Cível de Brasília CUMPR",  // Descrição do andamento
    },
    {
      data: "08/11/2024",
      orgao: "TJDF",
      tipo: "Intimação",
      processo: "0710475-15.2022.8.07.0007",
      cliente: "ANTONIO DA ROCHA MENDES",
      descricao: "3ª Vara Cível de Taguatinga PRO",
    },
    {
      data: "08/11/2024",
      orgao: "TJDF",
      tipo: "Intimação",
      processo: "0724308-26.2019.8.07.0001",
      cliente: "CLAUDIOMÁ PEREIRA BORGES",
      descricao: "4ª Vara Cível de Brasília CUMPR",
    },
    // Outros registros de exemplo...
  ];

  // Filtra os processos com base no termo de busca inserido
  const filteredProcessos = processos.filter((processo) =>
    processo.descricao.toLowerCase().includes(searchTerm.toLowerCase())  // Filtra os processos onde a descrição inclui o termo de busca
  );

  // Função para manipular a navegação para uma nova página
  const handleNewMoviment = () => {
    console.log("Abrindo formulário para novo processo...");  // Exibe mensagem no console
    navigate('/processos/andamentos/novo-andamento');  // Navega para a página de criação de um novo andamento
  };

  return (
    // JSX para estruturar a página
    <div className="process-list-page">  {/* Contêiner principal da página*/}
      <header>  {/* Cabeçalho da página*/}
        <h1>Andamentos Processuais</h1>  {/* Título da página*/}
      </header>
      <div className="actions">  {/* Contêiner para as ações da página (botões, barra de pesquisa, etc.)*/}
        <div className="new-process-btn-container">  {/* Contêiner para o botão de "Novo Andamento"*/}
          <button className="new-process-btn" onClick={handleNewMoviment}>Novo Andamento</button>  {/* Botão que chama a função para abrir o formulário de novo andamento*/}
          <FaPlus /> Novo Andamento  {/* Ícone do botão (plus)*/}
        </div>
        <div className="search-bar">  {/* Barra de pesquisa*/}
          <FaSearch className="search-icon" />  {/* Ícone da lupa de pesquisa*/}
          <input
            type="text"
            placeholder="Pesquise pelo tipo de andamento, descrição, identificador, nº do processo ou cliente"
            value={searchTerm}  // Define o valor do campo de input com o estado searchTerm
            onChange={(e) => setSearchTerm(e.target.value)}  // Atualiza o estado searchTerm conforme o usuário digita
          />
        </div>
        <button className="btn-busca-avancada">Busca Avançada</button>  {/* Botão para busca avançada*/}
        <div className="filter-buttons">  {/* Contêiner para os botões de filtro*/}
          <button
            className={`filter ${filter === "Todos" ? "active" : ""}`}  // Define o botão ativo com base no filtro
            onClick={() => setFilter("Todos")}  // Atualiza o estado filter para "Todos"
          >
            Todos
          </button>
          <button
            className={`filter ${filter === "Lidos" ? "active" : ""}`}  // Define o botão ativo com base no filtro
            onClick={() => setFilter("Lidos")}  // Atualiza o estado filter para "Lidos"
          >
            Lidos
          </button>
          <button
            className={`filter ${filter === "Não lidos" ? "active" : ""}`}  // Define o botão ativo com base no filtro
            onClick={() => setFilter("Não lidos")}  // Atualiza o estado filter para "Não lidos"
          >
            Não Lidos
          </button>
        </div>
        <div className="sort-dropdown">  {/* Contêiner para o dropdown de ordenação*/}
          <select>  {/* Menu dropdown*/}
            <option value="mais-recentes">Mais recentes</option>  {/* Opção para ordenar por mais recentes*/}
            <option value="menos-recentes">Menos recentes</option>  {/* Opção para ordenar por menos recentes*/}
          </select>
        </div>
      </div>
      <table className="process-table">  {/*Tabela que exibe os processos filtrados*/}
        <thead>  {/* Cabeçalho da tabela*/}
          <tr>  {/* Linha do cabeçalho*/}
            <th></th>  {/* Coluna para o checkbox*/}
            <th>Data</th>  {/* Coluna para a data do processo*/}
            <th>Órgão</th>  {/* Coluna para o órgão responsável*/}
            <th>Tipo</th>  {/* Coluna para o tipo de andamento*/}
            <th>Processo</th>  {/* Coluna para o número do processo*/}
            <th>Cliente</th>  {/* Coluna para o nome do cliente*/}
            <th>Descrição</th>  {/* Coluna para a descrição do andamento*/}
            <th></th>  {/* Coluna para um botão de ação (ex: visualizar)*/}
          </tr>
        </thead>
        <tbody>  {/* Corpo da tabela*/}
          {filteredProcessos.map((processo, index) => (  // Mapeia os processos filtrados
            <tr key={index}>  {/* Cada linha da tabela é associada a um processo*/}
              <td>
                <input type="checkbox" />  {/* Checkbox para seleção*/}
              </td>
              <td>{processo.data}</td>  {/* Exibe a data do processo*/}
              <td>{processo.orgao}</td>  {/* Exibe o órgão responsável*/}
              <td>{processo.tipo}</td>  {/* Exibe o tipo de andamento*/}
              <td>{processo.processo}</td>  {/* Exibe o número do processo*/}
              <td>{processo.cliente}</td>  {/* Exibe o nome do cliente*/}
              <td>{processo.descricao}</td>  {/* Exibe a descrição do andamento*/}
              <td>
                <button className="btn-visualizar">  {/* Botão para visualizar detalhes do processo*/}
                  <FaEnvelope />  {/* Ícone de envelope*/}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <aside className="support">  {/* Barra lateral para suporte*/}
        <button>Suporte Novidades</button>  {/* Botão para acessar o suporte ou novidades*/}
      </aside>
    </div>
  );
};

export default ProcessListPage;  // Exporta o componente para uso em outros arquivos
