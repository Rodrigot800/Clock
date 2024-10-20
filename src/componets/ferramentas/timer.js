import React from "react";
import { useState, useEffect } from "react";
import Audiomp3 from "../../som/level-up-191997.mp3";
function Timer() {
  const [tempo, setTempo] = useState(0);
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
    const som = new Audio(Audiomp3);
    som.play();
    setTimeout(() => {
      alert("Tempo acabou!!!");
    }, 500);
    setEstadoBotao("repetir");
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
  const Repetir = () => {
    iniciarTempo();
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e8eaed"
            >
              <path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z" />
            </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#e8eaed"
                  >
                    <path d="M523.33-200v-560H760v560H523.33ZM200-200v-560h236.67v560H200Zm390-66.67h103.33v-426.66H590v426.66Zm-323.33 0H370v-426.66H266.67v426.66Zm0-426.66v426.66-426.66Zm323.33 0v426.66-426.66Z" />
                  </svg>
                </button>
              </>
            )}
            {estadoBotao === "stop" && (
              <>
                <button id="start-btn" onClick={Continuar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#e8eaed"
                  >
                    <path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z" />
                  </svg>
                </button>
              </>
            )}
            {estadoBotao === "repetir" && (
              <>
                <button id="start-btn" onClick={Repetir}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#e8eaed"
                  >
                    <path d="M480-160q-133.33 0-226.67-93.33Q160-346.67 160-480q0-133.33 93.33-226.67Q346.67-800 480-800q79.67 0 143.33 32.5 63.67 32.5 110 90.17V-800H800v262.67H537.33V-604h168q-36-58.67-93.83-94T480-733.33q-106 0-179.67 73.66Q226.67-586 226.67-480q0 106 73.66 179.67Q374-226.67 480-226.67q81 0 147.67-46.33 66.66-46.33 93-122.33H790Q761.33-290 675.33-225q-86 65-195.33 65Z" />
                  </svg>
                </button>
              </>
            )}
            <button id="reset-btn" onClick={Resetar}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#e8eaed"
                >
                  <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z" />
                </svg>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
