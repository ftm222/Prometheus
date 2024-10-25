import React, { useState, useEffect } from 'react'; // Importar useEffect
import './listaAtividades.css';

const ListaAtividades = () => {
    const [atividades, setAtividades] = useState([]); // Array de atividades
    const [filtroCliente, setFiltroCliente] = useState('');
    const [itensSelecionados, setItensSelecionados] = useState(new Set());

    // Simulação de busca de atividades
    useEffect(() => {
        // Exemplo de dados, isso pode ser uma chamada API
        const dadosExemplo = [
            { id: 1, descricao: 'Atendimento 1', cliente: 'Cliente A', agendamento: '2024-10-25', status: 'Pendente', tags: ['Urgente'] },
            { id: 2, descricao: 'Atendimento 2', cliente: 'Cliente B', agendamento: '2024-10-26', status: 'Concluído', tags: ['Importante'] },
            { id: 3, descricao: 'Atendimento 3', cliente: 'Cliente A', agendamento: '2024-10-27', status: 'Pendente', tags: [] }
        ];
        
        // Definindo os atividades com os dados simulados
        setAtividades(dadosExemplo);
    }, []); // O array vazio significa que isso só roda uma vez quando o componente monta.

    const handleSelecionarTodos = (event) => {
        if (event.target.checked) {
            const novosSelecionados = new Set(atividades.map(atendimento => atendimento.id));
            setItensSelecionados(novosSelecionados);
        } else {
            setItensSelecionados(new Set());
        }
    };

    const handleSelecionarAtendimento = (id) => {
        setItensSelecionados((prev) => {
            const novosSelecionados = new Set(prev);
            if (novosSelecionados.has(id)) {
                novosSelecionados.delete(id);
            } else {
                novosSelecionados.add(id);
            }
            return novosSelecionados;
        });
    };

    const handleFiltroClienteChange = (event) => {
        setFiltroCliente(event.target.value);
    };

    const handleExportar = () => {
        // Implementar lógica de exportação
        console.log('Exportar');
    };

    const atividadesFiltrados = atividades.filter(atendimento =>
        atendimento.cliente.toLowerCase().includes(filtroCliente.toLowerCase())
    );

    return (
        <div className="lista-atividades">
            <div className="filtros">
                <input
                    type="text"
                    placeholder="Filtro por Cliente"
                    value={filtroCliente}
                    onChange={handleFiltroClienteChange}
                />
                <button onClick={handleExportar}>Exportar</button>
                <button>Nova atendimento</button>
                <button>Nova tarefa</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={handleSelecionarTodos}
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
                    {atividadesFiltrados.map(atendimento => (
                        <tr key={atendimento.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={itensSelecionados.has(atendimento.id)}
                                    onChange={() => handleSelecionarAtendimento(atendimento.id)}
                                />
                            </td>
                            <td>{atendimento.descricao}</td>
                            <td>{atendimento.cliente}</td>
                            <td>{atendimento.agendamento}</td>
                            <td>{atendimento.status}</td>
                            <td>
                                {atendimento.tags.map(tag => (
                                    <span key={tag} className="tag">
                                        <i className="icon" /> {tag}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="contador">
                {itensSelecionados.size} itens selecionados
            </div>
            <div className="pagina">
                {/* Implementar lógica de paginação aqui, se necessário */}
            </div>
        </div>
    );
};

export default ListaAtividades;
