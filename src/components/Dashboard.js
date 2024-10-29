import React from 'react'; // Importa a biblioteca React para criar o componente
import './Dashboard.css'; // Importa o arquivo CSS para os estilos do componente Dashboard

// Define o componente funcional Dashboard
const Dashboard = () => {
  const today = new Date(); // Obtém a data atual
  const month = today.toLocaleString('default', { month: 'long' }); // Obtém o nome do mês atual em formato longo (ex: "Janeiro")
  const day = today.getDate(); // Obtém o dia do mês (1-31)
  const weekday = today.toLocaleString('default', { weekday: 'long' }); // Obtém o nome do dia da semana em formato longo (ex: "Segunda-feira")

  // Retorna o JSX que será renderizado
  return (
    <div className="dashboard"> {/* Contêiner principal do painel */}
      <div className="dashboard-item agenda"> {/* Item do painel para a agenda */}
        <h2>Agenda</h2> {/* Título da seção "Agenda" */}
        <div className="calendar"> {/* Contêiner para o calendário */}
          <div className="calendar-block"> {/* Bloco que contém o mês e o dia */}
            <div className="calendar-month">{month}</div> {/* Exibe o mês atual */}
            <div className="calendar-day">{day}</div> {/* Exibe o dia atual */}
          </div>
          <div className="calendar-weekday">{weekday}</div> {/* Exibe o dia da semana fora do bloco */}
        </div>
      </div>
      <div className="dashboard-item"> {/* Item do painel para tarefas */}
        <h2>Tarefas</h2> {/* Título da seção "Tarefas" */}
        <div className="circle" style={{ backgroundColor: '#ff6f61' }}>5</div> {/* Exibe o número de tarefas pendentes em um círculo vermelho */}
        <div className="index">Tarefas pendentes</div> {/* Texto que descreve a quantidade de tarefas pendentes */}
      </div>
      <div className="dashboard-item"> {/* Item do painel para intimações */}
        <h2>Intimações</h2> {/* Título da seção "Intimações" */}
        <div className="circle" style={{ backgroundColor: '#6fa3ef' }}>10</div> {/* Exibe o número de intimações recebidas em um círculo azul */}
        <div className="index">Intimações recebidas</div> {/* Texto que descreve a quantidade de intimações recebidas */}
      </div>
      <div className="dashboard-item"> {/* Item do painel para andamentos */}
        <h2>Andamentos</h2> {/* Título da seção "Andamentos" */}
        <div className="circle" style={{ backgroundColor: '#f0c419' }}>0</div> {/* Exibe o número de andamentos em aberto em um círculo amarelo */}
        <div className="index">Andamentos em aberto</div> {/* Texto que descreve a quantidade de andamentos em aberto */}
      </div>
      <div className="dashboard-item"> {/* Item do painel para audiências */}
        <h2>Audiências</h2> {/* Título da seção "Audiências" */}
        <div className="circle" style={{ backgroundColor: '#61c8f2' }}>1</div> {/* Exibe o número de audiências agendadas em um círculo azul claro */}
        <div className="index">Audiências agendadas</div> {/* Texto que descreve a quantidade de audiências agendadas */}
      </div>
      <div className="dashboard-item"> {/* Item do painel para compromissos */}
        <h2>Compromissos</h2> {/* Título da seção "Compromissos" */}
        <div className="circle" style={{ backgroundColor: '#ff4b4b' }}>0</div> {/* Exibe o número de compromissos agendados em um círculo vermelho */}
        <div className="index">Compromissos agendados</div> {/* Texto que descreve a quantidade de compromissos agendados */}
      </div>
    </div>
  );
};

export default Dashboard; // Exporta o componente Dashboard para ser utilizado em outras partes do projeto
