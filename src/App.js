import React, { useState, useEffect } from "react";
import Appcss from "./App.css";
import Cronometro from "./componets/ferramentas/Cronometro";
import Alarme from "./componets/ferramentas/alarme";

// Componente Cronômetro
/*function Cronometro() {
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
}*/

// Componente Alarme


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
      <div id="head">
      <div id="menu">
        <div className="alinhamento-menu">
          <button className="teste" id="Cronometro"  onClick={() => setComponenteAtivo("cronometro")}>
            <img id="Cronometro"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Cronometro">Cronometro</p>
          </button>

          <button  id="Alarme" className="teste" onClick={() => setComponenteAtivo("temporizador")}>
            <img id="Alarme"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Alarme" >Alarme</p>
          </button>
          <button id="Temporizador" className="teste" onClick={() => setComponenteAtivo("alarme")}>
            <img id="Temporizador"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Temporizador" >Temporizador</p>
          </button>
        </div>
      </div>
    </div>
      {/* <h1>Aplicação: Cronômetro, Alarme e Temporizador</h1>
      <button onClick={() => setComponenteAtivo("cronometro")}>
        Cronômetro
      </button>
      <button onClick={() => setComponenteAtivo("alarme")}>Alarme</button>
      <button onClick={() => setComponenteAtivo("temporizador")}>
        Temporizador
      </button>*/}

      <div>{mostrarComponente()}</div> 
    </div>
  );
}

export default App;
