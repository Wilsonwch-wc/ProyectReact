import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Default = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Desarrollo Fullstack + Módulo 7</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
        <p>-----------Por Carvajal Wilson------------</p>
      </div>
      <p className="read-the-docs">
        Haz clic en los logos de Vite y React para aprender más
      </p>
    </div>
  );
};

export default Default;
