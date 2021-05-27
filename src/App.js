import logo from './logo.svg';
import './App.css';

function App() {
  //data structures
  const values = Array.from({ length: 52 }, (_, i) => i + 1);
  const suits = ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"];
  const PictureCard = { Jack: 11, Queen: 12, King: 13, Ace: 1, Deuces: 2 };
  const clonedeck = [...createDeck()];

  //creates deck
  function createDeck() {
    return values.reduce(
      (c, v) => [...c, ...suits.map((s) => ({ value: v, suit: s }))],
      []
    );
  }

  //prints content of deckcard
  function printContent() {
    const val = createDeck();
    return val.map((c, id) => {
      return (
        <ul key={id}>
          <li>
            {`${c.value} of
           ${c.suit}`}
          </li>
        </ul>
      );
    });
  }

  function shuffleDeck(deck) {
    // Shuffle logic. Make sure you aren't mutating deck.

    console.log(clonedeck);
  }

  return (
    <div className="App">
      {printContent()}
      {shuffleDeck()}
    </div>
  );
}

export default App;
