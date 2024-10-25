import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const today = new Date(); // Data atual
  const month = today.toLocaleString('default', { month: 'long' }); // Nome do mês
  const day = today.getDate(); // Dia do mês
  const weekday = today.toLocaleString('default', { weekday: 'long' }); // Dia da semana

  return (
    <div className="dashboard">
      <div className="dashboard-item agenda">
        <h2>Agenda</h2>
        <div className="calendar">
          <div className="calendar-block">
            <div className="calendar-month">{month}</div>
            <div className="calendar-day">{day}</div>
          </div>
          <div className="calendar-weekday">{weekday}</div> {/* Dia da semana fora do bloco */}
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Tarefas</h2>
        <div className="circle" style={{ backgroundColor: '#ff6f61' }}>5</div>
        <div className="index">Tarefas pendentes</div>
      </div>
      <div className="dashboard-item">
        <h2>Intimações</h2>
        <div className="circle" style={{ backgroundColor: '#6fa3ef' }}>10</div>
        <div className="index">Intimações recebidas</div>
      </div>
      <div className="dashboard-item">
        <h2>Andamentos</h2>
        <div className="circle" style={{ backgroundColor: '#f0c419' }}>0</div>
        <div className="index">Andamentos em aberto</div>
      </div>
      <div className="dashboard-item">
        <h2>Audiências</h2>
        <div className="circle" style={{ backgroundColor: '#61c8f2' }}>1</div>
        <div className="index">Audiências agendadas</div>
      </div>
      <div className="dashboard-item">
        <h2>Compromissos</h2>
        <div className="circle" style={{ backgroundColor: '#ff4b4b' }}>0</div>
        <div className="index">Compromissos agendados</div>
      </div>
    </div>
  );
};

export default Dashboard;
