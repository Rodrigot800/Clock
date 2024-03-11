import React,  from "react";

function Body() {
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
}

export default Body;
