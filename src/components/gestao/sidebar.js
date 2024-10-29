import React, { useEffect } from 'react'; // Importa o React e o hook useEffect para usar efeitos colaterais.
import './Sidebar.css'; // Importa o arquivo de estilos CSS para o componente Sidebar.

const Sidebar = ({ isOpen, toggleSidebar }) => { // Define o componente Sidebar que recebe 'isOpen' e 'toggleSidebar' como props.
  
  useEffect(() => { // Inicia um efeito colateral que será executado quando o componente for montado ou atualizado.
    const handleResize = () => { // Define uma função para lidar com redimensionamento da janela.
      if (window.innerWidth <= 768) { // Verifica se a largura da janela é menor ou igual a 768 pixels.
        toggleSidebar(false); // Fecha o sidebar automaticamente em telas menores.
      } else {
        toggleSidebar(true); // Abre o sidebar em telas maiores.
      }
    };

    window.addEventListener('resize', handleResize); // Adiciona um ouvinte de evento para redimensionamento da janela.
    handleResize(); // Chama a função ao carregar o componente para definir o estado inicial do sidebar.

    return () => { // Retorna uma função de limpeza que será chamada quando o componente for desmontado.
      window.removeEventListener('resize', handleResize); // Remove o ouvinte de evento para evitar vazamentos de memória.
    };
  }, [toggleSidebar]); // O efeito depende de 'toggleSidebar', que é uma função que pode ser alterada.

  return ( // Início do JSX retornado pelo componente.
    <>
      <button className="sidebar-toggle" onClick={() => toggleSidebar(!isOpen)}> {/* Botão que alterna o estado do sidebar quando clicado. */}
        ☰ Menu {/* Ícone de menu para indicar que é um botão de alternância do sidebar. */}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}> {/* Renderiza o sidebar, aplicando a classe 'open' ou 'closed' com base no estado 'isOpen'. */}
        {/* Seção de Gestão */}
        <div className="section"> {/* Divisão para a seção de gestão. */}
          <h3>Gestão</h3> {/* Título da seção de gestão. */}
          <ul> {/* Lista não ordenada para os itens da seção. */}
            <li className="dropdown"> {/* Item da lista com um submenu (dropdown). */}
              Relatórios {/* Título do item do dropdown. */}
              <ul className="dropdown-content"> {/* Lista não ordenada para o conteúdo do dropdown. */}
                <li>Relatórios Financeiros</li> {/* Item da lista de relatórios financeiros. */}
                <li>Relatórios de Performance</li> {/* Item da lista de relatórios de performance. */}
                <li>Relatórios de Atividades</li> {/* Item da lista de relatórios de atividades. */}
              </ul>
            </li>
            <li>Atendimentos por cliente</li> {/* Item da lista de atendimentos por cliente. */}
            <li>Pessoas em planilha</li> {/* Item da lista de pessoas em planilha. */}
          </ul>
        </div>

        {/* Seção de Atividades */}
        <div className="section"> {/* Divisão para a seção de atividades. */}
          <h3>Atividades</h3> {/* Título da seção de atividades. */}
          <ul> {/* Lista não ordenada para os itens da seção. */}
            <li>Timesheet</li> {/* Item da lista de timesheet. */}
            <li>Tarefas</li> {/* Item da lista de tarefas. */}
          </ul>
        </div>

        {/* Seção de Processos */}
        <div className="section"> {/* Divisão para a seção de processos. */}
          <h3>Processos</h3> {/* Título da seção de processos. */}
          <ul> {/* Lista não ordenada para os itens da seção. */}
            <li>Andamentos em planilha</li> {/* Item da lista de andamentos em planilha. */}
            <li>Bens & Garantia por Processo</li> {/* Item da lista de bens e garantia por processo. */}
            <li>Pedidos por Processo</li> {/* Item da lista de pedidos por processo. */}
            <li>Processos ativos, recebidos e arquivados por cliente</li> {/* Item da lista sobre processos. */}
            <li>Processos sem movimentação</li> {/* Item da lista de processos sem movimentação. */}
          </ul>
        </div>

        {/* Seção Financeiro */}
        <div className="section"> {/* Divisão para a seção financeira. */}
          <h3>Financeiro</h3> {/* Título da seção financeira. */}
          <ul> {/* Lista não ordenada para os itens da seção. */}
            <li>Contas a Pagar e Receber por Dia</li> {/* Item da lista de contas a pagar e receber. */}
            <li>DFC - Demonstrativo de Fluxo de Caixa</li> {/* Item da lista do DFC. */}
            <li>DRE - Demonstrativo de Resultado do Exercício</li> {/* Item da lista do DRE. */}
            <li>Fluxo de Caixa Anual</li> {/* Item da lista de fluxo de caixa anual. */}
            <li>Receitas e Despesas Pagas por Dia</li> {/* Item da lista de receitas e despesas pagas. */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar; // Exporta o componente Sidebar como padrão para ser utilizado em outros arquivos.
