import './Jogo.css';
import nuvens from "../../assets/clouds.png";
import marioLive from "../../assets/mario.gif";
import marioDead from "../../assets/game-over.png";
import pipe from "../../assets/pipe.png";
import { useRef, useState } from "react";

function Jogo() {

  const [estaPulando, setEstaPulando] = useState(false);

  const marioRef = useRef();
  const canoRef = useRef();

  function marioEstaNoCano() {
    //Acessamos as referencias do mario e do cano
    const mario = marioRef.current;
    const cano = canoRef.current;

    //Ver se mario e cano existem
    if (!mario || !cano) {
      return;
    }

    //Retorna o valor logico da avaliacao
    return cano.offsetLeft > mario.offsetLeft && cano.offsetLeft < mario.offsetLeft + mario.offsetWidth && mario.offsetTop + mario.offsetHeight > cano.offsetTop;

  }

  //exibicao etmporaria se mario morreu ou nao
  setInterval(function () {
    const valor = marioEstaNoCano();

    console.log("Mario esta no cano?", valor);
  }, 100);

  document.onkeydown = function () {
    setEstaPulando(true);

    setTimeout(function () {
      setEstaPulando(false);
    }, 1000);
  }

  let marioClassName = "mario";

  if (estaPulando) {
    marioClassName = "mario mario-pulo";
  }

  return (
    <div className="Jogo">
        <img className="nuvens" alt="Nuvens" src={nuvens} />
        <img ref={marioRef} className={marioClassName} alt="Mario Bros Correndo" src={marioLive} />
        <img className="morte" alt="mario Bros Derrotado" src={marioDead} />
        <img ref={canoRef} className="cano" alt="Cano verde do Mario" src={pipe} />
        <div className="chao" title="Chão"></div>
    </div>
  );
}

export default Jogo;
