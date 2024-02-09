import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhonenumber, setNewPhonenumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = persons.find(alkio => alkio.name === newName)
    if (result !== undefined) {
      alert(`${newName} is already added to phonebook`)
      return null
    }
    const personToAdd = {name: newName, phonenumber: newPhonenumber}
    setPersons(persons.concat(personToAdd))
    setNewName('')
    setNewPhonenumber('')
  }
  const handleNoteChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewPhonenumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} >
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={newPhonenumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.phonenumber}</p>)}
    </div>
  )

}

export default App