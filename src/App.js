import logo from './logo.svg';
import './App.css';

function App() {
  //data structures
  const values = Array.from({ length: 52 }, (_, i) => i + 1);
  const suits = ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"];

  //creates deck
  function createDeck() {
    return values.reduce(
      (c, v) => [...c, ...suits.map((s) => ({ value: v, suit: s }))],
      []
    );
  }

  //prints content of deckcard
  function printContent() {
     const val  =  createDeck();;
     return val.map((c,id)  =>  {
      
     return <ul key={id}>
     
       <li>
         {c.value}
         {c.suit}
       </li>
   
     </ul>;
    });;
  }

  return <div className="App">{printContent()}</div>;
}

export default App;
