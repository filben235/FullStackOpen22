import React, { Fragment } from 'react'

const  Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>)
}

const Content = (props) => {
  return (
    <React.Fragment>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </React.Fragment>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
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
    <React.Fragment>
      <Header {...{course}}/>
      <Content {...{part1, exercises1, part2, exercises2, part3, exercises3 }}/>
      <Total {...{exercises1, exercises2, exercises3}}/>
    </React.Fragment>
  )
}

export default App