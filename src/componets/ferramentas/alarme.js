// import React from "react";
// function Alarme() {
//   return (
//     <div>
//       <h1>alarme</h1>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

// Componente Cronômetro
function Alarme() {

  const [state, setState] = useState('iniciar'); // 'iniciar', 'continuar', 'pausar'

  const iniciar = () => {
    setState('continuar');
  };

  const pausar = () => {
    setState('continuar');
  };

  const continuar = () => {
    setState('pausar');
  };

  const resetar = () => {
    setState('iniciar');
  };

  return (
    <div>
      {state === 'iniciar' && (
        <button id="start-btn" onClick={iniciar}>Iniciar</button>
      )}

      {state === 'continuar' && (
        <>
          <button onClick={continuar}>Continuar</button>
          <button onClick={pausar}>Pausar</button>
        </>
      )}

      {state === 'pausar' && (
        <>
          <button onClick={continuar}>Continuar</button>
          <button onClick={resetar}>Resetar</button>
        </>
      )}
    </div>
  );
};

export default Alarme;
