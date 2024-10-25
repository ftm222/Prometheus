// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Importando as rotas e o hook 'useLocation'
import Navbar from './components/navbar'; // Importa o componente da barra de navegação
import Header from './components/header'; // Importa o componente de cabeçalho
import Dashboard from './components/Dashboard'; // Importa o componente da página inicial
import Calendar from './components/Calendar'; // Importa o componente do calendário

// Importação dos componentes da páginas Gestão
import Atendimento from './components/gestao/atendimento';
import InserirAtendimento from './components/gestao/inserirAtendimento'; // Importa o componente InserirAtendimento
import Pessoa from './components/gestao/pessoa';
import Workflow from './components/gestao/workflow';
import Timesheet from './components/gestao/timesheet';
import NovoTimesheet from './components/gestao/NovoTimesheet'; // Importa o componente NovoTimesheet
import MainContent from './components/gestao/MainContent'; // Certifique-se de que MainContent seja utilizado

// Importação dos componentes da páginas Atividades
import ListaAtividades from './components/atividades/lista_atividades';
import PainelTarefas from './components/atividades/painel_tarefas';
import KanbanTarefas from './components/atividades/kanban_tarefas';
import RelatoriosAtividades from './components/atividades/relatorios';

// Importação dos componentes da páginas Processos
import Processos from './components/processos/processos';
import Intimacoes from './components/processos/intimacoes';
import CentralCaptura from './components/processos/central_captura_processos';
import AndamentosProcessuais from './components/processos/andamentos_processuais';
import RelatoriosProcessos from './components/processos/relatórios';

// Importação dos componentes da páginas Financeiro
import ReceitasDespesas from './components/finaneceiro/receitas_despesas';
import ExtratoConta from './components/finaneceiro/extrato_conta';
import Solicitacoes from './components/finaneceiro/solicitacoes';
import IntegracaoReceitas from './components/finaneceiro/integracao_receitas';
import IntegracaoDespesas from './components/finaneceiro/integracao_despesas';
import RelatoriosFinanceiro from './components/finaneceiro/relatorios';

// Importação dos componentes da páginas Documentos
import Documentos from './components/documentos/documentos';
import ModelosDocumentos from './components/documentos/modelos_documentos';

// Importação dos componentes da páginas Extensoes
import Conexoes from './components/extensoes/conexoes';
import RelatoriosExtensoes from './components/extensoes/relatorios';

// Importação dos componentes da páginas App.css
import './App.css'; // Importa os estilos globais da aplicação

// Função principal do componente App
const App = () => {
  const location = useLocation(); // Hook do React Router que captura a localização atual da URL

  // Lógica para exibir o calendário somente na página inicial (com domínio específico)
  const isHomePage = window.location.origin === 'http://localhost:3000' && location.pathname === '/';

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : ''}`}> {/* Corrigido o uso de className e template string */}
      <Navbar /> {/* Renderiza a barra de navegação em todas as páginas */}
      <Header /> {/* Renderiza o cabeçalho em todas as páginas */}

      <Routes>
        {/* Definição das rotas */}
        <Route path="/" element={<Dashboard />} /> {/* Página inicial (Dashboard) */}

        {/* Rotas para a seção de gestão */}
        <Route path="/gestao/atendimento" element={<Atendimento />} />
        <Route path="/gestao/atendimento/inserirAtendimento" element={<InserirAtendimento />} /> {/* Nova rota para InserirAtendimento */}
        <Route path="/gestao/pessoa" element={<Pessoa />} />
        <Route path="/gestao/workflow" element={<Workflow />} />
        <Route path="/gestao/timesheet" element={<Timesheet />} />
        <Route path="/gestao/timesheet/novo-timesheet" element={<NovoTimesheet />} /> {/* Nova rota para NovoTimesheet */}

        {/* Aqui você renderiza Sidebar e MainContent juntos */}
        <Route path="/gestao/relatorios" element={
          <div style={{ display: 'flex' }}>
            <MainContent />
          </div>
        } /> 

        {/* Rotas para a seção de atividades */}
        <Route path="/atividades" element={<ListaAtividades />} />
        <Route path="/atividades/painel" element={<PainelTarefas />} />
        <Route path="/atividades/kanban" element={<KanbanTarefas />} />
        <Route path="/atividades/relatorios" element={<RelatoriosAtividades />} />

        {/* Rotas para a seção de processos */}
        <Route path="/processos" element={<Processos />} />
        <Route path="/processos/intimacoes" element={<Intimacoes />} />
        <Route path="/processos/central-captura" element={<CentralCaptura />} />
        <Route path="/processos/andamentos" element={<AndamentosProcessuais />} />
        <Route path="/processos/relatorios" element={<RelatoriosProcessos />} />

        {/* Rotas para a seção financeiro */}
        <Route path="/financeiro" element={<ReceitasDespesas />} />
        <Route path="/financeiro/extrato" element={<ExtratoConta />} />
        <Route path="/financeiro/solicitacoes" element={<Solicitacoes />} />
        <Route path="/financeiro/integracao-receitas" element={<IntegracaoReceitas />} />
        <Route path="/financeiro/integracao-despesas" element={<IntegracaoDespesas />} />
        <Route path="/financeiro/relatorios" element={<RelatoriosFinanceiro />} />

        {/* Rotas para a seção de documentos */}
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/documentos/modelos" element={<ModelosDocumentos />} />

        {/* Rotas para a seção de extensões */}
        <Route path="/extensoes" element={<Conexoes />} />
        <Route path="/extensoes/relatorios" element={<RelatoriosExtensoes />} />
      </Routes>

      {/* Renderiza o calendário apenas se for a página inicial e o domínio for "http://localhost:3000" */}
      {isHomePage && (
        <div className="calendar-container">
          <Calendar /> {/* Componente de calendário */}
        </div>
      )}
    </div>
  );
};

// Wrapper para usar o React Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
