import React from 'react';
import './painel_tarefas.css'; // Importa o arquivo de estilo

const PainelTarefas = () => {
  return (
    <div className="painel">
      {/* Container de Cabeçalho */}
      <div className="container-cabecalho">
        <main className="painel-tarefas">
          <div className="cabecalho-painel">
            <h2 className="titulo-pagina">Painel de tarefas</h2>
            <button className="btn-ajuda">ajuda</button>
            <button className="btn-suporte">suporte</button>
          </div>
        </main>
      </div>

      {/* Container de Tarefas */}
      <div className="container-tarefas">
        <section className="secoes-tarefas">
          <div className="grupo-tarefas">
            <h3>Minhas tarefas</h3>
            <div className="item-tarefa">
              <div className="status-tarefa pendente">Pendente</div>
              <div className="data-tarefa">21/05/2024</div>
              <div className="tipo-tarefa">Processo</div>
              <div className="titulo-tarefa">
                Manifestação (60 dias)
                <button className="btn-expandir">Expandir</button>
              </div>
              <p className="descricao-tarefa">
                verificar se existe necessidade de manifestar...
              </p>
              <div className="acoes-tarefa">
                <button className="btn-visualizar">👁</button>
                <button className="btn-opcoes">⋮</button>
              </div>
            </div>

            <div className="item-tarefa">
              <div className="status-tarefa pendente">Pendente</div>
              <div className="data-tarefa">13/11/2024</div>
              <div className="tipo-tarefa">Processo</div>
              <div className="titulo-tarefa">Audiência virtual</div>
              <div className="acoes-tarefa">
                <button className="btn-visualizar">👁</button>
                <button className="btn-opcoes">⋮</button>
              </div>
            </div>
          </div>

          <div className="grupo-tarefas">
            <h3>Tarefas que criei e deleguei</h3>
            <p>Nenhuma tarefa encontrada.</p>
          </div>

          <div className="grupo-tarefas">
            <h3>Tarefas da semana</h3>
            <p>Nenhuma tarefa encontrada.</p>
          </div>
        </section>
      </div>

      {/* Container de Suporte */}
      <div className="container-suporte">
        <div className="barra-suporte">
          <button className="btn-suporte-novidades">
            Suporte Novidades
            <span className="contador-novidades">7</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PainelTarefas;
