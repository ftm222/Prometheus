import React, { useState } from 'react';
import { FaEyeSlash, FaSearch } from 'react-icons/fa';
import './extrato_conta.css'; // Certifique-se de importar o CSS

const ExtratoPage = () => {
  const [saldoInicial] = useState(-1000.0); // Removido setSaldoInicial para evitar o erro
  const [entradas] = useState(0.0); // Removido setEntradas para evitar o erro
  const [saidas] = useState(0.0); // Mantivemos apenas a variável 'saidas', sem setSaidas

  const saldoFinal = saldoInicial + entradas - saidas;

  return (
    <div className="extrato-container">
      <header className="extrato-header">
        <h2>Extrato</h2>
        <button className="novo-button">Novo</button>
      </header>

      <div className="extrato-content">
        <div className="saldo-section">
          <div className="saldo-header">
            <h3>Saldo inicial do período</h3>
            <FaEyeSlash />
          </div>
          <h1 className="saldo-negativo">-R$ {saldoInicial.toFixed(2)}</h1>
          <div className="entradas-saidas">
            <p><span className="entradas-texto">Entradas</span><span>R$ {entradas.toFixed(2)}</span></p>
            <p><span className="saidas-texto">Saídas</span><span>R$ {saidas.toFixed(2)}</span></p>
            <hr />
            <p><strong>Saldo final do período</strong><span className={saldoFinal >= 0 ? 'saldo-positivo' : 'saldo-negativo'}>R$ {saldoFinal.toFixed(2)}</span></p>
          </div>
        </div>

        <div className="pesquisa-section">
          <div className="pesquisa-header">
            <input
              type="text"
              placeholder="Pesquise pelo identificador, valor ou cliente."
              className="pesquisa-input"
            />
            <button className="pesquisa-button">
              <FaSearch />
            </button>
          </div>

          <div className="data-section">
            <input type="date" className="data-input" />
            <input type="date" className="data-input" />
          </div>

          <div className="filtros-section">
            {['Todos', 'Recebidas', 'Pagas', 'Transferência', 'Estorno'].map((tab) => (
              <button key={tab} className="filtro-tab">
                {tab} <span className="tab-count">0</span>
              </button>
            ))}
          </div>

          <div className="filtros-adicionais">
            <select className="contas-select">
              <option>Todas as contas</option>
            </select>
            <select className="ordenacao-select">
              <option>Mais recentes</option>
            </select>
          </div>

          <div className="sem-movimentacao">
            <div className="icone-sem-movimentacao">📄</div>
            <p>Você não possui movimentações nesse período.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtratoPage;
