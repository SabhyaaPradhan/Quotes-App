import React, { useState } from "react"

const App = () => {
  const quotes = [
    'A rose by any other name would smell as sweet.',
    'All that glitters is not gold',
    'All the worlds a stage, and all the men and wmen merely players.'
  ]

  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4})
  const [selected, setSelected] = useState(0)
  const [quoteoftheday, setQuoteOfTheDay] =useState(0)

  const Vote= () => {
  const copy = {...points}
  copy[selected] += 1
  setPoints(copy)

  if (copy[selected] > points[quoteoftheday]){
    setQuoteOfTheDay(selected)
  }
}

  const Next = () =>{
    setSelected(preSelected => preSelected+1)
  }

  return (
    <div>
      <h1>Quote of the Day</h1>
      <p>{quotes[quoteoftheday]}</p>
      <p>has {points[selected]} votes</p>
      <h1>Quotes</h1>
      <p>{quotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={Next} disabled={selected == 2}>Next</button>
      <button onClick={Vote}>Vote</button>
    </div>
  )
}
export default App
