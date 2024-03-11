import React from "react";

function Head() {
  return (
    <div id="head">
      <div id="menu">
        <button className="teste">
          <img
            className="img-menu"
            src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
          />
          <p>cronometro</p>
        </button>

        <div class="alinhamento-menu">
            <button className="teste">
              <img
                className="img-menu"
                src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
              />
              <p>alarme</p>
            </button>
            <button className="teste">
              <img
                className="img-menu"
                src="https://toppng.com/uploads/preview/browser-history-clock-icon-vector-white-115629140725m3lqcdics.png"
              />
              <p>temporizado</p>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
