// src/components/Calendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; // Para permitir a interação
import './Calendar.css'

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Evento 1', start: '2024-10-01' },
    { title: 'Evento 2', start: '2024-10-02' }
  ]);

  // Função para adicionar novos eventos dinamicamente
  const handleDateClick = (arg) => {
    const newEvent = { title: 'Novo Evento', start: arg.dateStr };
    setEvents([...events, newEvent]); // Atualiza os eventos com o novo evento
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick} // Adiciona evento ao clicar em uma data
        locale="pt-br" // Define o idioma do calendário
        height="auto" // Ajusta a altura do calendário
        expandRows={true} // Garante que o calendário expanda para preencher a área
        contentHeight="auto" // Define a altura do conteúdo como automática
      />
    </div>
  );
};

export default Calendar;
