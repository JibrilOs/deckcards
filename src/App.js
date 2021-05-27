import logo from './logo.svg';
import './App.css';

function App() {
//data structures
  const values = Array.from({ length: 52 }, (_, i) => i + 1);
  const suits = ["HEARTS", "DIAMONDS","CLUBS", "SPADES", ];
  
  
  //creates deck
  function createDeck() {
    return values.reduce(
      (c, v) => [...c, ...suits.map((s) => ({ value: v, suit: s }))],
      []
    );
  }

  return <div className="App">{console.log(createDeck())}</div>;
}

export default App;
