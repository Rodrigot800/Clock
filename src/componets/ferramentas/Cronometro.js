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
        
        {state === "iniciar" && <button id="start-btn" onClick={iniciar}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z"/></svg></button>}

        {state === "continuar" && ( 
          <>
            <button id="stop-btn" className="" onClick={pausar}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M523.33-200v-560H760v560H523.33ZM200-200v-560h236.67v560H200Zm390-66.67h103.33v-426.66H590v426.66Zm-323.33 0H370v-426.66H266.67v426.66Zm0-426.66v426.66-426.66Zm323.33 0v426.66-426.66Z"/></svg></button>
          </>
        )}

        {state === "pausar" && (
          <>
            <button id="start-btn" onClick={continuar}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z"/></svg></button>
            <button id="reset-btn" onClick={resetar}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg></button>
          </>
        )}
      </div>
    </div>
  );
}

export default Body;

