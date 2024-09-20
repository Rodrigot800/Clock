import React, { useState, useEffect } from "react";

// Componente Cronômetro
function Cronometro() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  return (
    <div>
      <h2>Cronômetro: {time}s</h2>
      <button onClick={() => setRunning(true)}>Iniciar</button>
      <button onClick={() => setRunning(false)}>Pausar</button>
      <button onClick={() => setTime(0)}>Resetar</button>
    </div>
  );
}

// Componente Alarme
function Alarme() {
  const [hora, setHora] = useState("");
  const [mensagem, setMensagem] = useState("");

  const verificarAlarme = () => {
    const agora = new Date();
    const horaAtual = agora.getHours() + ":" + agora.getMinutes();

    if (hora === horaAtual) {
      setMensagem("Hora do alarme!");
    } else {
      setMensagem("Aguardando...");
    }
  };

  useEffect(() => {
    const intervalo = setInterval(verificarAlarme, 1000);
    return () => clearInterval(intervalo);
  }, [hora]);

  return (
    <div>
      <h2>Alarme</h2>
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <p>{mensagem}</p>
    </div>
  );
}

// Componente Temporizador
function Temporizador() {
  const [tempo, setTempo] = useState(60); // Definindo 60 segundos de exemplo
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let timer;
    if (ativo && tempo > 0) {
      timer = setInterval(() => {
        setTempo((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempo === 0) {
      setAtivo(false);
      alert("Temporizador terminou!");
    }
    return () => clearInterval(timer);
  }, [ativo, tempo]);

  return (
    <div>
      <h2>Temporizador: {tempo}s</h2>
      <input
        type="number"
        value={tempo}
        onChange={(e) => setTempo(Number(e.target.value))}
      />
      <button onClick={() => setAtivo(true)}>Iniciar</button>
      <button onClick={() => setAtivo(false)}>Pausar</button>
      <button onClick={() => setTempo(60)}>Resetar</button>
    </div>
  );
}

// Componente principal para gerenciar os três
function App() {
  const [componenteAtivo, setComponenteAtivo] = useState("cronometro");

  const mostrarComponente = () => {
    if (componenteAtivo === "cronometro") return <Cronometro />;
    if (componenteAtivo === "alarme") return <Alarme />;
    if (componenteAtivo === "temporizador") return <Temporizador />;
  };

  return (
    <div>
      <h1>Aplicação: Cronômetro, Alarme e Temporizador</h1>
      <button onClick={() => setComponenteAtivo("cronometro")}>
        Cronômetro
      </button>
      <button onClick={() => setComponenteAtivo("alarme")}>Alarme</button>
      <button onClick={() => setComponenteAtivo("temporizador")}>
        Temporizador
      </button>

      <div>{mostrarComponente()}</div>
    </div>
  );
}

export default App;
----------------------------------------------

import React, { useState, useEffect, useRef } from "react";

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

  const btnStart = useRef(null);

  useEffect(() => {
    if (btnStart.current) {
      btnStart.current.addEventListener("click", () => {
        setRunning(true);
        // document.getElementById("start-btn").innerText = "Continuar";
        // document.getElementById("start-btn").style.display = "none";
        document.getElementById("stop-btn").style.display = "block";
        // document.getElementById("reset-btn").style.display = "none";
      });
    }
  }, []);

  const btnStop = useRef(null);
  useEffect(() => {
    if (btnStop.current) {
      btnStop.current.addEventListener("click", () => {
        setRunning(false);
        // document.getElementById("start-btn").style.display = "block";
        // document.getElementById("stop-btn").style.display = "none";
         document.getElementById("reset-btn").style.display = "block";
      });
    }
  }, []);
  const btnreset = useRef(null);
  useEffect(() => {
    if (btnreset.current) {
      btnreset.current.addEventListener("click", () => {
        alert('ola')
        formatTime(0)
        setRunning(0);
        // document.getElementById("start-btn").innerText = "Continuar";
        // document.getElementById("stop-btn").style.display = "none";
        // document.getElementById("reset-btn").style.display = "none";
        // document.getElementById("start-btn").innerText = "Iniciar";
      });
    }
  }, []);

  return (
    <div id="cro">
      <h2 id="time">{formatTime(time)}</h2>

      <div className="alinhamento">
        <button id="start-btn" ref={btnStart}>
          Iniciar
        </button>
        <button id="stop-btn" ref={btnStop}>
          Pausar
        </button>
        <button id="reset-btn" ref={btnreset} >
          Resetar
        </button>
      </div>
    </div>
    //    <div id="cro">
    //    <h2 id="time">00:00:00</h2>
    //    <button
    //      id="start-btn"
    //      type="button"
    //      onClick={() => {
    //        document.getElementById("start-btn").innerText = "Continuar";
    //        iniciarCronometro();
    //        document.getElementById("start-btn").style.display = "none";
    //      }}
    //    >
    //      {" "}
    //      Inicio
    //    </button>
    //    <div className="alinhamento">
    //      <button
    //        id="stop-btn"
    //        type="button"
    //        onClick={() => {
    //          stop();
    //          document.getElementById("stop-btn").style.display = "none";
    //        }}
    //      >
    //        Stop
    //      </button>
    //      <button
    //        id="reset-btn"
    //        type="button"
    //        onClick={() => {
    //          reset();
    //        }}
    //      >
    //        Resetar
    //      </button>
    //    </div>
    //  </div>
  );
}

export default Body;

/*function Body() {
  var seg = 0;
  var min = 0;
  var hora = 0;
  var interval;

  function dupliDigit(digite) {
    digite = digite < 10 ? "0" + digite : digite;
    return digite;
  }

  function iniciarCronometro() {
    interval = setInterval(contador, 1000);

    document.getElementById("stop-btn").style.display = "block";
    document.getElementById("reset-btn").style.display = "block";
  }

  function contador() {
   
    seg++;

    if (seg >= 60) {
      seg = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hora++;
    }

    document.getElementById("time").innerText = `${dupliDigit(
      hora
    )}:${dupliDigit(min)}:${dupliDigit(seg)}`;
  }

  function stop() {
    clearInterval(interval);
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("reset-btn").style.display = "none"
  }
  function reset() {
    stop()
    document.getElementById("time").innerText = "00:00:00";
    seg = 0;
    min = 0;
    hora = 0;
    document.getElementById("stop-btn").style.display = "none";
    document.getElementById("start-btn").innerText = "Iniciar";
  }
  return (
    <div id="cro">
      <h2 id="time">00:00:00</h2>
      <button
        id="start-btn"
        type="button"
        onClick={() => {
          document.getElementById("start-btn").innerText = "Continuar";
          iniciarCronometro();
          document.getElementById("start-btn").style.display = "none";
        }}
      >
        {" "}
        Inicio
      </button>
      <div className="alinhamento">
        <button
          id="stop-btn"
          type="button"
          onClick={() => {
            stop();
            document.getElementById("stop-btn").style.display = "none";
          }}
        >
          Stop
        </button>
        <button
          id="reset-btn"
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}*/

// // Função para formatar o tempo em horas, minutos e segundos
// const formatTime = (totalSeconds) => {
//   const hours = Math.floor(totalSeconds / 3600);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const seconds = totalSeconds % 60;

//   // Formatando com dois dígitos
//   const formatNumber = (num) => (num < 10 ? `0${num}` : num);

//   return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
// };
