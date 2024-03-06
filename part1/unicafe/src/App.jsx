import { useState } from 'react'


const Header = ({text}) => <div><h1>{text}</h1></div>


const Button = (props) => {
  const onClick = props.onClick
  const text = props.text

  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  // Calculate statistics
  const total = good + neutral + bad
  const average = (good + 0*neutral + (-1)*bad) / total
  const positive = good/total * 100

  // If total feedback given is zero
  if (total === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive+"%"} />
          </tbody>
        </table>
      </div>
    )
  }
}


const StatisticLine = (props) => {
  const text = props.text
  const value = props.value

  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handler functions for buttons
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="Give feedback!" />

      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <Header text="Statistics:" />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App