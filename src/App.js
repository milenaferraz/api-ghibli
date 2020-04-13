import React from 'react';
import logo from './img/logo.png'
import './App.css';

import Movies from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;