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
  const [componenteAtivo, setComponenteAtivo] = useState("cronometro");
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
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-120q-75 0-140.27-28.4-65.27-28.4-114.1-77.23-48.83-48.83-77.23-114.1Q120-405 120-480q0-42.27 10-82.13 10-39.87 29-76.37 19-36.5 45.5-68T265-763l268 268-42 43-230-230q-39 42-60 93.5T180-480q0 125 87.5 212.5T480-180q125 0 212.5-87.5T780-480q0-118-79-204.5T504-779v100h-60v-161h34q74.72 0 140.86 28.5Q685-783 734-734.5t77.5 114Q840-555 840-480t-28.4 140.27q-28.4 65.27-77.23 114.1-48.83 48.83-114.1 77.23Q555-120 480-120ZM260.11-444Q244-444 233-454.89q-11-10.9-11-27Q222-498 232.89-509q10.9-11 27-11Q276-520 287-509.11q11 10.9 11 27Q298-466 287.11-455q-10.9 11-27 11Zm218 221Q462-223 451-233.89q-11-10.9-11-27Q440-277 450.89-288q10.9-11 27-11Q494-299 505-288.11q11 10.9 11 27Q516-245 505.11-234q-10.9 11-27 11Zm221-221Q683-444 672-454.89q-11-10.9-11-27Q661-498 671.89-509q10.9-11 27-11Q715-520 726-509.11q11 10.9 11 27Q737-466 726.11-455q-10.9 11-27 11Z"/></svg>
            <p id="Cronometro">Cronometro</p>
          </button>
          <button id="Temporizador" className="btnHead " onClick={() => setComponenteAtivo("timer")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M360-860v-60h240v60H360Zm90 447h60v-230h-60v230Zm30 332q-74 0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81Zm0-60q125 0 212.5-87.5T780-441q0-125-87.5-212.5T480-741q-125 0-212.5 87.5T180-441q0 125 87.5 212.5T480-141Zm0-299Z"/></svg>
            <p id="Temporizador" >Temporizador</p>
            
          </button>
          <button  id="Alarme" className="btnHead " onClick={() => setComponenteAtivo("alarme")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M479-82q-74 0-139.5-28t-114-76.5q-48.5-48.5-77-114T120-440.73q0-74.74 28.5-140Q177-646 225.5-695t114-77Q405-800 479-800t139.5 28Q684-744 733-695t77 114.27q28 65.26 28 140 0 74.73-28 140.23-28 65.5-77 114T618.5-110Q553-82 479-82Zm0-357Zm121 161 42-42-130-130v-190h-60v214l148 148ZM214-867l42 42L92-667l-42-42 164-158Zm530 0 164 158-42 42-164-158 42-42ZM479.04-142Q604-142 691-229.04q87-87.05 87-212Q778-566 690.96-653q-87.05-87-212-87Q354-740 267-652.96q-87 87.05-87 212Q180-316 267.04-229q87.05 87 212 87Z"/></svg>
            <p id="Alarme" >Alarme</p>
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
