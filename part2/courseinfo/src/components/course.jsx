
const Header = ({name}) => {
  return <h2>{name}</h2>
}
const Content = ({parts}) => {

  const amountOfExercises = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <>
    {parts.map(part =>
      <p key={part.id}>{part.name} {part.exercises}</p>
    )}
    <p><b>total {amountOfExercises} of exercises</b></p>
    </>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header name={course.name}></Header>
      <Content parts={course.parts} ></Content> 
    </div>
  )

}

export default Course 