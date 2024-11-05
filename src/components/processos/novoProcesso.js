import React, { useState, useEffect } from 'react';
import './novoProcesso.css';

// Componente principal
const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do pop-up

  useEffect(() => {
    // Abre o formulário automaticamente ao montar o componente
    setIsOpen(true);
  }, []);

  // Função para fechar o pop-up
  const closePopup = () => {
    setIsOpen(false);
  };

  // Componente do Novo Processo
  const NovoProcesso = ({ closePopup }) => {
    const [activeTab, setActiveTab] = useState('Judicial'); // Aba ativa
    const [assunto, setAssunto] = useState(''); // Estado para armazenar o assunto
    const [responsavel] = useState('xxxxx'); // Responsável mantido como valor fixo
    const [cnj, setCnj] = useState(''); // Estado para armazenar a numeração do processo
    const [justica] = useState('Justiça dos Estados e do Distrito Federal e Territórios'); // Justiça mantida como valor fixo
    const [orgao, setOrgao] = useState(''); // Estado para armazenar o órgão
    const [sistema, setSistema] = useState(''); // Estado para armazenar o sistema
    const [capturaTribunal, setCapturaTribunal] = useState(false); // Estado para controle da captura no tribunal
    const [pessoa, setPessoa] = useState(''); // Estado para armazenar a pessoa
    const [envolvimento, setEnvolvimento] = useState('Autor'); // Estado para armazenar o envolvimento
    const [cliente, setCliente] = useState(true); // Estado para controle do cliente
    const [criarOutro, setCriarOutro] = useState(false); // Estado para controle da criação de outro processo

    const handleSave = () => {
      // Exibe um alerta com as informações do processo
      alert(`Processo salvo!\nResponsável: ${responsavel}\nJustiça: ${justica}\nSistema: ${sistema}`);
    };

    return (
      <div style={{ color: '#fff', backgroundColor: '#121212', padding: '20px', maxWidth: '500px', margin: 'auto', maxHeight: '500px', overflowY: 'auto' }}>
        <h2>Novo Processo</h2>
        
        {/* Tabs para selecionar o tipo de processo */}
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
        
        {/* Campos do formulário para o processo judicial */}
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
        
        {/* Campos do formulário para o processo extrajudicial */}
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
        
        {/* Opções na parte inferior */}
        <div style={{ marginTop: '10px' }}>
          <label>
            <input type="checkbox" checked={criarOutro} onChange={(e) => setCriarOutro(e.target.checked)} />
            Criar outro
          </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button onClick={handleSave}>Salvar</button>
          <button onClick={closePopup}>Fechar</button> {/* Botão para fechar o pop-up */}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Botão para abrir o pop-up */}
      <button onClick={() => setIsOpen(true)}>Novo Processo</button>

      {/* Condicionalmente renderiza o pop-up */}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closePopup} className="close-button">Fechar</button>
            <NovoProcesso closePopup={closePopup} /> {/* Passa a função como prop */}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
