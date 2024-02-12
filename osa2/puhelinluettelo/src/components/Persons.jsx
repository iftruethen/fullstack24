const Persons = (props) => {
  const namesToShow = props.namesToShow
  const handlePersonRemove = props.handlePersonRemove
  return (
    <>
      {namesToShow.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={() => handlePersonRemove(person.id)}>delete</button></p>)}
    </>
  )
}

export default Persons