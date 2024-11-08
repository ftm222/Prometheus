import React, { useState } from "react";
import { FaTimes, FaQuestionCircle } from "react-icons/fa";
import './novoAndamento.css'

const NovoAndamentoForm = () => {
  const [formData, setFormData] = useState({
    tipoVinculo: "",
    vinculo: "",
    data: "08/11/2024",
    hora: "",
    tipoAndamento: "",
    responsavel: "CLEIDER RODRIGUES FERNANDES",
    descricao: "",
    exibicaoCliente: false,
    criarOutro: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="novo-andamento-form">
      <header className="form-header">
        <h2>Novo Andamento</h2>
        <button className="close-btn">
          <FaTimes />
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tipo de vínculo<span>*</span></label>
          <select
            name="tipoVinculo"
            value={formData.tipoVinculo}
            onChange={handleChange}
          >
            <option value="">Processo</option>
            {/* Outras opções se necessário */}
          </select>
        </div>
        
        <div className="form-group">
          <label>Vínculo<span>*</span></label>
          <select
            name="vinculo"
            value={formData.vinculo}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            {/* Outras opções de vínculo */}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Data<span>*</span></label>
            <input
              type="text"
              name="data"
              value={formData.data}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Hora</label>
            <input
              type="text"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Tipo de andamento<span>*</span></label>
            <select
              name="tipoAndamento"
              value={formData.tipoAndamento}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              {/* Outras opções de andamento */}
            </select>
          </div>
          <div className="form-group">
            <label>Responsável<span>*</span></label>
            <select
              name="responsavel"
              value={formData.responsavel}
              onChange={handleChange}
            >
              <option value="CLEIDER RODRIGUES FERNANDES">
                CLEIDER RODRIGUES FERNANDES
              </option>
              {/* Outras opções de responsáveis */}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Descrição<span>*</span></label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="8000 caracteres restantes"
          />
        </div>

        <div className="form-group">
          <label>Área do cliente</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="exibicaoCliente"
              checked={formData.exibicaoCliente}
              onChange={handleChange}
            />
            <label>Exibir</label>
          </div>
        </div>

        <div className="form-footer">
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="criarOutro"
              checked={formData.criarOutro}
              onChange={handleChange}
            />
            <label>Criar outro</label>
          </div>
          <button type="button" className="cancel-btn">
            <FaQuestionCircle /> Cancelar
          </button>
          <button type="submit" className="save-btn">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovoAndamentoForm;
