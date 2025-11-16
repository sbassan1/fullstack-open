const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return <h1>{props.title}</h1>
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    const parts = Object.values(props.partInfo)

    return (
      <div>
        {parts.map((part) => (
          <Part name={part.name} exercises={part.exercises} ></Part>
        ))}
      </div>
    )
  }

  const Total = (props) => {
    const parts = Object.values(props.partInfo)
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p>Number of exercises {total}</p>
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content partInfo={course.parts} />
      <Total partInfo={course.parts} />
    </div>
  )
}

export default App
