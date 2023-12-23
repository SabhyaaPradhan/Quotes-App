import React, { useState } from "react";

const App = () => {
  const quotes = [
    'A rose by any other name would smell as sweet.',
    'All that glitters is not gold',
    'All the worlds a stage, and all the men and women merely players.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const highest = Math.max(...points)
  const highestldx = points.indexOf(highest)

  const nextQuote = () => {
    if (selected === quotes.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <div>
      <h1>Quote of the Day</h1>
      <p>{quotes[highestldx]}</p>
      <p>has {points[highestldx]} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next Quote</button>
      <h1>Quotes</h1>
      <p>{quotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next Quote</button>
    </div>
  )
}

export default App;
