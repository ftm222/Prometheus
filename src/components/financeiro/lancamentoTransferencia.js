import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lancamentoTransferencia.css';

function NovoLancamento() {
  const [valorTotal, setValorTotal] = useState('');
  const [dataTransferencia, setDataTransferencia] = useState('11/11/2024');
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');
  const [descricao, setDescricao] = useState('');
  const [criarOutro, setCriarOutro] = useState(false);

  const handleSalvar = () => {
    // Função que será chamada ao clicar no botão "Salvar"
    // Aqui você pode adicionar a lógica de salvamento, como enviar os dados para uma API
    console.log({
      valorTotal,
      dataTransferencia,
      contaOrigem,
      contaDestino,
      descricao,
      criarOutro,
    });
    
    if (criarOutro) {
      // Limpar os campos para uma nova entrada se o usuário marcar "Criar outro"
      setValorTotal('');
      setContaOrigem('');
      setContaDestino('');
      setDescricao('');
    }
  };

  const handleCancelar = () => {
    // Função que será chamada ao clicar no botão "Cancelar"
    // Aqui você pode adicionar a lógica de cancelamento, como fechar o modal
    console.log('Cancelado');
  };

  const navigate = useNavigate();

    const handleNewExpenses = () => {
        console.log("Abrindo formulário para novo processo...");
        navigate('/financeiro/receitas-despesas/lancamento-despesas');
    };

    const handleNewRevenues = () => {
        console.log("Abrindo formulário para novo processo...");
        navigate('/financeiro/receitas-despesas/lancamento-receita');
    };

    const handleNewTransfer = () => {
        console.log("Abrindo formulário para novo processo...");
        navigate('/financeiro/receitas-despesas/lancamento-tranferencia');
    };

  return (
    <div className="modal">
      <h2>Novo lançamento</h2>
      <div className="tabs">
        <button className="new-process-btn" onClick={handleNewRevenues}>Receitas</button>
        <button className="new-process-btn" onClick={handleNewExpenses}>Despesas</button>
        <button className="new-process-btn" onClick={handleNewTransfer}>Transferência</button>
      </div>
      <form className="form">
        <div className="form-group">
          <label>Valor total <span className="required">*</span></label>
          <input
            type="text"
            value={valorTotal}
            onChange={(e) => setValorTotal(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data da transferência <span className="required">*</span></label>
          <input
            type="text"
            value={dataTransferencia}
            onChange={(e) => setDataTransferencia(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Conta de origem <span className="required">*</span></label>
          <select
            value={contaOrigem}
            onChange={(e) => setContaOrigem(e.target.value)}
            required
          >
            <option value="">Pesquise</option>
            {/* Adicionar opções reais aqui */}
          </select>
        </div>
        <div className="form-group">
          <label>Conta de destino <span className="required">*</span></label>
          <select
            value={contaDestino}
            onChange={(e) => setContaDestino(e.target.value)}
            required
          >
            <option value="">Pesquise</option>
            {/* Adicionar opções reais aqui */}
          </select>
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <label>
            <input
              type="checkbox"
              checked={criarOutro}
              onChange={(e) => setCriarOutro(e.target.checked)}
            />
            Criar outro
          </label>
          <button type="button" className="cancel" onClick={handleCancelar}>Cancelar</button>
          <button type="button" className="save" onClick={handleSalvar}>Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default NovoLancamento;
