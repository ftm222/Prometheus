// novaPessoa.js
import React from 'react'; // Importa a biblioteca React para permitir a criação de componentes.
import './novaPessoa.css'; // Importa o arquivo CSS para estilizar o componente.

const NovaPessoa = ({ onClose }) => { // Define um componente funcional chamado 'NovaPessoa' que recebe 'onClose' como prop.
    const handleSubmit = (event) => { // Define a função 'handleSubmit' para lidar com o envio do formulário.
        event.preventDefault(); // Impede o comportamento padrão do formulário, que seria recarregar a página.

        // Lógica para processar os dados do formulário, como enviar para um servidor ou atualizar o estado.

        onClose(); // Chama a função onClose ao enviar o formulário para fechar o componente.
    };

    return ( // Início do retorno do JSX para renderizar o componente.
        <div className="nova-pessoa-container"> {/* Contêiner para o formulário de nova pessoa, estilizado pela classe CSS. */}
            <h2>Adicionar Nova Pessoa</h2> {/* Título do formulário indicando a ação de adicionar uma nova pessoa. */}
            <form onSubmit={handleSubmit}> {/* Formulário que executa 'handleSubmit' ao ser enviado. */}
                <input type="text" placeholder="Nome" required /> {/* Campo para o nome, obrigatório. */}
                <input type="text" placeholder="CPF/CNPJ" required /> {/* Campo para CPF ou CNPJ, obrigatório. */}
                <input type="text" placeholder="Telefone" /> {/* Campo para telefone, não obrigatório. */}
                <input type="email" placeholder="E-mail" required /> {/* Campo para e-mail, obrigatório e com validação de formato. */}
                <input type="text" placeholder="Cidade" /> {/* Campo para cidade, não obrigatório. */}
                <input type="text" placeholder="UF" required /> {/* Campo para Unidade Federativa (UF), obrigatório. */}
                <select required> {/* Campo para selecionar o tipo de pessoa, obrigatório. */}
                    <option value="">Selecione o tipo</option> {/* Opção padrão que solicita ao usuário para selecionar. */}
                    <option value="fisica">Pessoa Física</option> {/* Opção para selecionar pessoa física. */}
                    <option value="juridica">Pessoa Jurídica</option> {/* Opção para selecionar pessoa jurídica. */}
                </select>
                <select required> {/* Campo para selecionar o status, obrigatório. */}
                    <option value="">Selecione o status</option> {/* Opção padrão que solicita ao usuário para selecionar. */}
                    <option value="cliente">Cliente</option> {/* Opção para selecionar status de cliente. */}
                    <option value="parte-contraria">Parte contrária</option> {/* Opção para selecionar parte contrária. */}
                    <option value="cliente-inativo">Cliente inativo</option> {/* Opção para selecionar cliente inativo. */}
                </select>
                <button type="submit">Adicionar</button> {/* Botão para enviar o formulário e adicionar a nova pessoa. */}
                <button type="button" onClick={onClose}>Fechar</button> {/* Botão para fechar o formulário sem enviar. */}
            </form>
        </div>
    ); // Fim do retorno do JSX.
};

export default NovaPessoa; // Exporta o componente 'NovaPessoa' para ser utilizado em outros arquivos.
