import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text} </button>
}

const StatisticLine = ({text, value}) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({good, neutral, bad}) => {
  
  if(good>0 || neutral>0 || bad>0) {
    return <table><tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good+neutral+bad} />
      <StatisticLine text="average" value={(good+neutral+bad)/3} />
      <StatisticLine text="positive" value={((good/3)*100 ) + " %"} />    
      </tbody></table>
  }
  
  return <div>No feedback</div>
  
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
