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

  const Content = (props) => {
    return (<div>
      
      
      <p>
        {props.exercises[0].part} {props.exercises[0].score}
      </p>
      <p>
        {props.exercises[1].part} {props.exercises[1].score}
      </p>
      <p>
        {props.exercises[2].part} {props.exercises[2].score}
      </p>
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
