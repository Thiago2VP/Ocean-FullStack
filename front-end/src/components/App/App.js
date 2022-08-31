import { useState } from 'react';
import HightScore from '../HighScore/HightScore';
import Jogo from '../Jogo/Jogo';
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);

  function onMorrer() {
    setGameOver(true);
  }

  return (
    <div className="App">
      <Jogo onMorrer={onMorrer} />
      {gameOver && <HightScore />}
    </div>
  );
}

export default App;
