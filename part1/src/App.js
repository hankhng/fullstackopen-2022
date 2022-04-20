const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
};

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Part part1={part1} exercises1={exercises1}/>
      <Part part2={part2} exercises2={exercises2}/>
      <Part part3={part3} exercises3={exercises3}/>
    </>
  )
};

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>{props.total}</p>
    </>
  )
};

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
