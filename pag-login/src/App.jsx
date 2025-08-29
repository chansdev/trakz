import React from 'react';

import './App.css'; 
import ComponenteHub from './components/css/componentehub.jsx';

const App = () => {
  return (
    <div className="App">
      <section id="login">
        <div className="login-box">
          <h2>Login</h2>

          <form>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </section>

      
      <ComponenteHub />
    </div>
  );
}

export default App;
