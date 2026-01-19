const Header =({coursename}) =>{
  return(
    <div>
    <h1> {coursename} </h1>
    </div>
  )
}
const Content = ({part1, exercises1,part2,exercises2,part3,exercises3}) => {
  return (
    <div>
    <Part name = {part1} number = {exercises1} />
    <Part name = {part2} number = {exercises2} />
    <Part name = {part3} number = {exercises3} />
    </div>
  

  )
}
const Part = ({name, number}) => {
  return (
    <p>
      {name} {number}
    </p>
  )
}
const Total = ({ex1,ex2,ex3}) => {
  return(
    <p>Number of exercises {ex1 +ex2 +ex3} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header coursename = {course} />
      <Content part1= {part1} exercises1 ={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total ex1= {exercises1} ex2 = {exercises2} ex3={exercises3} />
    </div>
  )
}

export default App