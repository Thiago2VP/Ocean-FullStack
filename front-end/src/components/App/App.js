import { useState } from 'react';
import HightScore from '../HighScore/HightScore';
import Jogo from '../Jogo/Jogo';
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [pontos, setPontos] = useState(0);

  function onMorrer() {
    setGameOver(true);
  }

  function onPontos(pontosAoMorrer) {
    setPontos(pontosAoMorrer);
  }

  return (
    <div className="App">
      <Jogo onMorrer={onMorrer} onPontos={onPontos} />
      {gameOver && <HightScore pontos={pontos} />}
    </div>
  );
}

export default App;
