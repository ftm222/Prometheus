// novaPessoa.js
import React from 'react';
import './novaPessoa.css'; // Importa o arquivo CSS para estilizar o componente.

const NovaPessoa = ({ onClose }) => { // O componente recebe uma função 'onClose' como prop.
    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário.

        // Lógica para processar os dados do formulário, como enviar para um servidor ou atualizar o estado.

        onClose(); // Chama a função onClose ao enviar o formulário.
    };

    return (
        <div className="nova-pessoa-container"> {/* Contêiner para o formulário de nova pessoa. */}
            <h2>Adicionar Nova Pessoa</h2> {/* Título do formulário. */}
            <form onSubmit={handleSubmit}> {/* Formulário com um manipulador de evento de envio. */}
                <input type="text" placeholder="Nome" required /> {/* Campo para o nome. */}
                <input type="text" placeholder="CPF/CNPJ" required /> {/* Campo para CPF/CNPJ. */}
                <input type="text" placeholder="Telefone" /> {/* Campo para telefone. */}
                <input type="email" placeholder="E-mail" required /> {/* Campo para e-mail. */}
                <input type="text" placeholder="Cidade" /> {/* Campo para cidade. */}
                <input type="text" placeholder="UF" required /> {/* Campo para UF. */}
                <select required> {/* Campo para selecionar o tipo de pessoa. */}
                    <option value="">Selecione o tipo</option>
                    <option value="fisica">Pessoa Física</option>
                    <option value="juridica">Pessoa Jurídica</option>
                </select>
                <select required> {/* Campo para selecionar o status. */}
                    <option value="">Selecione o status</option>
                    <option value="cliente">Cliente</option>
                    <option value="parte-contraria">Parte contrária</option>
                    <option value="cliente-inativo">Cliente inativo</option>
                </select>
                <button type="submit">Adicionar</button> {/* Botão para adicionar a nova pessoa. */}
                <button type="button" onClick={onClose}>Fechar</button> {/* Botão para fechar o formulário. */}
            </form>
        </div>
    );
};

export default NovaPessoa; // Exporta o componente para uso em outros arquivos.
