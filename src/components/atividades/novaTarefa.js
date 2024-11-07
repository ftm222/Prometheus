import React, { useState } from 'react';
import './novaTarefa.css'; // Arquivo de estilo CSS

const NovaTarefa = () => {
    // Define o estado inicial do formulário com todos os campos
    const [formData, setFormData] = useState({
        tipoVinculo: '',
        vinculo: '',
        tipoTarefa: '',
        titulo: '',
        dataBase: '07/11/2024',
        dataPrevista: '',
        horaPrevista: '',
        dataFatal: '',
        horaFatal: '',
        localLink: '',
        descricao: '',
        responsavel: 'CLEIDER RODRIGUES FERNANDES',
        grupoTrabalho: '',
        criarOutro: false,
        exibirKanban: false,
        quadro: '',
        coluna: '',
        situacaoTarefa: '',
        marcadores: '',
        notificarCriacaoResponsaveis: false,
        notificarCriacaoCliente: false,
        notificarCriacaoTerceiros: false,
        notificarConclusaoResponsaveis: false,
        notificarConclusaoCliente: false,
        notificarConclusaoTerceiros: false,
        lembretes: false,
        areaCliente: false,
        recorrencia: false
    });

    // Controla o estado para expandir ou recolher o campo "Mais informações"
    const [mostrarMaisInfo, setMostrarMaisInfo] = useState(false);

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário Enviado:', formData); // Exibe os dados no console
    };

    return (
        <div className="nova-tarefa-container">
            <h2>Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                {/* Campo Tipo de Vínculo */}
                <label>
                    Tipo de vínculo
                    <select
                        name="tipoVinculo"
                        value={formData.tipoVinculo}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        {/* Adicionar opções aqui */}
                    </select>
                </label>

                {/* Campo Vínculo */}
                <label>
                    Vínculo
                    <select
                        name="vinculo"
                        value={formData.vinculo}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        {/* Adicionar opções aqui */}
                    </select>
                </label>

                {/* Campo Tipo de Tarefa */}
                <label>
                    Tipo de tarefa <span className="required">*</span>
                    <select
                        name="tipoTarefa"
                        value={formData.tipoTarefa}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {/* Adicionar opções aqui */}
                    </select>
                </label>

                {/* Campo Título */}
                <label>
                    Título
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                    />
                </label>

                {/* Campo Data Base */}
                <label>
                    Data base <span className="required">*</span>
                    <input
                        type="date"
                        name="dataBase"
                        value={formData.dataBase}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Campo Data Prevista */}
                <label>
                    Data prevista <span className="required">*</span>
                    <input
                        type="date"
                        name="dataPrevista"
                        value={formData.dataPrevista}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Campo Hora Prevista */}
                <label>
                    Hora prevista
                    <input
                        type="time"
                        name="horaPrevista"
                        value={formData.horaPrevista}
                        onChange={handleChange}
                    />
                </label>

                {/* Campo Data Fatal */}
                <label>
                    Data Fatal <span className="required">*</span>
                    <input
                        type="date"
                        name="dataFatal"
                        value={formData.dataFatal}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Campo Hora Fatal */}
                <label>
                    Hora Fatal
                    <input
                        type="time"
                        name="horaFatal"
                        value={formData.horaFatal}
                        onChange={handleChange}
                    />
                </label>

                {/* Campo Local/Link */}
                <label>
                    Local/Link
                    <input
                        type="text"
                        name="localLink"
                        value={formData.localLink}
                        onChange={handleChange}
                    />
                </label>

                {/* Campo Descrição */}
                <label>
                    Descrição
                    <textarea
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                </label>

                {/* Campo Responsável */}
                <label>
                    Responsável <span className="required">*</span>
                    <select
                        name="responsavel"
                        value={formData.responsavel}
                        onChange={handleChange}
                        required
                    >
                        <option value="CLEIDER RODRIGUES FERNANDES">
                            CLEIDER RODRIGUES FERNANDES
                        </option>
                        {/* Adicionar mais opções se necessário */}
                    </select>
                </label>

                {/* Campo Grupos de Trabalho */}
                <label>
                    Grupos de trabalho
                    <select
                        name="grupoTrabalho"
                        value={formData.grupoTrabalho}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        {/* Adicionar opções aqui */}
                    </select>
                </label>

                {/* Campo Exibir tarefa no kanban */}
                <label>
                    <input
                        type="checkbox"
                        name="exibirKanban"
                        checked={formData.exibirKanban}
                        onChange={handleChange}
                    />
                    Exibir tarefa no kanban
                </label>

                {/* Campo Quadro */}
                <label>
                    Quadro
                    <select
                        name="quadro"
                        value={formData.quadro}
                        onChange={handleChange}
                    >
                        <option value="">Audiências</option>
                        {/* Adicionar mais opções conforme necessário */}
                    </select>
                </label>

                {/* Campo Coluna */}
                <label>
                    Coluna <span className="required">*</span>
                    <select
                        name="coluna"
                        value={formData.coluna}
                        onChange={handleChange}
                        required
                    >
                        <option value="Pendente - Cíveis">Pendente - Cíveis</option>
                        {/* Adicionar mais opções conforme necessário */}
                    </select>
                </label>

                {/* Botão para mostrar ou esconder "Mais informações" */}
                <button
                    type="button"
                    onClick={() => setMostrarMaisInfo(!mostrarMaisInfo)}
                    className="mostrar-mais-info-btn"
                >
                    {mostrarMaisInfo ? 'Menos informações' : 'Mais informações'}
                </button>

                {/* Campos adicionais dentro de "Mais informações" */}
                {mostrarMaisInfo && (
                    <div className="mais-informacoes">
                        {/* Campo Situação da Tarefa */}
                        <label>
                            Situação da tarefa
                            <select
                                name="situacaoTarefa"
                                value={formData.situacaoTarefa}
                                onChange={handleChange}
                            >
                                <option value="Pendente">Pendente</option>
                                {/* Adicionar mais opções conforme necessário */}
                            </select>
                        </label>

                        {/* Campo Marcadores */}
                        <label>
                            Marcadores
                            <input
                                type="text"
                                name="marcadores"
                                value={formData.marcadores}
                                onChange={handleChange}
                                placeholder="Pesquise"
                            />
                        </label>

                        {/* Notificação ao criar a tarefa */}
                        <fieldset>
                            <legend>Notificar ao criar a tarefa</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notificarCriacaoResponsaveis"
                                    checked={formData.notificarCriacaoResponsaveis}
                                    onChange={handleChange}
                                />
                                Responsáveis
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notificarCriacaoCliente"
                                    checked={formData.notificarCriacaoCliente}
                                    onChange={handleChange}
                                />
                                Cliente
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notificarCriacaoTerceiros"
                                    checked={formData.notificarCriacaoTerceiros}
                                    onChange={handleChange}
                                />
                                Terceiros
                            </label>
                        </fieldset>

                        {/* Notificação ao concluir a tarefa */}
                        <fieldset>
                            <legend>Notificar ao concluir a tarefa</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notificarConclusaoResponsaveis"
                                    checked={formData.notificarConclusaoResponsaveis}
                                    onChange={handleChange}
                                />
                                Responsáveis
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notificarConclusaoCliente"
                                    checked={formData.notificarConclusaoCliente}
                                    onChange={handleChange}
                                />
                                Cliente
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notificarConclusaoTerceiros"
                                    checked={formData.notificarConclusaoTerceiros}
                                    onChange={handleChange}
                                />
                                Terceiros
                            </label>
                        </fieldset>

                        {/* Opções adicionais */}
                        <label>
                            <input
                                type="checkbox"
                                name="lembretes"
                                checked={formData.lembretes}
                                onChange={handleChange}
                            />
                            Lembretes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="areaCliente"
                                checked={formData.areaCliente}
                                onChange={handleChange}
                            />
                            Área do cliente
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="recorrencia"
                                checked={formData.recorrencia}
                                onChange={handleChange}
                            />
                            Recorrência
                        </label>
                    </div>
                )}

                {/* Botão para enviar o formulário */}
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default NovaTarefa;
