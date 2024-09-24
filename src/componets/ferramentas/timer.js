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
    if (somaSeg == 0 || segInput > 59 || minInput > 59 || horaInput > 72) {
      return false;
    } else {
      setTempo(somaSeg);
      setAtivo(true);
    }
  };
  const Alertar = () => {
    setTempo(0);
    setAtivo(false);
    setTimeout(() => {
      alert("Tempo acabou!!!");
    }, 1);

    setEstadoBotao("");
  };

  useEffect(() => {
    let timer;
    if (ativo && tempo > 0) {
      timer = setInterval(() => {
        setTempo((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempo === 0 && ativo) {
      Alertar();
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
  const [estadoBotao, setEstadoBotao] = useState("valorInvalido");

  const Inicio = () => {
    if (iniciarTempo() == false) {
      return;
    } else {
      iniciarTempo();
      SetEstadoTela("ativo");
      setEstadoBotao("ativo");
    }
  };
  const Resetar = () => {
    setAtivo(false);
    const zerarTempo = () => {
      setTempo(0);
    };
    zerarTempo();
    SetEstadoTela("Digitar");
    SetsegInput(0);
    SetMinInput(0);
    SetHoraInput(0);
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
          <div className="alinhamento inputTimerDiv">
            {" "}
            <input
              className="InputNumbertimer"
              type="number"
              min={0}
              max={72}
              onChange={(e) => SetHoraInput(Number(e.target.value))}
              placeholder="H"
            />
            <input
              className="InputNumbertimer"
              type="number"
              onChange={(e) => SetMinInput(Number(e.target.value))}
              placeholder="M"
              min={0}
              max={59}
            />
            <input
              className="InputNumbertimer"
              type="number"
              min={0}
              max={59}
              onChange={(e) => SetsegInput(Number(e.target.value))}
              placeholder="S"
            />
          </div>

          <button
            onClick={Inicio}
            id="start-btn"
            style={{
              background:
                (minInput > 0 && minInput < 59) ||
                (segInput > 0 && segInput < 59) ||
                (horaInput > 0 && horaInput < 72)
                  ? "#00b34c"
                  : "gray",
            }}
          >
            Iniciar
          </button>
        </>
      )}
      {estadoTela === "ativo" && (
        <>
          <h1 id="time">{formatNum(tempo)}</h1>
          <div className="alinhamento">
            {estadoBotao === "ativo" && (
              <>
                <button id="stop-btn" onClick={Pausar}>
                  Pausar
                </button>
              </>
            )}
            {estadoBotao === "stop" && (
              <>
                <button id="start-btn" onClick={Continuar}>
                  continuar
                </button>
              </>
            )}
            <button id="reset-btn" onClick={Resetar}>
              Resetar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
