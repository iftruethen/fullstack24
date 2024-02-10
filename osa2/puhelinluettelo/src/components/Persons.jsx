const Persons = (props) => {
  const namesToShow = props.namesToShow
  return (
    <>
      {namesToShow.map(person => <p key={person.name}>{person.name} {person.phonenumber}</p>)}
    </>
  )
}

export default Persons