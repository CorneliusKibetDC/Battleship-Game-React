// App.js
import React from 'react';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <h1>Battleship Game</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <div>
          <h3>Player's Grid</h3>
          <Board playerType="player" />
        </div>
        <div>
          <h3>Opponent's Grid</h3>
          <Board playerType="opponent" />
        </div>
      </div>
    </div>
  );
}

export default App;
