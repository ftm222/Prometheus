import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CasesPage() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Fazer a chamada à API para buscar os casos
    axios.get('/api/cases')
      .then(response => setCases(response.data))
      .catch(error => console.error('Erro ao buscar casos:', error));
  }, []);

  return (
    <div>
      <h1>Casos Jurídicos</h1>
      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>{caseItem.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CasesPage;
