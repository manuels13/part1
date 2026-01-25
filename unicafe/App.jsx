import { useState } from 'react'


const Button = (props) =>{
  return(
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const Statistics = (props) => {
  if (props.total === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.total} />
          <StatisticLine
            text="average"
            value={(props.good - props.bad) / props.total}
          />
          <StatisticLine
            text="positive"
            value={(props.good / props.total) * 100 + " %"}
          />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalclicks = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick ={() => setGood(good+1)} text = "good" />
      <Button handleClick ={() => setNeutral(neutral+1)} text = "Neutral" />
      <Button handleClick ={() => setBad(bad+1)} text = "Bad" />
      <Statistics good={good} neutral ={neutral} bad={bad} total = {totalclicks} />
    </div>
  )
}

export default App