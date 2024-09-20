import React, { useState, useEffect } from "react";
import css from "./../../App.css";

function Body() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  function formatTime(seg) {
    var segundos = Math.floor(seg % 60);
    var min = Math.floor((seg % 3600) / 60);
    var hora = Math.floor(seg / 3600);

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hora)}:${formatNumber(min)}:${formatNumber(
      segundos
    )}`;
  }

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  // algoritmo de botões
  const [state, setState] = useState('iniciar'); // 'iniciar', 'continuar', 'pausar'

  const iniciar = () => {
    setState('continuar');
    setRunning(true)
  };

  const pausar = () => {
    setState('pausar');
    setRunning(false)
  };

  const continuar = () => {
    setState('continuar');
    setRunning(true)
  };

  const resetar = () => {
    const resetarcontagem = () => {setTime(0)}
    resetarcontagem()
    setState('iniciar');
    
  };

  return (
    <div id="cro">
      <h2 id="time">{formatTime(time)}</h2>
      <div className="alinhamento">
        
        {state === "iniciar" && <button id="start-btn" onClick={iniciar}>Iniciar</button>}

        {state === "continuar" && ( 
          <>
            <button id="stop-btn" onClick={pausar}>Pausar</button>
          </>
        )}

        {state === "pausar" && (
          <>
            <button id="start-btn" onClick={continuar}>Continuar</button>
            <button id="reset-btn" onClick={resetar}>Resetar</button>
          </>
        )}

        {/* <button id="start-btn" onClick={() => setRunning(true)}>
          Iniciar
        </button>
        <button id="stop-btn" onClick={() => setRunning(false)}>
          Pausar
        </button>
        <button id="reset-btn" onClick={() => setTime(0)}>
          Resetar
        </button>} */}
      </div>
    </div>
  );
}

export default Body;

// import React, { useState } from 'react';

// const App = () => {
//   const [state, setState] = useState('iniciar'); // 'iniciar', 'continuar', 'pausar'

//   const iniciar = () => {
//     setState('continuar');
//   };

//   const pausar = () => {
//     setState('continuar');
//   };

//   const continuar = () => {
//     setState('pausar');
//   };

//   const resetar = () => {
//     setState('iniciar');
//   };

//   return (
//     <div>
//       {state === 'iniciar' && (
//         <button onClick={iniciar}>Iniciar</button>
//       )}

//       {state === 'continuar' && (
//         <>
//           <button onClick={continuar}>Continuar</button>
//           <button onClick={pausar}>Pausar</button>
//         </>
//       )}

//       {state === 'pausar' && (
//         <>
//           <button onClick={continuar}>Continuar</button>
//           <button onClick={resetar}>Resetar</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
