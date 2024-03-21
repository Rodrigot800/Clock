import React from "react";


function Head(props) {
  return (
    <div id="head">
      <div id="menu">
        <div className="alinhamento-menu">
          <button className="teste" id="Cronometro"  onClick={props.CapturarClick}>
            <img id="Cronometro"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Cronometro">Cronometro</p>
          </button>

          <button  id="Alarme" className="teste" onClick={props.CapturarClick}>
            <img id="Alarme"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Alarme" >Alarme</p>
          </button>
          <button id="Temporizador" className="teste" onClick={props.CapturarClick}>
            <img id="Temporizador"
              className="img-menu"
              src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
            />
            <p id="Temporizador" >Temporizador</p>
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Head;
