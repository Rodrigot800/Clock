import React from "react";
import { useState, useEffect } from "react";
function Timer() {
  const [tempo, setTempo] = useState(0); // Definindo 60 segundos de exemplo
  const [ativo, setAtivo] = useState(false);
  const [horaInput, SetHoraInput] = useState(0);
  const [minInput, SetMinInput] = useState(0);
  const [segInput, SetsegInput] = useState(0);

  const iniciarTempo = () => {
    var somaSeg = segInput + minInput * 60 + horaInput * 3600;
    if (somaSeg == 0) {
      alert("Valor inválido");
      return false;
    } else {
      setTempo(somaSeg);
      setAtivo(true);
    }
  };

  useEffect(() => {
    let timer;
    if (ativo && tempo > 0) {
      timer = setInterval(() => {
        setTempo((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempo === 0 && ativo) {
      setAtivo(false);
      alert("Temporizador terminou!");
    }
    return () => clearInterval(timer);
  }, [ativo, tempo]);

  const formatNum = (seg) => {
    var segundos = Math.floor(seg % 60);
    var min = Math.floor((seg % 3600) / 60);
    var hora = Math.floor(seg / 3600);

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hora)}:${formatNumber(min)}:${formatNumber(
      segundos
    )}`;
  };
  const [estadoTela, SetEstadoTela] = useState("Digitar");
  const [estadoBotao, setEstadoBotao] = useState("ativo");

  const Inicio = () => {
    if (iniciarTempo() == false) {
      return;
    } else {
      iniciarTempo();
      SetEstadoTela("ativo");
    }
  };
  const Resetar = () => {
    setAtivo(false);
    const zerarTempo = () => {
      setTempo(0);
    };
    zerarTempo();
    SetEstadoTela("Digitar");
  };
  const Pausar = () => {
    setAtivo(false);
    setEstadoBotao("stop");
  };
  const Continuar = () => {
    setAtivo(true);
    setEstadoBotao("ativo");
  };

  return (
    <div id="cro">
      {estadoTela === "Digitar" && (
        <>
          <div className="alinhamento">
            {" "}
            <h1>
              Hora :
              <input
                className="InputNumbertimer"
                type="number"
                value={horaInput}
                min={0}
                max={59}
                onChange={(e) => SetHoraInput(Number(e.target.value))}
              />
            </h1>
            <h1>
              Min :
              <input
                className="InputNumbertimer"
                type="number"
                onChange={(e) => SetMinInput(Number(e.target.value))}
                value={minInput}
                min={0}
                max={59}
              />
            </h1>
            <h1>
            Seg :
            <input
              className="InputNumbertimer"
              type="number"
              value={segInput}
              onChange={(e) => SetsegInput(Number(e.target.value))}
            />
           </h1>
          </div>
          <button onClick={Inicio} id="start-btn">Iniciar</button>
        </>
      )}
      {estadoTela === "ativo" && (
        <>
          <h1 id="time">{formatNum(tempo)}</h1>
          <div className="alinhamento">
            {estadoBotao === "ativo" && (
              <>
                <button  id="stop-btn" onClick={Pausar}>Pausar</button>
              </>
            )}
            {estadoBotao === "stop" && (
              <>
                <button id="start-btn" onClick={Continuar}>continuar</button>
              </>
            )}
            <button  id="reset-btn" onClick={Resetar}>Resetar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
