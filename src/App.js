import React, { useState } from "react";
import AppCss from "./App.css"
import Cronometro from "./componets/ferramentas/Cronometro";
import Alarme from "./componets/ferramentas/alarme";
import Timer from "./componets/ferramentas/timer";

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


// Componente principal para gerenciar os três
function App() {
  const [componenteAtivo, setComponenteAtivo] = useState("alarme");
  const mostrarComponente = () => {
    if (componenteAtivo === "cronometro") return <Cronometro />;
    if (componenteAtivo === "alarme") return <Alarme />;
    if (componenteAtivo === "timer") return <Timer />;
  };

  return (
    <div>
      <div id="head">
      <div id="menu">
        <div className="alinhamento-menu">
          <button className="btnHead " id="Cronometro"  onClick={() => setComponenteAtivo("cronometro")}>
            <img id="Cronometro"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Cronometro">Cronometro</p>
          </button>

          <button  id="Alarme" className="btnHead " onClick={() => setComponenteAtivo("alarme")}>
            <img id="Alarme"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Alarme" >Alarme</p>
          </button>
          <button id="Temporizador" className="btnHead " onClick={() => setComponenteAtivo("timer")}>
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
