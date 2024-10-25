import React, { useState, useCallback } from 'react'; // Importa React e useState para gerenciamento de estado.
import './pessoa.css'; // Importa o arquivo CSS para estilizar o componente.
import NovaPessoa from './novaPessoa'; // Importa o componente NovaPessoa.

const Pessoa = () => { // Define o componente funcional 'Pessoa'.
    const [showNovaPessoa, setShowNovaPessoa] = useState(false); // Estado para controlar a exibição do formulário.
    const [selectedPessoas, setSelectedPessoas] = useState([]); // Estado para armazenar as pessoas selecionadas.
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false); // Estado para controlar a exibição da busca avançada.

    const pessoas = [ // Declara um array de objetos contendo informações sobre pessoas.
        { nome: 'ACAI DO CERRADO LTDA', cpfCnpj: '16.578.497/0001-60', telefone: 'Não informado', email: 'nao_informado@gmail.com', cidade: 'Gama - DF', uf: 'DF', tipo: 'Jurídica', status: 'Parte contrária' },
        { nome: 'ACAI DO PRETO DISTRIBUICAO LTDA', cpfCnpj: '44.053.542/0001-06', telefone: 'Não informado', email: 'distribuicao@acai.com', cidade: 'Não informado', uf: 'GO', tipo: 'Jurídica', status: 'Cliente inativo' },
        { nome: 'ADALTO DE OLIVEIRA JUNIOR', cpfCnpj: '037.674.565-75', telefone: 'Não informado', email: 'adalto@gmail.com', cidade: 'Não informado', uf: 'SP', tipo: 'Física', status: 'Cliente' },
    ];

    const togglePessoaSelection = useCallback((cpfCnpj) => { // Função para alternar a seleção de pessoas.
        setSelectedPessoas((prevSelected) => {
            if (prevSelected.includes(cpfCnpj)) {
                return prevSelected.filter((item) => item !== cpfCnpj);
            } else {
                return [...prevSelected, cpfCnpj];
            }
        });
    }, []);

    const selectAllPessoas = (event) => { // Função para selecionar ou desmarcar todas as pessoas.
        if (event.target.checked) {
            setSelectedPessoas(pessoas.map((pessoa) => pessoa.cpfCnpj)); // Seleciona todos.
        } else {
            setSelectedPessoas([]); // Desmarca todos.
        }
    };

    const handleBulkAction = (action) => { // Função para lidar com ações em lote.
        if (action === 'excluir') {
            // Aqui você pode adicionar a lógica para excluir as pessoas selecionadas.
            console.log('Excluindo pessoas:', selectedPessoas);
            // Excluir lógica pode ser implementada aqui.
        }
    };

    const toggleAdvancedSearch = () => { // Função para alternar a exibição da busca avançada.
        setShowAdvancedSearch(!showAdvancedSearch);
    };

    return ( // Início do retorno do JSX do componente.
        <div className="pessoa-container"> {/* Cria uma div que serve como contêiner principal para o componente. */}
            <h1>Pessoa</h1> {/* Título principal do componente. */}
            <div className="header"> {/* Cria uma div para o cabeçalho da seção. */}
                <button className="btn-nova-pessoa" onClick={() => setShowNovaPessoa(true)}>Nova pessoa</button> {/* Botão que altera o estado para mostrar o formulário. */}
                <input
                    type="text"
                    placeholder="Pesquise por nome/razão social, e-mail ou CPF/CNPJ"
                    className="search-bar"
                    aria-label="Pesquisar por nome/razão social, e-mail ou CPF/CNPJ"
                />
                <div className="advanced-search-toggle"> {/* Div para o botão de busca avançada */}
                    <button id="toggle-advanced-search" onClick={toggleAdvancedSearch}>
                        {showAdvancedSearch ? 'Ocultar Busca Avançada ⯅' : 'Busca Avançada ⯆'}
                    </button>
                </div>
                <button className="btn-relatorio-simplificado">Gerar Relatório Simplificado</button>
                <label>
                    <input type="radio" name="tipo-pessoa" value="todos" defaultChecked /> Todos
                </label>
                <label>
                    <input type="radio" name="tipo-pessoa" value="fisica" /> Pessoa Física
                </label>
                <label>
                    <input type="radio" name="tipo-pessoa" value="juridica" /> Pessoa Jurídica
                </label>
            </div>

            {showAdvancedSearch && ( // Renderiza a busca avançada condicionalmente.
                <div className="advanced-search-content">
                    {/* Aqui você pode adicionar o conteúdo da busca avançada */}
                    <p>Campos de busca avançada...</p>
                </div>
            )}

            <div className="bulk-actions"> {/* Div para ações em lote */}
                <label className="checkbox-label">
                    <input type="checkbox" onChange={selectAllPessoas} aria-label="Selecionar todos" />
                </label>
                <div className="dropdown"> {/* Cria uma div para posicionar o botão de ações em lote */}
                    <button className="btn-bulk-action">Ações em lote</button>
                    <div className="dropdown-content">
                        <button onClick={() => handleBulkAction('excluir')}>Excluir Selecionados</button>
                    </div>
                </div>
            </div>

            <table className="pessoa-tabela"> {/* Cria uma tabela para exibir as informações das pessoas. */}
                <thead> {/* Cabeçalho da tabela. */}
                    <tr> {/* Linha do cabeçalho. */}
                        <th>Selecionar</th>
                        <th>Nome</th>
                        <th>CPF/CNPJ</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map((pessoa) => (
                        <tr key={pessoa.cpfCnpj}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={selectedPessoas.includes(pessoa.cpfCnpj)}
                                    onChange={() => togglePessoaSelection(pessoa.cpfCnpj)} 
                                    aria-label={`Selecionar ${pessoa.nome}`} 
                                />
                            </td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.cpfCnpj}</td>
                            <td>{pessoa.telefone}</td>
                            <td>{pessoa.email}</td>
                            <td>{pessoa.cidade}</td>
                            <td>{pessoa.uf}</td>
                            <td>
                                <span className={`status-badge ${pessoa.tipo === 'Jurídica' ? 'juridica' : 'fisica'}`}>
                                    {pessoa.tipo}
                                </span>
                            </td>
                            <td className="status-info">{pessoa.status}</td>
                            <td>
                                <button className="btn-editar">Editar</button>
                                <button className="btn-excluir">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showNovaPessoa && ( // Condicional para renderizar o formulário de nova pessoa.
                <NovaPessoa onClose={() => setShowNovaPessoa(false)} /> // Passa a função de fechar como prop.
            )}
        </div> // Fecha o contêiner principal.
    );
}; // Fecha a definição do componente.

export default Pessoa; // Exporta o componente 'Pessoa' para uso em outros arquivos.
