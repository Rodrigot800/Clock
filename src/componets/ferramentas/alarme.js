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
    <h1>Em Construção</h1>
  );
}

export default Alarme;
