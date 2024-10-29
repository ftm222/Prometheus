import React from 'react'; // Importa a biblioteca React para usar componentes e funcionalidades do React.

const NewTimesheet = () => { // Define um componente funcional chamado NewTimesheet.
    return ( // Retorna o JSX que será renderizado.
        <div className="new-timesheet"> {/* Contêiner principal do componente, com a classe 'new-timesheet'. */}
            <h1>Criar Novo Timesheet</h1> {/* Título do formulário, informando a ação a ser realizada. */}
            <form> {/* Início do formulário para criar um novo timesheet. */}
                <div> {/* Contêiner para o primeiro campo de entrada. */}
                    <label htmlFor="employeeName">Nome do Funcionário:</label> {/* Rótulo para o campo de nome do funcionário, associado ao ID 'employeeName'. */}
                    <input type="text" id="employeeName" required /> {/* Campo de entrada para o nome do funcionário, obrigatório. */}
                </div>
                <div> {/* Contêiner para o segundo campo de entrada. */}
                    <label htmlFor="project">Projeto:</label> {/* Rótulo para o campo de projeto, associado ao ID 'project'. */}
                    <input type="text" id="project" required /> {/* Campo de entrada para o nome do projeto, obrigatório. */}
                </div>
                <div> {/* Contêiner para o terceiro campo de entrada. */}
                    <label htmlFor="hoursWorked">Horas Trabalhadas:</label> {/* Rótulo para o campo de horas trabalhadas, associado ao ID 'hoursWorked'. */}
                    <input type="number" id="hoursWorked" required /> {/* Campo de entrada numérica para as horas trabalhadas, obrigatório. */}
                </div>
                <div> {/* Contêiner para o quarto campo de entrada. */}
                    <label htmlFor="date">Data:</label> {/* Rótulo para o campo de data, associado ao ID 'date'. */}
                    <input type="date" id="date" required /> {/* Campo de entrada para selecionar uma data, obrigatório. */}
                </div>
                <div> {/* Contêiner para o quinto campo de entrada. */}
                    <label htmlFor="description">Descrição:</label> {/* Rótulo para o campo de descrição, associado ao ID 'description'. */}
                    <textarea id="description" rows="4"></textarea> {/* Área de texto para inserir uma descrição, com 4 linhas visíveis. */}
                </div>
                <button type="submit">Salvar</button> {/* Botão para enviar o formulário e salvar os dados do timesheet. */}
            </form> {/* Fim do formulário. */}
        </div> // Fim do contêiner principal.
    );
};

export default NewTimesheet; // Exporta o componente NewTimesheet para que possa ser utilizado em outros arquivos.
