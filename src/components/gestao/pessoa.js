import React, { useState, useCallback } from 'react'; // Importa React e os hooks useState e useCallback para gerenciamento de estado e otimização de funções.
import './pessoa.css'; // Importa o arquivo CSS que estiliza o componente 'Pessoa'.
import NovaPessoa from './novaPessoa'; // Importa o componente 'NovaPessoa', que é usado para adicionar uma nova pessoa.

const Pessoa = () => { // Define um componente funcional chamado 'Pessoa'.
    const [showNovaPessoa, setShowNovaPessoa] = useState(false); // Estado para controlar a visibilidade do formulário de nova pessoa.
    const [selectedPessoas, setSelectedPessoas] = useState([]); // Estado para armazenar os CPF/CNPJ das pessoas selecionadas.
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false); // Estado para controlar a exibição da busca avançada.

    const pessoas = [ // Declara um array de objetos que contém informações sobre pessoas.
        { nome: 'ACAI DO CERRADO LTDA', cpfCnpj: '16.578.497/0001-60', telefone: 'Não informado', email: 'nao_informado@gmail.com', cidade: 'Gama - DF', uf: 'DF', tipo: 'Jurídica', status: 'Parte contrária' },
        { nome: 'ACAI DO PRETO DISTRIBUICAO LTDA', cpfCnpj: '44.053.542/0001-06', telefone: 'Não informado', email: 'distribuicao@acai.com', cidade: 'Não informado', uf: 'GO', tipo: 'Jurídica', status: 'Cliente inativo' },
        { nome: 'ADALTO DE OLIVEIRA JUNIOR', cpfCnpj: '037.674.565-75', telefone: 'Não informado', email: 'adalto@gmail.com', cidade: 'Não informado', uf: 'SP', tipo: 'Física', status: 'Cliente' },
    ];

    const togglePessoaSelection = useCallback((cpfCnpj) => { // Define uma função para alternar a seleção de pessoas pelo CPF/CNPJ.
        setSelectedPessoas((prevSelected) => { // Atualiza o estado de pessoas selecionadas.
            if (prevSelected.includes(cpfCnpj)) { // Se o CPF/CNPJ já está selecionado,
                return prevSelected.filter((item) => item !== cpfCnpj); // remove-o da lista de selecionados.
            } else { // Caso contrário,
                return [...prevSelected, cpfCnpj]; // adiciona o CPF/CNPJ à lista de selecionados.
            }
        });
    }, []); // useCallback evita que a função seja recriada a cada renderização.

    const selectAllPessoas = (event) => { // Define uma função para selecionar ou desmarcar todas as pessoas.
        if (event.target.checked) { // Se a caixa de seleção estiver marcada,
            setSelectedPessoas(pessoas.map((pessoa) => pessoa.cpfCnpj)); // seleciona todos os CPF/CNPJ.
        } else { // Se a caixa de seleção não estiver marcada,
            setSelectedPessoas([]); // desmarca todos, limpando a lista de selecionados.
        }
    };

    const handleBulkAction = (action) => { // Define uma função para lidar com ações em lote.
        if (action === 'excluir') { // Se a ação for 'excluir',
            console.log('Excluindo pessoas:', selectedPessoas); // exibe no console as pessoas selecionadas para exclusão.
            // Aqui, você pode adicionar a lógica real para excluir as pessoas selecionadas.
        }
    };

    const toggleAdvancedSearch = () => { // Define uma função para alternar a exibição da busca avançada.
        setShowAdvancedSearch(!showAdvancedSearch); // Inverte o estado de exibição da busca avançada.
    };

    return ( // Início do retorno do JSX do componente.
        <div className="pessoa-container"> {/* Cria uma div como contêiner principal para o componente. */}
            <h1>Pessoa</h1> {/* Exibe o título principal do componente. */}
            <div className="header"> {/* Cria uma div para o cabeçalho da seção. */}
                <button className="btn-nova-pessoa" onClick={() => setShowNovaPessoa(true)}>Nova pessoa</button> {/* Botão para abrir o formulário de nova pessoa. */}
                <input
                    type="text" // Define o tipo do campo como texto.
                    placeholder="Pesquise por nome/razão social, e-mail ou CPF/CNPJ" // Placeholder do campo de pesquisa.
                    className="search-bar" // Classe CSS para estilização.
                    aria-label="Pesquisar por nome/razão social, e-mail ou CPF/CNPJ" // Acessibilidade: rótulo para leitores de tela.
                />
                <div className="advanced-search-toggle"> {/* Div para o botão de busca avançada. */}
                    <button id="toggle-advanced-search" onClick={toggleAdvancedSearch}> {/* Botão que alterna a busca avançada. */}
                        {showAdvancedSearch ? 'Ocultar Busca Avançada ⯅' : 'Busca Avançada ⯆'} {/* Texto do botão baseado no estado atual. */}
                    </button>
                </div>
                <button className="btn-relatorio-simplificado">Gerar Relatório Simplificado</button> {/* Botão para gerar um relatório simplificado. */}
                <label> {/* Rótulo para o grupo de botões de rádio. */}
                    <input type="radio" name="tipo-pessoa" value="todos" defaultChecked /> Todos {/* Opção para selecionar todas as pessoas. */}
                </label>
                <label> {/* Rótulo para o próximo botão de rádio. */}
                    <input type="radio" name="tipo-pessoa" value="fisica" /> Pessoa Física {/* Opção para selecionar pessoa física. */}
                </label>
                <label> {/* Rótulo para o próximo botão de rádio. */}
                    <input type="radio" name="tipo-pessoa" value="juridica" /> Pessoa Jurídica {/* Opção para selecionar pessoa jurídica. */}
                </label>
            </div>

            {showAdvancedSearch && ( // Renderiza a busca avançada somente se 'showAdvancedSearch' for verdadeiro.
                <div className="advanced-search-content"> {/* Contêiner para o conteúdo da busca avançada. */}
                    {/* Aqui você pode adicionar o conteúdo da busca avançada */}
                    <p>Campos de busca avançada...</p> {/* Texto explicativo sobre os campos de busca avançada. */}
                </div>
            )}

            <div className="bulk-actions"> {/* Div para as ações em lote. */}
                <label className="checkbox-label"> {/* Rótulo para a caixa de seleção. */}
                    <input type="checkbox" onChange={selectAllPessoas} aria-label="Selecionar todos" /> {/* Caixa de seleção para marcar/desmarcar todos. */}
                </label>
                <div className="dropdown"> {/* Cria uma div para posicionar o botão de ações em lote. */}
                    <button className="btn-bulk-action">Ações em lote</button> {/* Botão que abre o menu de ações em lote. */}
                    <div className="dropdown-content"> {/* Contêiner para o conteúdo do menu suspenso. */}
                        <button onClick={() => handleBulkAction('excluir')}>Excluir Selecionados</button> {/* Botão para excluir pessoas selecionadas. */}
                    </div>
                </div>
            </div>

            <table className="pessoa-tabela"> {/* Cria uma tabela para exibir informações das pessoas. */}
                <thead> {/* Cabeçalho da tabela. */}
                    <tr> {/* Linha do cabeçalho. */}
                        <th>Selecionar</th> {/* Coluna para seleção. */}
                        <th>Nome</th> {/* Coluna para o nome. */}
                        <th>CPF/CNPJ</th> {/* Coluna para CPF/CNPJ. */}
                        <th>Telefone</th> {/* Coluna para telefone. */}
                        <th>E-mail</th> {/* Coluna para e-mail. */}
                        <th>Cidade</th> {/* Coluna para a cidade. */}
                        <th>UF</th> {/* Coluna para a unidade federativa. */}
                        <th>Tipo</th> {/* Coluna para o tipo de pessoa. */}
                        <th>Status</th> {/* Coluna para o status. */}
                        <th>Ações</th> {/* Coluna para ações como editar ou excluir. */}
                    </tr>
                </thead>
                <tbody> {/* Corpo da tabela onde as informações das pessoas serão exibidas. */}
                    {pessoas.map((pessoa) => ( // Mapeia o array de pessoas para criar uma linha para cada uma.
                        <tr key={pessoa.cpfCnpj}> {/* Cada linha da tabela possui uma chave única baseada no CPF/CNPJ. */}
                            <td> {/* Célula para a seleção. */}
                                <input 
                                    type="checkbox" // Define o tipo da entrada como checkbox.
                                    checked={selectedPessoas.includes(pessoa.cpfCnpj)} // Define se o checkbox deve estar marcado com base na seleção atual.
                                    onChange={() => togglePessoaSelection(pessoa.cpfCnpj)} // Chama a função para alternar a seleção ao mudar.
                                    aria-label={`Selecionar ${pessoa.nome}`} // Acessibilidade: rótulo para leitores de tela.
                                />
                            </td>
                            <td>{pessoa.nome}</td> {/* Exibe o nome da pessoa. */}
                            <td>{pessoa.cpfCnpj}</td> {/* Exibe o CPF/CNPJ da pessoa. */}
                            <td>{pessoa.telefone}</td> {/* Exibe o telefone da pessoa. */}
                            <td>{pessoa.email}</td> {/* Exibe o e-mail da pessoa. */}
                            <td>{pessoa.cidade}</td> {/* Exibe a cidade da pessoa. */}
                            <td>{pessoa.uf}</td> {/* Exibe a unidade federativa da pessoa. */}
                            <td>{pessoa.tipo}</td> {/* Exibe o tipo da pessoa. */}
                            <td>{pessoa.status}</td> {/* Exibe o status da pessoa. */}
                            <td> {/* Célula para ações. */}
                                <button className="btn-editar">Editar</button> {/* Botão para editar informações da pessoa. */}
                                <button className="btn-excluir" onClick={() => handleBulkAction('excluir')}>Excluir</button> {/* Botão para excluir a pessoa. */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showNovaPessoa && ( // Renderiza o componente NovaPessoa se 'showNovaPessoa' for verdadeiro.
                <NovaPessoa onClose={() => setShowNovaPessoa(false)} /> // Passa uma função para fechar o formulário quando necessário.
            )}
        </div>
    ); // Retorno do JSX.
};

export default Pessoa; // Exporta o componente 'Pessoa' como padrão para que possa ser utilizado em outros arquivos.
