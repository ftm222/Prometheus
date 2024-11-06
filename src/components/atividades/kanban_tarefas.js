import React, { useState } from 'react';
import { FaSearch, FaPlus, FaCalendarAlt, FaCog } from 'react-icons/fa';

function KanbanPage() {
  const [searchText, setSearchText] = useState('');
  const [dateRange] = useState('07/10/2024 - 06/12/2024');
  const [tasks] = useState({
    Civeis: [],
    Trabalhista: [],
    Penal: [],
    Concluidas: [],
  });

  return (
    <div className="kanban-container" style={{ backgroundColor: '#1c1c1c', color: '#fff', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Kanban de Tarefas</h1>
        <button className="new-board-btn"><FaPlus /> Novo quadro</button>
      </header>

      <div className="toolbar" style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
        <button className="new-task-btn"><FaPlus /> Nova Tarefa</button>
        <input
          type="text"
          placeholder="Pesquise por responsável, situação, descrição ou marcador"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ flex: 1, marginLeft: '10px', padding: '10px', borderRadius: '4px' }}
        />
        <button className="search-btn"><FaSearch /></button>
        <div className="filters" style={{ display: 'flex', marginLeft: '10px' }}>
          <button>Busca avançada (0)</button>
          <button>Todas</button>
          <button>Sou responsável</button>
          <button>Estou envolvido</button>
          <button>Delegadas por mim</button>
          <button className="settings-btn"><FaCog /></button>
        </div>
      </div>

      <div className="sort-filter" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <select>
          <option>Mais antigas</option>
          <option>Mais recentes</option>
        </select>
        <select>
          <option>Data fatal e prevista para conclusão</option>
          <option>Outra opção</option>
        </select>
        <button className="date-picker-btn">
          <FaCalendarAlt /> {dateRange}
        </button>
      </div>

      <div className="kanban-columns" style={{ display: 'flex', gap: '10px' }}>
        {Object.keys(tasks).map((column, index) => (
          <div key={index} className="kanban-column" style={{ flex: 1, backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '4px' }}>
            <h3>{column} <span>{tasks[column].length}</span></h3>
            {/* Aqui você pode adicionar o conteúdo das tarefas */}
          </div>
        ))}
        <button className="add-column-btn"><FaPlus /> Nova coluna</button>
      </div>
    </div>
  );
}

export default KanbanPage;
