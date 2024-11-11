// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';

// Importação dos componentes da página de Gestão
import Atendimento from './components/gestao/atendimento';
import InserirAtendimento from './components/gestao/inserirAtendimento';
import Pessoa from './components/gestao/pessoa';
import Workflow from './components/gestao/workflow';
import Timesheet from './components/gestao/timesheet';
import NovoTimesheet from './components/gestao/NovoTimesheet';
import MainContent from './components/gestao/MainContent';

// Importação dos componentes da página de Atividades
import ListaAtividades from './components/atividades/lista_atividades';
import PainelTarefas from './components/atividades/painel_tarefas';
import KanbanTarefas from './components/atividades/kanban_tarefas';
import NovaTarefa from './components/atividades/novaTarefa';
import RelatoriosAtividades from './components/atividades/relatorios';

// Importação dos componentes da página de Processos
import Processos from './components/processos/processos';
import Intimacoes from './components/processos/intimacoes';
import CentralCaptura from './components/processos/central_captura_processos';
import AndamentosProcessuais from './components/processos/andamentos_processuais';
import RelatoriosProcessos from './components/processos/relatórios'; // Verifique se este caminho está correto
import NovoProcesso from './components/processos/novoProcesso';
import NovoAndamento from './components/processos/novoAndamento';

// Importação dos componentes da página Financeiro
import ReceitasDespesas from './components/financeiro/receitas_despesas';
import ExtratoConta from './components/financeiro/extrato_conta';
import Solicitacoes from './components/financeiro/solicitacoes';
import IntegracaoReceitas from './components/financeiro/integracao_receitas';
import IntegracaoDespesas from './components/financeiro/integracao_despesas';
import RelatoriosFinanceiro from './components/financeiro/relatorios';
import LancamentoReceita from './components/financeiro/lancamentoReceita';
import LancamentoDespesas from './components/financeiro/lancamentoDespesas';
import LancamentoTransferencia from './components/financeiro/lancamentoTransferencia';

// Importação dos componentes da página Documentos
import Documentos from './components/documentos/documentos';
import ModelosDocumentos from './components/documentos/modelos_documentos';

// Importação dos componentes da página Extensões
import Conexoes from './components/extensoes/conexoes';
import RelatoriosExtensoes from './components/extensoes/relatorios';

// Importação dos estilos globais da aplicação
import './App.css';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' && window.location.hostname === 'localhost';

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : ''}`}>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Rotas da seção de Gestão */}
        <Route path="/gestao/atendimento" element={<Atendimento />} />
        <Route path="/gestao/atendimento/inserir-atendimento" element={<InserirAtendimento />} />
        <Route path="/gestao/pessoa" element={<Pessoa />} />
        <Route path="/gestao/workflow" element={<Workflow />} />
        <Route path="/gestao/timesheet" element={<Timesheet />} />
        <Route path="/gestao/timesheet/novo-timesheet" element={<NovoTimesheet />} />
        <Route path="/gestao/relatorios" element={<MainContent />} />

        {/* Rotas da seção Atividades */}
        <Route path="/atividades/lista-atividades" element={<ListaAtividades />} />
        <Route path="/atividades/painel" element={<PainelTarefas />} />
        <Route path="/atividades/kanban" element={<KanbanTarefas />} />
        <Route path="/atividades/nova-tarefa" element={<NovaTarefa />} />
        <Route path="/atividades/relatorios" element={<RelatoriosAtividades />} />

        {/* Rotas da seção Processos */}
        <Route path="/processos" element={<Processos />} />
        <Route path="/processos/intimacoes" element={<Intimacoes />} />
        <Route path="/processos/central-captura" element={<CentralCaptura />} />
        <Route path="/processos/andamentos" element={<AndamentosProcessuais />} />
        <Route path="/processos/relatorios" element={<RelatoriosProcessos />} />
        <Route path="/processos/novo-processo" element={<NovoProcesso />} />
        <Route path="/processos/andamentos/novo-andamento" element={<NovoAndamento />} />

        {/* Rotas da seção Financeiro */}
        <Route path="/financeiro/receitas-despesas" element={<ReceitasDespesas />} />
        <Route path="/financeiro/extrato" element={<ExtratoConta />} />
        <Route path="/financeiro/solicitacoes" element={<Solicitacoes />} />
        <Route path="/financeiro/integracao-receitas" element={<IntegracaoReceitas />} />
        <Route path="/financeiro/integracao-despesas" element={<IntegracaoDespesas />} />
        <Route path="/financeiro/relatorios" element={<RelatoriosFinanceiro />} />
        <Route path="/financeiro/receitas-despesas/lancamento-receita" element={<LancamentoReceita />} />
        <Route path="/financeiro/receitas-despesas/lancamento-despesas" element={<LancamentoDespesas />} />
        <Route path="/financeiro/receitas-despesas/lancamento-tranferencia" element={<LancamentoTransferencia />} />

        {/* Rotas da seção Documentos */}
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/documentos/modelos-documentos" element={<ModelosDocumentos />} />

        {/* Rotas da seção Extensões */}
        <Route path="/extensoes" element={<Conexoes />} />
        <Route path="/extensoes/relatorios" element={<RelatoriosExtensoes />} />
      </Routes>

      {isHomePage && (
        <div className="calendar-container">
          <Calendar />
        </div>
      )}
    </div>
  );
};

// Componente AppWrapper para envolver App com o React Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
