import React from 'react';

const NewTimesheet = () => {
    return (
        <div className="new-timesheet">
            <h1>Criar Novo Timesheet</h1>
            <form>
                <div>
                    <label htmlFor="employeeName">Nome do Funcionário:</label>
                    <input type="text" id="employeeName" required />
                </div>
                <div>
                    <label htmlFor="project">Projeto:</label>
                    <input type="text" id="project" required />
                </div>
                <div>
                    <label htmlFor="hoursWorked">Horas Trabalhadas:</label>
                    <input type="number" id="hoursWorked" required />
                </div>
                <div>
                    <label htmlFor="date">Data:</label>
                    <input type="date" id="date" required />
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <textarea id="description" rows="4"></textarea>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default NewTimesheet;
