import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionamento
import './inserirAtendimento.css';

const InserirAtendimento = () => {
    // Definindo os estados do formulário
    const [dataAtendimento, setDataAtendimento] = useState('');
    const [assunto, setAssunto] = useState('');
    const [situacao, setSituacao] = useState('Ativo');
    const [descricao, setDescricao] = useState('');
    const [pastaFisica, setPastaFisica] = useState('');
    const [unidadeOrganizacional, setUnidadeOrganizacional] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [grupoTrabalho, setGrupoTrabalho] = useState('');
    const [marcadores, setMarcadores] = useState('');
    const [pessoa, setPessoa] = useState('');
    const [tipoEnvolvimento, setTipoEnvolvimento] = useState('Cliente'); // Tipo de envolvimento padrão
    const navigate = useNavigate(); // Definindo o hook de navegação

    // Função que será chamada ao enviar o formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // Aqui você pode adicionar a lógica para salvar os dados do atendimento
        console.log({
            dataAtendimento,
            assunto,
            situacao,
            descricao,
            pastaFisica,
            unidadeOrganizacional,
            responsavel,
            grupoTrabalho,
            marcadores,
            pessoa,
            tipoEnvolvimento,
        });

        // Redireciona para a página de listagem de atendimentos após o salvamento
        navigate('/gestao/atendimento');
    };

    return (
        <div className="container">
            <h1>Inserir Atendimento</h1>
            <form onSubmit={handleSubmit}>
                {/* Seção de Dados Básicos */}
                <div className="section">
                    <h2>Dados Básicos</h2>
                    <div className="input-group">
                        <label htmlFor="dataAtendimento" className="label">Data de Atendimento:</label>
                        <input
                            id="dataAtendimento"
                            type="date"
                            value={dataAtendimento}
                            onChange={(e) => setDataAtendimento(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="assunto" className="label">Assunto:</label>
                        <input
                            id="assunto"
                            type="text"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pastaFisica" className="label">Pasta Física:</label>
                        <input
                            id="pastaFisica"
                            type="text"
                            value={pastaFisica}
                            onChange={(e) => setPastaFisica(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="situacao" className="label">Situação:</label>
                        <select
                            id="situacao"
                            value={situacao}
                            onChange={(e) => setSituacao(e.target.value)}
                        >
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="descricao" className="label">Descrição:</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Seção de Envolvidos */}
                <div className="section">
                    <h2>Envolvidos</h2>
                    <div className="input-group">
                        <label htmlFor="unidadeOrganizacional" className="label">Unidade Organizacional:</label>
                        <input
                            id="unidadeOrganizacional"
                            type="text"
                            value={unidadeOrganizacional}
                            onChange={(e) => setUnidadeOrganizacional(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="responsavel" className="label">Responsáveis:</label>
                        <input
                            id="responsavel"
                            type="text"
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="grupoTrabalho" className="label">Grupo de Trabalho:</label>
                        <input
                            id="grupoTrabalho"
                            type="text"
                            value={grupoTrabalho}
                            onChange={(e) => setGrupoTrabalho(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="marcadores" className="label">Marcadores:</label>
                        <input
                            id="marcadores"
                            type="text"
                            value={marcadores}
                            onChange={(e) => setMarcadores(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pessoa" className="label">Pessoa:</label>
                        <input
                            id="pessoa"
                            type="text"
                            placeholder="Buscar uma pessoa já cadastrada"
                            value={pessoa}
                            onChange={(e) => setPessoa(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="tipoEnvolvimento" className="label">Tipo de Envolvimento:</label>
                        <select
                            id="tipoEnvolvimento"
                            value={tipoEnvolvimento}
                            onChange={(e) => setTipoEnvolvimento(e.target.value)}
                        >
                            <option value="Cliente">Cliente</option>
                            {/* Adicione mais opções conforme necessário */}
                        </select>
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className="button-group">
                    <button type="submit" className="btn">Salvar</button>
                    <button type="button" className="btn cancel" onClick={() => navigate('/gestao/atendimento')}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InserirAtendimento;
