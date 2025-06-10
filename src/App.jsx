import React from 'react';
import LoginForm from './components/LoginForm';
import './components/LoginForm.css'; // Asegúrate de importar los estilos

function App() {
  return (
    <div className="app">
      <header className="wiki-header">
        {/* Aquí iría tu header estilo Wikipedia */}
        
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;