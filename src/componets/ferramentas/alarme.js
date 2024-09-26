import React, { useState, useEffect } from "react";

// Componente Cronômetro
function Alarme() {
  return (
    <div className=" box teste">
      <div className="box-circle">
        <svg>
          <circle cx={70} cy={70} r={70}></circle>
          <circle cx={70} cy={70} r={70}></circle>
        </svg>
        <h2>70%</h2>
      </div>
    </div>
  );
}

export default Alarme;
