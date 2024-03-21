import "./App.css";
import React, { useState } from "react";
import Head from "./componets/head/index";
import Cronometro from "./componets/ferramentas/Cronometro";
import Timer from "./componets/ferramentas/timer";
import Alarme from "./componets/ferramentas/alarme";

function App() {
  var f 
  const [trocarFerramenta, setTrocar] = useState(<Cronometro f={f} />);

  function CapturarClick(event) {
    var element = event.target.id;
    console.log(element);
    if (element == "Cronometro") {
      f = 1;
      setTrocar(<Cronometro f={f} />);
    }
    if (element == "Temporizador") {
      f = 1;

      setTrocar(<Timer />);
    }
    if (element == "Alarme") {
      setTrocar(<Alarme />);
    }
  }

  return (
    <div>
      <Head CapturarClick={CapturarClick} /> {trocarFerramenta}
    </div>
  );
}

export default App;
