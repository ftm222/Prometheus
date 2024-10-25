import React, { useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        toggleSidebar(false); // Fecha o sidebar automaticamente em telas menores
      } else {
        toggleSidebar(true); // Abre o sidebar em telas maiores
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama a função ao carregar o componente

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [toggleSidebar]);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => toggleSidebar(!isOpen)}>
        ☰ Menu
      </button>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Seção de Gestão */}
        <div className="section">
          <h3>Gestão</h3>
          <ul>
            <li className="dropdown">
              Relatórios
              <ul className="dropdown-content">
                <li>Relatórios Financeiros</li>
                <li>Relatórios de Performance</li>
                <li>Relatórios de Atividades</li>
              </ul>
            </li>
            <li>Atendimentos por cliente</li>
            <li>Pessoas em planilha</li>
          </ul>
        </div>

        {/* Seção de Atividades */}
        <div className="section">
          <h3>Atividades</h3>
          <ul>
            <li>Timesheet</li>
            <li>Tarefas</li>
          </ul>
        </div>

        {/* Seção de Processos */}
        <div className="section">
          <h3>Processos</h3>
          <ul>
            <li>Andamentos em planilha</li>
            <li>Bens & Garantia por Processo</li>
            <li>Pedidos por Processo</li>
            <li>Processos ativos, recebidos e arquivados por cliente</li>
            <li>Processos sem movimentação</li>
          </ul>
        </div>

        {/* Seção Financeiro */}
        <div className="section">
          <h3>Financeiro</h3>
          <ul>
            <li>Contas a Pagar e Receber por Dia</li>
            <li>DFC - Demonstrativo de Fluxo de Caixa</li>
            <li>DRE - Demonstrativo de Resultado do Exercício</li>
            <li>Fluxo de Caixa Anual</li>
            <li>Receitas e Despesas Pagas por Dia</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
