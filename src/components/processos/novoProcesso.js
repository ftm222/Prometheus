import React, { useState } from 'react';
import './novoProcesso.css'

const NovoProcesso = () => {
  const [activeTab, setActiveTab] = useState('Judicial'); // Aba ativa
  const [assunto, setAssunto] = useState('');
  const [responsavel] = useState('xxxxx'); // Mantido como valor fixo
  const [cnj, setCnj] = useState('');
  const [justica] = useState('Justiça dos Estados e do Distrito Federal e Territórios'); // Mantido como valor fixo
  const [orgao, setOrgao] = useState('');
  const [sistema, setSistema] = useState(''); // Variável de estado para sistema
  const [capturaTribunal, setCapturaTribunal] = useState(false);
  const [pessoa, setPessoa] = useState('');
  const [envolvimento, setEnvolvimento] = useState('Autor');
  const [cliente, setCliente] = useState(true);
  const [criarOutro, setCriarOutro] = useState(false);

  const handleSave = () => {
    // Exibe um alerta com as informações do processo
    alert(`Processo salvo!\nResponsável: ${responsavel}\nJustiça: ${justica}\nSistema: ${sistema}`);
  };

  return (
    <div style={{ color: '#fff', backgroundColor: '#121212', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Novo Processo</h2>
      
      {/* Tabs */}
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <button
          onClick={() => setActiveTab('Judicial')}
          style={{
            color: activeTab === 'Judicial' ? '#00bfa6' : '#fff',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'Judicial' ? '2px solid #00bfa6' : 'none',
            marginRight: '10px',
          }}
        >
          Judicial
        </button>
        <button
          onClick={() => setActiveTab('Extrajudicial')}
          style={{
            color: activeTab === 'Extrajudicial' ? '#00bfa6' : '#fff',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'Extrajudicial' ? '2px solid #00bfa6' : 'none',
          }}
        >
          Extrajudicial
        </button>
      </div>
      
      {/* Form Fields */}
      {activeTab === 'Judicial' && (
        <div>
          <div style={{ marginTop: '10px' }}>
            <label>Assunto *</label>
            <select value={assunto} onChange={(e) => setAssunto(e.target.value)} required>
              <option value="" disabled>Selecione</option>
              {/* Opções do dropdown */}
            </select>
          </div>
          <div>
            <label>Responsável *</label>
            <input type="text" value={responsavel} readOnly style={{ backgroundColor: '#333', color: '#aaa' }} />
          </div>
          <div>
            <label>Numeração do processo</label>
            <input type="text" value={cnj} onChange={(e) => setCnj(e.target.value)} />
          </div>
          <div>
            <label>Órgão *</label>
            <select value={orgao} onChange={(e) => setOrgao(e.target.value)} required>
              <option value="" disabled>Pesquise</option>
              {/* Opções do dropdown */}
            </select>
            <button>+</button>
          </div>
          <div>
            <label>
              <input type="checkbox" checked={capturaTribunal} onChange={(e) => setCapturaTribunal(e.target.checked)} />
              Agendar captura no tribunal
            </label>
          </div>
          <div>
            <label>Pessoa *</label>
            <input type="text" value={pessoa} onChange={(e) => setPessoa(e.target.value)} required />
            <button>+</button>
          </div>
          <div>
            <label>Envolvimento *</label>
            <select value={envolvimento} onChange={(e) => setEnvolvimento(e.target.value)} required>
              <option value="Autor">Autor</option>
              {/* Outras opções de envolvimento */}
            </select>
            <label>
              <input type="checkbox" checked={cliente} onChange={(e) => setCliente(e.target.checked)} />
              Cliente
            </label>
          </div>
          <div>
            <label>Sistema *</label>
            <input type="text" value={sistema} onChange={(e) => setSistema(e.target.value)} required />
          </div>
          <button style={{ marginTop: '10px' }}>Adicionar</button>
        </div>
      )}
      
      {activeTab === 'Extrajudicial' && (
        <div>
          <div style={{ marginTop: '10px' }}>
            <label>Assunto Extrajudicial *</label>
            <select value={assunto} onChange={(e) => setAssunto(e.target.value)} required>
              <option value="" disabled>Selecione</option>
              {/* Opções do dropdown */}
            </select>
          </div>
          <div>
            <label>Responsável *</label>
            <input type="text" value={responsavel} readOnly style={{ backgroundColor: '#333', color: '#aaa' }} />
          </div>
          <div>
            <label>Órgão *</label>
            <select value={orgao} onChange={(e) => setOrgao(e.target.value)} required>
              <option value="" disabled>Pesquise</option>
              {/* Opções do dropdown */}
            </select>
            <button>+</button>
          </div>
          <div>
            <label>Pessoa *</label>
            <input type="text" value={pessoa} onChange={(e) => setPessoa(e.target.value)} required />
            <button>+</button>
          </div>
          <div>
            <label>Envolvimento *</label>
            <select value={envolvimento} onChange={(e) => setEnvolvimento(e.target.value)} required>
              <option value="Autor">Autor</option>
              {/* Outras opções de envolvimento */}
            </select>
            <label>
              <input type="checkbox" checked={cliente} onChange={(e) => setCliente(e.target.checked)} />
              Cliente
            </label>
          </div>
          <button style={{ marginTop: '10px' }}>Adicionar</button>
        </div>
      )}
      
      {/* Bottom Options */}
      <div style={{ marginTop: '10px' }}>
        <label>
          <input type="checkbox" checked={criarOutro} onChange={(e) => setCriarOutro(e.target.checked)} />
          Criar outro
        </label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={() => alert('Cancelado')} style={{ color: '#00bfa6', background: 'none', border: 'none' }}>Cancelar</button>
        <button onClick={handleSave} style={{ backgroundColor: '#00bfa6', color: '#fff', border: 'none', padding: '5px 10px' }}>Salvar</button>
      </div>
    </div>
  );
};

export default NovoProcesso;
