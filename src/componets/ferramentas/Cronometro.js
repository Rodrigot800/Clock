import React, { useState, useEffect } from "react";

function Body() {
  // uma variavel time e uma função setTime para atualizar time
  const [time, setTime] = useState(0);
  // um useState para mostrar o estado da contagem, iniciando como false, 
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    // quanto Running for igual a True, irá iniciar a contagem
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    // quanto Running for igual a false, irá parar a contagem
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    // esse retorno será executado quando o componente for executado ou as depedencias mudarem. chamamos 0,
    return () => clearInterval(interval);
  }, [running, time]);

  function formatTime(seg) {
    var segundos = Math.floor(seg % 60);
    var min = Math.floor((seg % 3600) / 60);
    var hora = Math.floor(seg / 3600);

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hora)}:${formatNumber(min)}:${formatNumber(
      segundos
    )}`;
  }

 

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
      </div>
    </div>
  );
}

export default Body;

