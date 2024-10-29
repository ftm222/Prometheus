// src/components/Calendar.js
import React, { useState } from 'react'; // Importa React e a função useState para gerenciar estado
import FullCalendar from '@fullcalendar/react'; // Importa o componente FullCalendar da biblioteca FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa o plugin de visualização em grade de dias
import interactionPlugin from '@fullcalendar/interaction'; // Importa o plugin que permite interações, como clicar em datas
import './Calendar.css' // Importa o arquivo de estilos CSS para o componente Calendar

const Calendar = () => { // Define o componente funcional Calendar
  const [events, setEvents] = useState([ // Inicializa o estado "events" com um array de eventos
    { title: 'Evento 1', start: '2024-10-01' }, // Primeiro evento com título e data de início
    { title: 'Evento 2', start: '2024-10-02' }  // Segundo evento com título e data de início
  ]);

  // Função para adicionar novos eventos dinamicamente ao calendário
  const handleDateClick = (arg) => { // Define a função que lida com o clique em uma data
    const newEvent = { title: 'Novo Evento', start: arg.dateStr }; // Cria um novo evento com título e data selecionada
    setEvents([...events, newEvent]); // Atualiza o estado "events" adicionando o novo evento
  };

  return ( // Início do retorno do JSX // Cria um div que envolve o calendário com uma classe CSS
    <div className="calendar-container"> 
      <FullCalendar // Adiciona o componente FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // Usa os plugins de visualização em grade e de interação
        initialView="dayGridMonth" // Define a visualização inicial como o mês em grade
        events={events} // Passa os eventos atuais para o calendário
        dateClick={handleDateClick} // Define a função a ser chamada ao clicar em uma data
        locale="pt-br" // Define o idioma do calendário como português do Brasil
        height="auto" // Ajusta a altura do calendário automaticamente
        expandRows={true} // Garante que o calendário expanda para preencher a área disponível
        contentHeight="auto" // Define a altura do conteúdo do calendário como automática
      />
    </div> // Fim do div que envolve o calendário
  ); // Fim do retorno do JSX
};

export default Calendar; // Exporta o componente Calendar para ser utilizado em outros módulos
