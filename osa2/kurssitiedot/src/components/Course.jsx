const Header = ({ course }) => <h2>{course}</h2>
const Total = ({ sum }) => <p><b>total of exercises {sum}</b></p>

const Course = (props) => {
    return (
      <>
        <Header course={props.course.name} />
        {props.course.parts.map(alkio => <p key={alkio.id}>{alkio.name} {alkio.exercises}</p>)}
        <Total sum={props.course.parts.reduce((sum, part) => sum+part.exercises ,0)} />
      </>
    )
  }

export default Course