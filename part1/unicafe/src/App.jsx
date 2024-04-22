import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text} </button>
}

const Statistics = ({good, neutral, bad}) => {
  return <div>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {good+neutral+bad}</div>
    <div>average {(good+neutral+bad)/3}</div>
    <div>positive {(good/3)*100} %</div>
  </div>
}



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoog = () => {
    console.log("click handleGoog");
    setGood(good+1)
  }

  const handlNeutral = () => {
    console.log("click handlNeutral");
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    console.log("click handleBad");
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button  handleClick={handleGoog} text={"good"} />
      <Button  handleClick={handlNeutral} text={"neutral"} />
      <Button  handleClick={handleBad} text={"bad"} />

      <h1>statistics</h1>
      <Statistics  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
