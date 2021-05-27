import "./App.css";

function App() {
  //data structures
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
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
