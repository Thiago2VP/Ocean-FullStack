import './Jogo.css';
import clouds from "../../assets/clouds.png";
import marioLive from "../../assets/mario.gif";
import marioDead from "../../assets/game-over.png";
import pipe from "../../assets/pipe.png";

function Jogo() {
  return (
    <div className="Jogo">
        <div className="acima-do-chao">
            <img className="nuvens" alt="Nuvens" src={clouds} />
            <img className="mario" alt="Mario Bros Correndo" src={marioLive} />
            <img className="morte" alt="mario Bros Derrotado" src={marioDead} />
            <img className="cano" alt="Cano verde do Mario" src={pipe} />
        </div>
        <div className="chao"></div>
    </div>
  );
}

export default Jogo;
