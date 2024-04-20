const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  const Header = (props) => {
    return (<div><h1>{props.title}</h1></div>)
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.course} {props.score}
      </p>
    )
  }

  const Content = (props) => {
    return (<div>
      
      <Part course={props.part1.name}  score={props.part1.exercises} />
      <Part course={props.part2.name}  score={props.part2.exercises} />
      <Part course={props.part3.name}  score={props.part3.exercises} />     
    </div>)
  }


  const Total = (props) => {
    return (
    <div>
        <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </div>)
  }


  return (
    <div>
      <Header title={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App
