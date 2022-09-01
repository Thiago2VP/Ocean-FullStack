import './Jogo.css';
import nuvens from "../../assets/clouds.png";
import marioLive from "../../assets/mario.gif";
import gameOver from "../../assets/game-over.png";
import pipe from "../../assets/pipe.png";
import { useEffect, useRef, useState } from "react";

function Jogo(props) {

  const [estaPulando, setEstaPulando] = useState(false);
  const [estaMorto, setEstaMorto] = useState(false);
  const [pontos, setPontos] = useState(false);

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

  useEffect( function () {
    //Efeito, pode ser com return

    //exibicao etmporaria se mario morreu ou nao
    const interval = setInterval(function () {
      const estaNoCano = marioEstaNoCano();

      //Se o mario nao estiver no cano
      if(!estaNoCano || estaMorto) {
        return;
      }

      //esta no cano
      setEstaMorto(true);
      props.onMorrer();

    }, 100);

    return () => clearInterval(interval);
  }, 
  [estaMorto, props]
  );

  // Salvar pontuacao
  useEffect(function () {
    const interval = setInterval(function () {

      if(estaMorto) {
        return;
      }
  
      setPontos(pontos +1);
      props.onPontos(pontos +1);
  
    }, 500);

    return () => clearInterval(interval);

  }, [estaMorto, pontos, props]);

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

  //Mudar imagem do mario se necessario
  const marioImage = estaMorto ? gameOver : marioLive;

  //Parar animacao
  const pararAnimacao = estaMorto ? "parar-animacao" : "";

  return (
    <div className="Jogo">
      <div className="pontos">Pontos: {pontos}</div>

      <img className={"nuvens " + pararAnimacao} alt="Nuvens" src={nuvens} />
      <img ref={marioRef} className={marioClassName} alt="Mario Bros Correndo" src={marioImage} />
      <img ref={canoRef} className={"cano " + pararAnimacao} alt="Cano verde do Mario" src={pipe} />
      <div className="chao" title="Chão"></div>
    </div>
  );
}

export default Jogo;
