import { useState } from 'react'

function Button(props) {
  return(
    <button onClick={props.onClick}>{props.ratingName}</button>
  )
}

function StatisticsLine(props) {
  return(<p>{props.text} {props.value}</p>)
}

function Feedback({ onGood, onNeutral, onBad }) {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={onGood} ratingName="Good" />
      <Button onClick={onNeutral} ratingName="Neutral" />
      <Button onClick={onBad} ratingName="Bad" />
    </div>
  )
}

function Statistics(props){
  
  const scoreVotes = (props.goodVotes * 1) + (props.neutralVotes * 0) + (props.badVotes * -1);
  const allVotes = props.goodVotes + props.neutralVotes + props.badVotes;
  const averageVotes = scoreVotes / allVotes;
  const positivePercent = props.goodVotes / allVotes *100;
  
  const votes = () => {
    return(
      <>
        <StatisticsLine text="good" value={props.goodVotes} />
        <StatisticsLine text="neutral" value={props.neutralVotes} />
        <StatisticsLine text="bad" value={props.badVotes} />
        <StatisticsLine text="all" value={allVotes} />
        <StatisticsLine text="average" value={averageVotes} />
        <StatisticsLine text="positive" value={positivePercent + " %"} />
      </>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      {allVotes === 0 ? "No feedback given" : votes()}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteGood = () => setGood(good + 1)
  const voteNeutral = () => setNeutral(neutral + 1)
  const voteBad = () => setBad(bad + 1)

  return (
    <>
      <Feedback 
        onGood={voteGood} 
        onNeutral={voteNeutral} 
        onBad={voteBad} 
      />

      <Statistics 
        goodVotes={good} 
        neutralVotes={neutral} 
        badVotes={bad}
      />
    </>
  )
}


export default App