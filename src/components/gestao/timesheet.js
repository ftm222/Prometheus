// src/components/gestao/Timesheet.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import './timesheet.css'; // Certifique-se de que o nome do arquivo CSS esteja correto

const Timesheet = () => {
    const navigate = useNavigate(); // Inicializa o hook useNavigate
    const [currentPage, setCurrentPage] = useState('timesheets'); // Estado para controlar a página atual
    const [timesheets] = useState([]); // Estado para armazenar os timesheets
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false); // Estado para controlar o modal de busca avançada

    // Funções para alternar entre as páginas
    const handleLaunchHoursClick = () => {
        setCurrentPage('launch-hours');
    };

    const handleViewTimesheetsClick = () => {
        setCurrentPage('timesheets');
    };

    const handleNewTimesheetClick = () => {
        // Redireciona para a página "novoTimesheet"
        navigate('/gestao/timesheet/novo-timesheet'); // Atualizado para o caminho correto
    };

    // Função para exibir a busca avançada
    const handleAdvancedSearchClick = () => {
        setShowAdvancedSearch(true);
    };

    // Função para fechar a busca avançada
    const closeAdvancedSearch = () => {
        setShowAdvancedSearch(false);
    };

    return (
        <div className="timesheet-container">
            <main className="main-content">
                <h1>Timesheet</h1>

                {/* Botões abaixo do título "Timesheet" */}
                <div className="timesheet-buttons">
                    <button className="launch-hours-btn" onClick={handleLaunchHoursClick}>
                        Lançamento de horas
                    </button>
                    <button className="view-timesheets-btn" onClick={handleViewTimesheetsClick}>
                        Timesheets
                    </button>
                </div>

                {/* Barra de pesquisa e botão "Novo timesheet" alinhados */}
                <div className="timesheet-actions">
                    <button className="new-timesheet-btn" onClick={handleNewTimesheetClick}>
                        Novo timesheet
                    </button>
                    <div className="search-bar">
                        <input type="text" placeholder="Pesquise pelo tipo, responsável, cliente ou identificador" />
                        <button className="btn-search">Buscar</button>
                        <button className="btn-advanced-search" onClick={handleAdvancedSearchClick}>
                            Busca avançada
                        </button>
                        {/* Botão "Gerar Relatório" ao lado do campo de busca avançada */}
                        <button className="btn-generate-report">Gerar Relatório</button>
                    </div>
                </div>

                {/* Modal de Busca Avançada */}
                {showAdvancedSearch && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-btn" onClick={closeAdvancedSearch}>
                                &times;
                            </span>
                            <h2>Busca Avançada</h2>
                            <div className="advanced-search-fields">
                                <label>Responsável:</label>
                                <input type="text" placeholder="Responsável" />
                                <label>Cliente:</label>
                                <input type="text" placeholder="Cliente" />
                                <label>Data de Início:</label>
                                <input type="date" />
                                <label>Data de Fim:</label>
                                <input type="date" />
                                <label>Status:</label>
                                <select>
                                    <option value="">Todos</option>
                                    <option value="aberto">Aberto</option>
                                    <option value="fechado">Fechado</option>
                                    <option value="pendente">Pendente</option>
                                </select>
                            </div>
                            <button className="btn-apply-filters">Aplicar Filtros</button>
                        </div>
                    </div>
                )}

                {/* Quadro de listagem */}
                <div className="timesheet-list">
                    {timesheets.length > 0 ? (
                        <table className="timesheet-table">
                            <thead>
                                <tr>
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
                                {timesheets.map((timesheet, index) => (
                                    <tr key={index}>
                                        <td>{timesheet.id}</td>
                                        <td>{timesheet.tipo}</td>
                                        <td>{timesheet.responsavel}</td>
                                        <td>{timesheet.cliente}</td>
                                        <td>{timesheet.horas}</td>
                                        <td>{timesheet.data}</td>
                                        <td>
                                            <button className="btn-edit">Editar</button>
                                            <button className="btn-delete">Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="empty-state">
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

export default Timesheet;
