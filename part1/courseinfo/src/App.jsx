const App = () => {
  const course = 'Half Stack application development'

  const exercises = [
    { score: 10, part: 'Fundamentals of React'   },
    { score: 7, part: 'Using props to pass data'   },
    { score: 14, part: 'State of a component'   },
  ]


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
      
      <Part course={props.exercises[0].part}  score={props.exercises[0].score} />
      <Part course={props.exercises[1].part}  score={props.exercises[1].score} />
      <Part course={props.exercises[2].part}  score={props.exercises[2].score} />      
    </div>)
  }


  const Total = (props) => {
    return (
    <div>
        <p>Number of exercises {props.exercises[0].score + props.exercises[1].score + props.exercises[2].score}</p>
    </div>)
  }


  return (
    <div>
      <Header title={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises}/>
    </div>
  )
}

export default App
