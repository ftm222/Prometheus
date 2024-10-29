import React, { useState, useEffect } from 'react'; // Importa React e os hooks useState e useEffect
import './listaAtividades.css'; // Importa o arquivo CSS para estilizar o componente

const ListaAtividades = () => { // Define o componente funcional ListaAtividades
    const [atividades, setAtividades] = useState([]); // Estado para armazenar uma lista de atividades
    const [filtroCliente, setFiltroCliente] = useState(''); // Estado para armazenar o filtro de cliente
    const [itensSelecionados, setItensSelecionados] = useState(new Set()); // Estado para armazenar IDs de atividades selecionadas

    useEffect(() => { // useEffect executa código após a montagem do componente
        const dadosExemplo = [ // Define dados de exemplo para as atividades
            { id: 1, descricao: 'Atividade 1', cliente: 'Cliente A', agendamento: '2024-10-25', status: 'Pendente', tags: ['Urgente'] },
            { id: 2, descricao: 'Atividade 2', cliente: 'Cliente B', agendamento: '2024-10-26', status: 'Concluído', tags: ['Importante'] },
            { id: 3, descricao: 'Atividade 3', cliente: 'Cliente A', agendamento: '2024-10-27', status: 'Pendente', tags: [] }
        ];
        
        setAtividades(dadosExemplo); // Atualiza o estado atividades com os dados de exemplo
    }, []); // Array vazio como dependência para executar apenas na montagem do componente

    const handleSelecionarTodos = (event) => { // Função para selecionar ou desmarcar todas as atividades
        if (event.target.checked) { // Verifica se o checkbox está marcado
            const novosSelecionados = new Set(atividades.map(Atividade => Atividade.id)); // Adiciona todos os IDs ao set
            setItensSelecionados(novosSelecionados); // Atualiza o estado itensSelecionados com todos os IDs
        } else {
            setItensSelecionados(new Set()); // Limpa a seleção
        }
    };

    const handleSelecionarAtividade = (id) => { // Função para selecionar ou desmarcar uma atividade específica
        setItensSelecionados((prev) => { // Atualiza itensSelecionados baseado no estado anterior
            const novosSelecionados = new Set(prev); // Cria uma cópia do set atual
            if (novosSelecionados.has(id)) { // Se o ID já está selecionado
                novosSelecionados.delete(id); // Remove o ID do set
            } else {
                novosSelecionados.add(id); // Adiciona o ID ao set
            }
            return novosSelecionados; // Retorna o novo set atualizado
        });
    };

    const handleFiltroClienteChange = (event) => { // Função para atualizar o filtro do cliente
        setFiltroCliente(event.target.value); // Atualiza filtroCliente com o valor do input
    };

    const handleExportar = () => { // Função para exportar os dados (implementação ainda necessária)
        console.log('Exportar'); // Exibe 'Exportar' no console
    };

    const atividadesFiltrados = atividades.filter(Atividade => // Filtra atividades baseado no filtro do cliente
        Atividade.cliente.toLowerCase().includes(filtroCliente.toLowerCase()) // Compara em minúsculas para busca case-insensitive
    );

    return ( // Retorna o JSX do componente
        <div className="lista-atividades"> {/* Container principal com classe CSS */}
            <div className="filtros"> {/* Seção de filtros e botões */}
                <button>Nova Atividade</button> {/* Botão para adicionar nova atividade */}
                <input
                    type="text"
                    placeholder="Filtro por Cliente" // Placeholder do campo de filtro por cliente
                    value={filtroCliente} // Valor do input é o estado filtroCliente
                    onChange={handleFiltroClienteChange} // Chama handleFiltroClienteChange ao mudar o valor
                />
                <button onClick={handleExportar}>Exportar</button> {/* Botão para exportar, com evento de clique */}
                <button>Nova tarefa</button> {/* Botão de nova tarefa */}
                
                {/* Novos botões ao lado direito */}
                <div className="botoes-direita"> {/* Seção de botões adicionais */}
                    <button>Busca Avançada</button>
                    <button>Relatório</button>
                    <button>Todos</button>
                    <button>Tarefas</button>
                    <button>Audiências</button>
                    <button>Compromisso</button>
                    <button>Configurações</button>
                </div>
            </div>
            <table> {/* Tabela para exibir atividades */}
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={handleSelecionarTodos} // Chama handleSelecionarTodos ao mudar valor
                            />
                        </th>
                        <th>Descrição</th>
                        <th>Cliente</th>
                        <th>Agendamento</th>
                        <th>Status</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {atividadesFiltrados.map(Atividade => ( // Mapeia atividadesFiltrados para exibir as atividades
                        <tr key={Atividade.id}> {/* Linha de cada atividade, com chave única baseada no ID */}
                            <td>
                                <input
                                    type="checkbox"
                                    checked={itensSelecionados.has(Atividade.id)} // Verifica se a atividade está selecionada
                                    onChange={() => handleSelecionarAtividade(Atividade.id)} // Chama handleSelecionarAtividade ao clicar
                                />
                            </td>
                            <td>{Atividade.descricao}</td> {/* Coluna com a descrição da atividade */}
                            <td>{Atividade.cliente}</td> {/* Coluna com o cliente */}
                            <td>{Atividade.agendamento}</td> {/* Coluna com a data de agendamento */}
                            <td>{Atividade.status}</td> {/* Coluna com o status da atividade */}
                            <td>
                                {Atividade.tags.map(tag => ( // Mapeia tags para exibir como spans
                                    <span key={tag} className="tag"> {/* Tag com classe CSS */}
                                        <i className="icon" /> {tag} {/* Icone e o nome da tag */}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="contador"> {/* Contador de itens selecionados */}
                {itensSelecionados.size} itens selecionados {/* Exibe a quantidade de itens selecionados */}
            </div>
            <div className="pagina"> {/* Placeholder para lógica de paginação */}
                {/* Implementar lógica de paginação aqui, se necessário */}
            </div>
        </div>
    );
};

export default ListaAtividades; // Exporta o componente ListaAtividades para uso em outros arquivos
