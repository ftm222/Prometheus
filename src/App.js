// src/App.js
import React from 'react'; // Importa a biblioteca React
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Importa componentes para definir rotas e o hook useLocation
import Navbar from './components/navbar'; // Importa o componente Navbar para a barra de navegação
import Header from './components/header'; // Importa o componente Header para o cabeçalho
import Dashboard from './components/Dashboard'; // Importa o componente Dashboard para a página inicial
import Calendar from './components/Calendar'; // Importa o componente Calendar para exibir um calendário

// Importação dos componentes da página de Gestão
import Atendimento from './components/gestao/atendimento'; // Importa o componente Atendimento para a seção Gestão
import InserirAtendimento from './components/gestao/inserirAtendimento'; // Importa o componente InserirAtendimento
import Pessoa from './components/gestao/pessoa'; // Importa o componente Pessoa
import Workflow from './components/gestao/workflow'; // Importa o componente Workflow
import Timesheet from './components/gestao/timesheet'; // Importa o componente Timesheet
import NovoTimesheet from './components/gestao/NovoTimesheet'; // Importa o componente NovoTimesheet
import MainContent from './components/gestao/MainContent'; // Importa o componente MainContent, garantindo que ele seja utilizado

// Importação dos componentes da página de Atividades
import ListaAtividades from './components/atividades/lista_atividades'; // Importa o componente ListaAtividades para a seção Atividades
import PainelTarefas from './components/atividades/painel_tarefas'; // Importa o componente PainelTarefas
import KanbanTarefas from './components/atividades/kanban_tarefas'; // Importa o componente KanbanTarefas
import RelatoriosAtividades from './components/atividades/relatorios'; // Importa o componente RelatoriosAtividades

// Importação dos componentes da página de Processos
import Processos from './components/processos/processos'; // Importa o componente Processos para a seção Processos
import Intimacoes from './components/processos/intimacoes'; // Importa o componente Intimacoes
import CentralCaptura from './components/processos/central_captura_processos'; // Importa o componente CentralCaptura
import AndamentosProcessuais from './components/processos/andamentos_processuais'; // Importa o componente AndamentosProcessuais
import RelatoriosProcessos from './components/processos/relatórios'; // Importa o componente RelatoriosProcessos

// Importação dos componentes da página Financeiro
import ReceitasDespesas from './components/finaneceiro/receitas_despesas'; // Importa o componente ReceitasDespesas
import ExtratoConta from './components/finaneceiro/extrato_conta'; // Importa o componente ExtratoConta
import Solicitacoes from './components/finaneceiro/solicitacoes'; // Importa o componente Solicitacoes
import IntegracaoReceitas from './components/finaneceiro/integracao_receitas'; // Importa o componente IntegracaoReceitas
import IntegracaoDespesas from './components/finaneceiro/integracao_despesas'; // Importa o componente IntegracaoDespesas
import RelatoriosFinanceiro from './components/finaneceiro/relatorios'; // Importa o componente RelatoriosFinanceiro

// Importação dos componentes da página Documentos
import Documentos from './components/documentos/documentos'; // Importa o componente Documentos
import ModelosDocumentos from './components/documentos/modelos_documentos'; // Importa o componente ModelosDocumentos

// Importação dos componentes da página Extensões
import Conexoes from './components/extensoes/conexoes'; // Importa o componente Conexoes
import RelatoriosExtensoes from './components/extensoes/relatorios'; // Importa o componente RelatoriosExtensoes

// Importação dos estilos globais da aplicação
import './App.css'; // Importa o arquivo CSS com os estilos gerais

// Função principal do componente App
const App = () => {
  const location = useLocation(); // Usa o hook useLocation para capturar a URL atual

  // Define uma variável para verificar se está na página inicial e se o domínio é 'http://localhost:3000'
  const isHomePage = window.location.origin === 'http://localhost:3000' && location.pathname === '/';

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : ''}`}> {/* Define a classe com base na página atual */}
      <Navbar /> {/* Renderiza a barra de navegação em todas as páginas */}
      <Header /> {/* Renderiza o cabeçalho em todas as páginas */}

      <Routes>
        {/* Define as rotas da aplicação */}
        <Route path="/" element={<Dashboard />} /> {/* Página inicial com o componente Dashboard */}

        {/* Rotas da seção de Gestão */}
        <Route path="/gestao/atendimento" element={<Atendimento />} />
        <Route path="/gestao/atendimento/inserirAtendimento" element={<InserirAtendimento />} /> {/* Nova rota para InserirAtendimento */}
        <Route path="/gestao/pessoa" element={<Pessoa />} />
        <Route path="/gestao/workflow" element={<Workflow />} />
        <Route path="/gestao/timesheet" element={<Timesheet />} />
        <Route path="/gestao/timesheet/novo-timesheet" element={<NovoTimesheet />} /> {/* Nova rota para NovoTimesheet */}

        {/* Renderiza Sidebar e MainContent juntos na rota /gestao/relatorios */}
        <Route path="/gestao/relatorios" element={
          <div style={{ display: 'flex' }}>
            <MainContent /> {/* Componente MainContent renderizado em conjunto */}
          </div>
        } /> 

        {/* Rotas da seção Atividades */}
        <Route path="/atividades" element={<ListaAtividades />} /> {/* Página de Lista de Atividades */}
        <Route path="/atividades/painel" element={<PainelTarefas />} />
        <Route path="/atividades/kanban" element={<KanbanTarefas />} />
        <Route path="/atividades/relatorios" element={<RelatoriosAtividades />} />

        {/* Rotas da seção Processos */}
        <Route path="/processos" element={<Processos />} />
        <Route path="/processos/intimacoes" element={<Intimacoes />} />
        <Route path="/processos/central-captura" element={<CentralCaptura />} />
        <Route path="/processos/andamentos" element={<AndamentosProcessuais />} />
        <Route path="/processos/relatorios" element={<RelatoriosProcessos />} />

        {/* Rotas da seção Financeiro */}
        <Route path="/financeiro" element={<ReceitasDespesas />} />
        <Route path="/financeiro/extrato" element={<ExtratoConta />} />
        <Route path="/financeiro/solicitacoes" element={<Solicitacoes />} />
        <Route path="/financeiro/integracao-receitas" element={<IntegracaoReceitas />} />
        <Route path="/financeiro/integracao-despesas" element={<IntegracaoDespesas />} />
        <Route path="/financeiro/relatorios" element={<RelatoriosFinanceiro />} />

        {/* Rotas da seção Documentos */}
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/documentos/modelos" element={<ModelosDocumentos />} />

        {/* Rotas da seção Extensões */}
        <Route path="/extensoes" element={<Conexoes />} />
        <Route path="/extensoes/relatorios" element={<RelatoriosExtensoes />} />
      </Routes>

      {/* Renderiza o componente Calendar apenas na página inicial com domínio específico */}
      {isHomePage && (
        <div className="calendar-container">
          <Calendar /> {/* Componente de calendário */}
        </div>
      )}
    </div>
  );
};

// Componente AppWrapper para envolver App com o React Router
const AppWrapper = () => (
  <Router>
    <App /> {/* Renderiza o componente App dentro do Router */}
  </Router>
);

export default AppWrapper; // Exporta AppWrapper para uso em outras partes da aplicação
