import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lancamentoDespesas.css';

function NovoLancamento() {
    const [abaSelecionada, setAbaSelecionada] = useState("Despesa");

    const navigate = useNavigate();

    const handleAbaChange = (aba) => {
        setAbaSelecionada(aba);
    };

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
        navigate('/financeiro/receitas-despesas/lancamento-transferencia');
    };

    return (
        <div className="novo-lancamento">
            <div className="header">
                <h2>Novo Lançamento</h2>
                <button className="cadastro-avancado">Cadastro Avançado</button>
            </div>

            {/* Abas de Receita, Despesa e Transferência */}
            <div className="abas">
                <button
                    className={`new-process-btn ${abaSelecionada === 'Receita' ? 'ativa' : ''}`}
                    onClick={() => {
                        handleAbaChange('Receita');
                        handleNewRevenues('Receita');
                    }}
                >
                    Receita
                </button>
                <button
                    className={`new-process-btn ${abaSelecionada === 'Despesa' ? 'ativa' : ''}`}
                    onClick={() => {
                        handleAbaChange('Despesa');
                        handleNewExpenses('Despesa');
                    }}
                >
                    Despesa
                </button>
                <button
                    className={`new-process-btn ${abaSelecionada === 'Transferência' ? 'ativa' : ''}`}
                    onClick={() => {
                        handleAbaChange('Transferência');
                        handleNewTransfer('Transferência');
                    }}
                >
                    Transferência
                </button>
            </div>

            {/* Formulário de acordo com a aba selecionada */}
            {abaSelecionada === "Despesa" && (
                <form className="formulario">
                    <div className="campo">
                        <label>Valor total *</label>
                        <input type="text" placeholder="Insira o valor total" required />
                    </div>

                    <div className="campo">
                        <label>Data de emissão *</label>
                        <input type="date" defaultValue="2024-11-11" required />
                    </div>

                    <div className="campo">
                        <label>Centro de custo</label>
                        <select required>
                            <option>Selecione</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label>Unidade Organizacional *</label>
                        <select required>
                            <option>Fernandes & Caleo Associados</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label>Plano de contas *</label>
                        <select required>
                            <option>Selecione</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label>Descrição</label>
                        <textarea placeholder="Descreva a despesa"></textarea>
                    </div>

                    <div className="campo">
                        <label>Favorecido *</label>
                        <input type="text" placeholder="Pesquise" required />
                        <button className="botao-favorecido">+</button>
                    </div>

                    <div className="campo duplo">
                        <div>
                            <label>Responsável *</label>
                            <select required>
                                <option>CLEIDER RODRIGUES FERNANDES</option>
                            </select>
                        </div>
                        <div>
                            <label>Grupos de trabalho</label>
                            <select>
                                <option>Selecione</option>
                            </select>
                        </div>
                    </div>

                    <div className="campo checkbox">
                        <input type="checkbox" id="recorrencia" />
                        <label htmlFor="recorrencia">Recorrência</label>
                    </div>

                    {/* Seção Adicional com Data de Vencimento, Valor, Forma e Conta */}
                    <div className="campo">
                        <label>Condição de pagamento *</label>
                        <select required>
                            <option>à vista</option>
                            <option>parcelado</option>
                        </select>
                    </div>

                    <div className="campo duplo">
                        <div>
                            <label>Data de vencimento *</label>
                            <input type="date" defaultValue="2024-11-11" required />
                        </div>
                        <div>
                            <label>Valor *</label>
                            <input type="text" placeholder="Valor" required />
                        </div>
                    </div>

                    <div className="campo duplo">
                        <div>
                            <label>Forma *</label>
                            <select required>
                                <option>Dinheiro</option>
                                <option>Cartão</option>
                                <option>Transferência</option>
                            </select>
                        </div>
                        <div>
                            <label>Conta do escritório *</label>
                            <select required>
                                <option>Selecione</option>
                            </select>
                        </div>
                    </div>

                    <div className="botoes">
                        <label>
                            <input type="checkbox" />
                            Criar outro
                        </label>
                        <button type="button" className="cancelar">Cancelar</button>
                        <button type="submit" className="salvar">Salvar</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default NovoLancamento;
