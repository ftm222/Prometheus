// Importa os módulos necessários do React, incluindo useState para o gerenciamento de estado
import React, { useState } from 'react';

// Importa ícones específicos de uma biblioteca de ícones (react-icons), neste caso, FaEyeSlash e FaSearch
import { FaEyeSlash, FaSearch } from 'react-icons/fa';

// Importa um arquivo CSS específico para aplicar estilos personalizados ao componente ExtratoPage
import './extrato_conta.css'; // Certifique-se de importar o CSS

// Declara o componente funcional ExtratoPage
const ExtratoPage = () => {
  // Define o estado saldoInicial com o valor de -1000.0 e remove o setSaldoInicial (função de atualização) para evitar erros
  const [saldoInicial] = useState(-1000.0); // Removido setSaldoInicial para evitar o erro
  
  // Define o estado entradas com o valor de 0.0 e remove o setEntradas (função de atualização) para evitar erros
  const [entradas] = useState(0.0); // Removido setEntradas para evitar o erro
  
  // Define o estado saidas com o valor de 0.0 e não utiliza setSaidas (função de atualização), apenas a variável 'saidas'
  const [saidas] = useState(0.0); // Mantivemos apenas a variável 'saidas', sem setSaidas

  // Calcula o saldo final com base em saldoInicial, entradas e saidas
  const saldoFinal = saldoInicial + entradas - saidas;

  // Renderiza a estrutura do extrato bancário
  return (
    <div className="extrato-container">
      {/* Seção do cabeçalho do extrato */}
      <header className="extrato-header">
        <h2>Extrato</h2>
        <button className="novo-button">Novo</button> {/* Botão para criar novo registro */}
      </header>

      <div className="extrato-content">
        {/* Seção do saldo bancário */}
        <div className="saldo-section">
          <div className="saldo-header">
            <h3>Saldo inicial do período</h3>
            <FaEyeSlash /> {/* Ícone de 'olho com traço' para ocultar ou visualizar o saldo */}
          </div>
          <h1 className="saldo-negativo">-R$ {saldoInicial.toFixed(2)}</h1> {/* Exibe o saldo inicial no formato de moeda */}

          {/* Exibe entradas, saídas e saldo final */}
          <div className="entradas-saidas">
            <p>
              <span className="entradas-texto">Entradas</span><span>R$ {entradas.toFixed(2)}</span>
            </p>
            <p>
              <span className="saidas-texto">Saídas</span><span>R$ {saidas.toFixed(2)}</span>
            </p>
            <hr />
            <p>
              <strong>Saldo final do período</strong>
              {/* Exibe o saldo final com uma classe diferente, dependendo se é positivo ou negativo */}
              <span className={saldoFinal >= 0 ? 'saldo-positivo' : 'saldo-negativo'}>R$ {saldoFinal.toFixed(2)}</span>
            </p>
          </div>
        </div>

        {/* Seção de pesquisa de transações */}
        <div className="pesquisa-section">
          <div className="pesquisa-header">
            {/* Campo de entrada para pesquisa por identificador, valor ou cliente */}
            <input
              type="text"
              placeholder="Pesquise pelo identificador, valor ou cliente."
              className="pesquisa-input"
            />
            <button className="pesquisa-button">
              <FaSearch /> {/* Botão de pesquisa com ícone de lupa */}
            </button>
          </div>

          {/* Seção para selecionar datas específicas */}
          <div className="data-section">
            <input type="date" className="data-input" /> {/* Campo para selecionar data de início */}
            <input type="date" className="data-input" /> {/* Campo para selecionar data de término */}
          </div>

          {/* Filtros de movimentação financeira */}
          <div className="filtros-section">
            {['Todos', 'Recebidas', 'Pagas', 'Transferência', 'Estorno'].map((tab) => (
              <button key={tab} className="filtro-tab">
                {tab} <span className="tab-count">0</span> {/* Exibe o filtro com contagem de registros */}
              </button>
            ))}
          </div>

          {/* Filtros adicionais para contas e ordenação */}
          <div className="filtros-adicionais">
            <select className="contas-select">
              <option>Todas as contas</option> {/* Opções para seleção de conta */}
            </select>
            <select className="ordenacao-select">
              <option>Mais recentes</option> {/* Opções para ordenação de registros */}
            </select>
          </div>

          {/* Seção de mensagem caso não haja movimentação */}
          <div className="sem-movimentacao">
            <div className="icone-sem-movimentacao">📄</div> {/* Ícone indicando ausência de registros */}
            <p>Você não possui movimentações nesse período.</p> {/* Mensagem de ausência de movimentações */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente ExtratoPage como padrão para que possa ser usado em outras partes da aplicação
export default ExtratoPage;
