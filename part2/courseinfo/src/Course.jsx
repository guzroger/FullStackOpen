const Part = (props) => {
  return (
    <p>{props.course} {props.score}</p>
  )
}

const Content = ({parts}) => {
  return (<div>
    {parts.map(part => <Part  key={part.id} course={part.name}  score={part.exercises}  />) }   
  </div>)
}

const Header = ({title}) => {
  return (<h1>{title}</h1>)
}
const Total = ({parts}) => {
  const total = parts.reduce( (acumulador,  part) => { 
    const exercise = part.exercises 
    return acumulador + part.exercises }, 0)
  return (
  <div>
      <p><b>Total of {total} exercises</b></p>
  </div>)
}
const Course = ({course}) => {
 return ( <div>
          <Header title={course.name} />
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
          </div>
  )
}


export default Course