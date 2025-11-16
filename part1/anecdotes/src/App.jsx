import { useState } from 'react'

function Button(props) {
  return (
    <button onClick={props.action}>{props.title}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  let indHighestRatedQuote = votes.indexOf(Math.max(...votes));

  const nextAnecdote = () => {
    setSelected((selected + 1) % anecdotes.length);
  }

  const voteForAnecdote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };


  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <Button action={voteForAnecdote} title='vote'></Button>
      <Button action={nextAnecdote} title='next anecdote'></Button>
      <br />
      <h2>Anecdote with most votes</h2>
      <br />
      <p>{anecdotes[indHighestRatedQuote]}</p>
    </div>
  )
}

export default App