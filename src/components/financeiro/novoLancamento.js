import React, { useState } from "react";
import './novoLancamento.css'

function NovoLancamento() {
  const [valorTotal, setValorTotal] = useState("");
  const [dataEmissao, setDataEmissao] = useState("08/11/2024");
  const [centroCusto, setCentroCusto] = useState("");
  const [unidadeOrganizacional, setUnidadeOrganizacional] = useState("Fernandes & Caleo Associados");
  const [planoContas, setPlanoContas] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cliente, setCliente] = useState("");
  const [responsavel, setResponsavel] = useState("CLEIDER RODRIGUES FERNANDES");
  const [grupoTrabalho, setGrupoTrabalho] = useState("");
  const [recorrencia, setRecorrencia] = useState(false);
  const [condicaoPagamento, setCondicaoPagamento] = useState("À vista");
  const [criarOutro, setCriarOutro] = useState(false);
  const [dataVencimento, setDataVencimento] = useState("08/11/2024");
  const [valor, setValor] = useState("");
  const [forma, setForma] = useState("Dinheiro");
  const [contaEscritorio, setContaEscritorio] = useState("");
  const [repasse, setRepasse] = useState(false);

  const handleSave = () => {
    // Lógica para salvar o lançamento
    console.log("Lançamento salvo!");
  };

  const handleCancel = () => {
    // Lógica para cancelar o lançamento
    console.log("Lançamento cancelado.");
  };

  return (
    <div className="novo-lancamento">
      <h2>Novo Lançamento</h2>
      <div className="tabs">
        <button className="tab active">Receita</button>
        <button className="tab">Despesa</button>
        <button className="tab">Transferência</button>
      </div>

      <form>
        <div className="form-group">
          <label>Valor total *</label>
          <input
            type="text"
            value={valorTotal}
            onChange={(e) => setValorTotal(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Data de emissão *</label>
          <input
            type="text"
            value={dataEmissao}
            onChange={(e) => setDataEmissao(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Centro de custo</label>
          <select
            value={centroCusto}
            onChange={(e) => setCentroCusto(e.target.value)}
          >
            <option value="">Selecione</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>Unidade Organizacional *</label>
          <select
            value={unidadeOrganizacional}
            onChange={(e) => setUnidadeOrganizacional(e.target.value)}
            required
          >
            <option value="Fernandes & Caleo Associados">Fernandes & Caleo Associados</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>Plano de contas *</label>
          <select
            value={planoContas}
            onChange={(e) => setPlanoContas(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Cliente *</label>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
          />
          <button type="button">🔍</button>
          <button type="button">👤</button>
        </div>

        <div className="form-group">
          <label>Responsável *</label>
          <select
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            required
          >
            <option value="CLEIDER RODRIGUES FERNANDES">CLEIDER RODRIGUES FERNANDES</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>Grupos de trabalho</label>
          <select
            value={grupoTrabalho}
            onChange={(e) => setGrupoTrabalho(e.target.value)}
          >
            <option value="">Selecione</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={recorrencia}
              onChange={(e) => setRecorrencia(e.target.checked)}
            />
            Recorrência
          </label>
        </div>

        {/* Campos adicionais conforme a imagem fornecida */}
        <div className="form-group">
          <label>Condição de pagamento *</label>
          <select
            value={condicaoPagamento}
            onChange={(e) => setCondicaoPagamento(e.target.value)}
            required
          >
            <option value="À vista">À vista</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>Data de vencimento *</label>
          <input
            type="text"
            value={dataVencimento}
            onChange={(e) => setDataVencimento(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Valor *</label>
          <input
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Forma *</label>
          <select
            value={forma}
            onChange={(e) => setForma(e.target.value)}
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>Conta do escritório *</label>
          <select
            value={contaEscritorio}
            onChange={(e) => setContaEscritorio(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {/* Outras opções podem ser adicionadas aqui */}
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={repasse}
              onChange={(e) => setRepasse(e.target.checked)}
            />
            Repasse
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={criarOutro}
              onChange={(e) => setCriarOutro(e.target.checked)}
            />
            Criar outro
          </label>
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleCancel}>Cancelar</button>
          <button type="button" onClick={handleSave}>Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default NovoLancamento;
