import React, { useState } from 'react'; // Importa a biblioteca React e o hook useState para gerenciar estados em componentes funcionais.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para permitir a navegação entre diferentes rotas da aplicação.
import './inserirAtendimento.css'; // Importa o arquivo de estilos CSS para estilizar o componente.

const InserirAtendimento = () => { // Define um componente funcional chamado InserirAtendimento.
    // Definindo os estados do formulário
    const [dataAtendimento, setDataAtendimento] = useState(''); // Estado para armazenar a data de atendimento, inicializado como uma string vazia.
    const [assunto, setAssunto] = useState(''); // Estado para armazenar o assunto do atendimento, inicializado como uma string vazia.
    const [situacao, setSituacao] = useState('Ativo'); // Estado para armazenar a situação do atendimento, inicializado como "Ativo".
    const [descricao, setDescricao] = useState(''); // Estado para armazenar a descrição do atendimento, inicializado como uma string vazia.
    const [pastaFisica, setPastaFisica] = useState(''); // Estado para armazenar a pasta física, inicializado como uma string vazia.
    const [unidadeOrganizacional, setUnidadeOrganizacional] = useState(''); // Estado para armazenar a unidade organizacional, inicializado como uma string vazia.
    const [responsavel, setResponsavel] = useState(''); // Estado para armazenar o responsável pelo atendimento, inicializado como uma string vazia.
    const [grupoTrabalho, setGrupoTrabalho] = useState(''); // Estado para armazenar o grupo de trabalho, inicializado como uma string vazia.
    const [marcadores, setMarcadores] = useState(''); // Estado para armazenar marcadores, inicializado como uma string vazia.
    const [pessoa, setPessoa] = useState(''); // Estado para armazenar a pessoa relacionada ao atendimento, inicializado como uma string vazia.
    const [tipoEnvolvimento, setTipoEnvolvimento] = useState('Cliente'); // Estado para armazenar o tipo de envolvimento, inicializado como "Cliente".
    const navigate = useNavigate(); // Cria uma instância do hook de navegação para redirecionar o usuário.
    const handleCancel = () => {
        // Lógica para cancelar o lançamento
        console.log("Atendimento cancelado.");
        navigate('/gestao/atendimento');
    };    

    // Função que será chamada ao enviar o formulário
    const handleSubmit = (event) => { // Define a função handleSubmit que é chamada ao enviar o formulário.
        event.preventDefault(); // Prevê o comportamento padrão do formulário (que seria recarregar a página).

        // Aqui você pode adicionar a lógica para salvar os dados do atendimento
        console.log({ // Imprime os dados do atendimento no console para depuração.
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
        navigate('/gestao/atendimento'); // Usa o hook navigate para redirecionar o usuário para a rota '/gestao/atendimento'.
    };

    return ( // Retorna o JSX que compõe a interface do componente.
        <div className="container"> {/* Um contêiner principal que envolve todo o conteúdo do formulário. */}
            <h1>Inserir Atendimento</h1> {/* Título da página. */}
            <form onSubmit={handleSubmit}> {/* Define um formulário que chama handleSubmit ao ser enviado. */}
                {/* Seção de Dados Básicos */}
                <div className="section"> {/* Seção do formulário para dados básicos do atendimento. */}
                    <h2>Dados Básicos</h2> {/* Título da seção de dados básicos. */}
                    <div className="input-group"> {/* Grupo de entrada para o campo de data de atendimento. */}
                        <label htmlFor="dataAtendimento" className="label">Data de Atendimento:</label> {/* Rótulo para o campo de data. */}
                        <input // Campo de entrada para a data de atendimento.
                            id="dataAtendimento" // ID do campo para associações com o rótulo.
                            type="date" // Tipo do campo como data.
                            value={dataAtendimento} // Valor do campo vinculado ao estado dataAtendimento.
                            onChange={(e) => setDataAtendimento(e.target.value)} // Atualiza o estado dataAtendimento quando o valor do campo muda.
                            required // O campo é obrigatório.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de assunto. */}
                        <label htmlFor="assunto" className="label">Assunto:</label> {/* Rótulo para o campo de assunto. */}
                        <input // Campo de entrada para o assunto.
                            id="assunto" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={assunto} // Valor do campo vinculado ao estado assunto.
                            onChange={(e) => setAssunto(e.target.value)} // Atualiza o estado assunto quando o valor do campo muda.
                            required // O campo é obrigatório.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de pasta física. */}
                        <label htmlFor="pastaFisica" className="label">Pasta Física:</label> {/* Rótulo para o campo de pasta física. */}
                        <input // Campo de entrada para a pasta física.
                            id="pastaFisica" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={pastaFisica} // Valor do campo vinculado ao estado pastaFisica.
                            onChange={(e) => setPastaFisica(e.target.value)} // Atualiza o estado pastaFisica quando o valor do campo muda.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de situação. */}
                        <label htmlFor="situacao" className="label">Situação:</label> {/* Rótulo para o campo de situação. */}
                        <select // Campo de seleção para a situação.
                            id="situacao" // ID do campo para associações com o rótulo.
                            value={situacao} // Valor do campo vinculado ao estado situacao.
                            onChange={(e) => setSituacao(e.target.value)} // Atualiza o estado situacao quando o valor do campo muda.
                        >
                            <option value="Ativo">Ativo</option> {/* Opção "Ativo" para a situação. */}
                            <option value="Inativo">Inativo</option> {/* Opção "Inativo" para a situação. */}
                        </select>
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de descrição. */}
                        <label htmlFor="descricao" className="label">Descrição:</label> {/* Rótulo para o campo de descrição. */}
                        <textarea // Campo de texto para a descrição.
                            id="descricao" // ID do campo para associações com o rótulo.
                            value={descricao} // Valor do campo vinculado ao estado descricao.
                            onChange={(e) => setDescricao(e.target.value)} // Atualiza o estado descricao quando o valor do campo muda.
                            rows="4" // Define a altura do campo de texto para 4 linhas.
                            required // O campo é obrigatório.
                        ></textarea>
                    </div>
                </div>

                {/* Seção de Envolvidos */}
                <div className="section"> {/* Seção do formulário para os envolvidos no atendimento. */}
                    <h2>Envolvidos</h2> {/* Título da seção de envolvidos. */}
                    <div className="input-group"> {/* Grupo de entrada para o campo de unidade organizacional. */}
                        <label htmlFor="unidadeOrganizacional" className="label">Unidade Organizacional:</label> {/* Rótulo para o campo de unidade organizacional. */}
                        <input // Campo de entrada para a unidade organizacional.
                            id="unidadeOrganizacional" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={unidadeOrganizacional} // Valor do campo vinculado ao estado unidadeOrganizacional.
                            onChange={(e) => setUnidadeOrganizacional(e.target.value)} // Atualiza o estado unidadeOrganizacional quando o valor do campo muda.
                            required // O campo é obrigatório.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de responsáveis. */}
                        <label htmlFor="responsavel" className="label">Responsáveis:</label> {/* Rótulo para o campo de responsáveis. */}
                        <input // Campo de entrada para o responsável.
                            id="responsavel" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={responsavel} // Valor do campo vinculado ao estado responsavel.
                            onChange={(e) => setResponsavel(e.target.value)} // Atualiza o estado responsavel quando o valor do campo muda.
                            required // O campo é obrigatório.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de grupo de trabalho. */}
                        <label htmlFor="grupoTrabalho" className="label">Grupo de Trabalho:</label> {/* Rótulo para o campo de grupo de trabalho. */}
                        <input // Campo de entrada para o grupo de trabalho.
                            id="grupoTrabalho" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={grupoTrabalho} // Valor do campo vinculado ao estado grupoTrabalho.
                            onChange={(e) => setGrupoTrabalho(e.target.value)} // Atualiza o estado grupoTrabalho quando o valor do campo muda.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de marcadores. */}
                        <label htmlFor="marcadores" className="label">Marcadores:</label> {/* Rótulo para o campo de marcadores. */}
                        <input // Campo de entrada para os marcadores.
                            id="marcadores" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={marcadores} // Valor do campo vinculado ao estado marcadores.
                            onChange={(e) => setMarcadores(e.target.value)} // Atualiza o estado marcadores quando o valor do campo muda.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de pessoa. */}
                        <label htmlFor="pessoa" className="label">Pessoa:</label> {/* Rótulo para o campo de pessoa. */}
                        <input // Campo de entrada para a pessoa.
                            id="pessoa" // ID do campo para associações com o rótulo.
                            type="text" // Tipo do campo como texto.
                            value={pessoa} // Valor do campo vinculado ao estado pessoa.
                            onChange={(e) => setPessoa(e.target.value)} // Atualiza o estado pessoa quando o valor do campo muda.
                        />
                    </div>
                    <div className="input-group"> {/* Grupo de entrada para o campo de tipo de envolvimento. */}
                        <label htmlFor="tipoEnvolvimento" className="label">Tipo de Envolvimento:</label> {/* Rótulo para o campo de tipo de envolvimento. */}
                        <select // Campo de seleção para o tipo de envolvimento.
                            id="tipoEnvolvimento" // ID do campo para associações com o rótulo.
                            value={tipoEnvolvimento} // Valor do campo vinculado ao estado tipoEnvolvimento.
                            onChange={(e) => setTipoEnvolvimento(e.target.value)} // Atualiza o estado tipoEnvolvimento quando o valor do campo muda.
                        >
                            <option value="Cliente">Cliente</option> {/* Opção "Cliente" para o tipo de envolvimento. */}
                            <option value="Fornecedor">Fornecedor</option> {/* Opção "Fornecedor" para o tipo de envolvimento. */}
                        </select>
                    </div>
                </div>

                <button type="submit" className="submit-button">Salvar Atendimento</button> {/* Botão para enviar o formulário. */}
                <button type="button" onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default InserirAtendimento; // Exporta o componente InserirAtendimento para uso em outras partes da aplicação.
