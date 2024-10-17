import React, { useState, useEffect } from "react";

// Componente Cronômetro
function Alarme() {
  function go() {
    var circle = document.querySelector("#proc");
    var n = Number(document.querySelector("#pro").value) ;
    document.querySelector(".number").innerHTML = n + '%'
    circle.style.strokeDashoffset = (440 - (440 * n) / 100)
  }
  return (
    <div>
      <div className="btnen">
        <input id="pro" type="number" />
        <button onClick={go}>enviar</button>
      </div>
      <div className="box teste">
        <div className="box-circle">
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle id="proc" cx={70} cy={70} r={70}></circle>
          </svg>
          <div className="number">
            <h2>70%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alarme;
