// src/components/gestao/Timesheet.js
// Importa a biblioteca React e o hook useState, que permite gerenciar estado dentro do componente
import React, { useState } from 'react';
// Importa o hook useNavigate da biblioteca react-router-dom para navegação entre páginas
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
// Importa o arquivo de estilos CSS para o componente
import './timesheet.css'; // Certifique-se de que o nome do arquivo CSS esteja correto

// Define o componente funcional Timesheet
const Timesheet = () => {
    // Inicializa o hook useNavigate, permitindo redirecionamento de páginas
    const navigate = useNavigate(); // Inicializa o hook useNavigate
    // Define o estado currentPage, com valor inicial 'timesheets'
    const [currentPage, setCurrentPage] = useState('timesheets'); // Estado para controlar a página atual
    // Define o estado timesheets como um array vazio para armazenar os timesheets
    const [timesheets] = useState([]); // Estado para armazenar os timesheets
    // Define o estado showAdvancedSearch como false para controlar a exibição do modal de busca avançada
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false); // Estado para controlar o modal de busca avançada

    // Função que altera a página atual para 'launch-hours' ao clicar no botão correspondente
    const handleLaunchHoursClick = () => {
        setCurrentPage('launch-hours');
    };

    // Função que altera a página atual para 'timesheets' ao clicar no botão correspondente
    const handleViewTimesheetsClick = () => {
        setCurrentPage('timesheets');
    };

    // Função que redireciona para a página de criação de um novo timesheet
    const handleNewTimesheetClick = () => {
        // Redireciona para a página "novoTimesheet"
        navigate('/gestao/timesheet/novo-timesheet'); // Atualizado para o caminho correto
    };

    // Função que exibe o modal de busca avançada
    const handleAdvancedSearchClick = () => {
        setShowAdvancedSearch(true);
    };

    // Função que fecha o modal de busca avançada
    const closeAdvancedSearch = () => {
        setShowAdvancedSearch(false);
    };

    // Renderiza o componente Timesheet
    return (
        <div className="timesheet-container">
            <main className="main-content">
                {/* Título do componente */}
                <h1>Timesheet</h1>

                {/* Botões abaixo do título "Timesheet" */}
                <div className="timesheet-buttons">
                    {/* Botão para lançamento de horas */}
                    <button className="launch-hours-btn" onClick={handleLaunchHoursClick}>
                        Lançamento de horas
                    </button>
                    {/* Botão para visualizar timesheets */}
                    <button className="view-timesheets-btn" onClick={handleViewTimesheetsClick}>
                        Timesheets
                    </button>
                </div>

                {/* Barra de pesquisa e botão "Novo timesheet" alinhados */}
                <div className="timesheet-actions">
                    {/* Botão para criar um novo timesheet */}
                    <button className="new-timesheet-btn" onClick={handleNewTimesheetClick}>
                        Novo timesheet
                    </button>
                    <div className="search-bar">
                        {/* Campo de pesquisa */}
                        <input type="text" placeholder="Pesquise pelo tipo, responsável, cliente ou identificador" />
                        {/* Botão de busca */}
                        <button className="btn-search">Buscar</button>
                        {/* Botão de busca avançada */}
                        <button className="btn-advanced-search" onClick={handleAdvancedSearchClick}>
                            Busca avançada
                        </button>
                        {/* Botão para gerar um relatório */}
                        <button className="btn-generate-report">Gerar Relatório</button>
                    </div>
                </div>

                {/* Modal de Busca Avançada */}
                {showAdvancedSearch && (
                    <div className="modal">
                        <div className="modal-content">
                            {/* Botão para fechar o modal */}
                            <span className="close-btn" onClick={closeAdvancedSearch}>
                                &times; {/* Representa o símbolo de fechar */}
                            </span>
                            {/* Título do modal */}
                            <h2>Busca Avançada</h2>
                            <div className="advanced-search-fields">
                                {/* Campo para inserir o responsável */}
                                <label>Responsável:</label>
                                <input type="text" placeholder="Responsável" />
                                {/* Campo para inserir o cliente */}
                                <label>Cliente:</label>
                                <input type="text" placeholder="Cliente" />
                                {/* Campo para inserir a data de início */}
                                <label>Data de Início:</label>
                                <input type="date" />
                                {/* Campo para inserir a data de fim */}
                                <label>Data de Fim:</label>
                                <input type="date" />
                                {/* Campo para selecionar o status */}
                                <label>Status:</label>
                                <select>
                                    <option value="">Todos</option>
                                    <option value="aberto">Aberto</option>
                                    <option value="fechado">Fechado</option>
                                    <option value="pendente">Pendente</option>
                                </select>
                            </div>
                            {/* Botão para aplicar filtros de busca */}
                            <button className="btn-apply-filters">Aplicar Filtros</button>
                        </div>
                    </div>
                )}

                {/* Quadro de listagem */}
                <div className="timesheet-list">
                    {/* Verifica se existem timesheets para exibir */}
                    {timesheets.length > 0 ? (
                        <table className="timesheet-table">
                            <thead>
                                <tr>
                                    {/* Cabeçalhos da tabela */}
                                    <th>ID</th>
                                    <th>Tipo</th>
                                    <th>Responsável</th>
                                    <th>Cliente</th>
                                    <th>Horas</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Mapeia os timesheets para gerar as linhas da tabela */}
                                {timesheets.map((timesheet, index) => (
                                    <tr key={index}>
                                        <td>{timesheet.id}</td>
                                        <td>{timesheet.tipo}</td>
                                        <td>{timesheet.responsavel}</td>
                                        <td>{timesheet.cliente}</td>
                                        <td>{timesheet.horas}</td>
                                        <td>{timesheet.data}</td>
                                        <td>
                                            {/* Botões para editar e excluir o timesheet */}
                                            <button className="btn-edit">Editar</button>
                                            <button className="btn-delete">Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="empty-state">
                            {/* Imagem que indica que não há timesheets */}
                            <img src="no-timesheet.png" alt="No Timesheet" />
                            {/* Renderiza o texto baseado na página atual */}
                            {currentPage === 'timesheets' ? (
                                <p>Nenhum timesheet para ser listado.</p>
                            ) : (
                                <p>Nenhum lançamento de hora para ser listado.</p>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

// Exporta o componente Timesheet para que possa ser utilizado em outros módulos
export default Timesheet;
