import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456' },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523' },
    { name: 'Dan Abramov', phonenumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhonenumber, setNewPhonenumber] = useState('')
  const [searchWord, setSearchWord] = useState('')

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
  const handleSearchWordChange = (event) => {
    setSearchWord(event.target.value)
  }
  const namesToShow = searchWord==='' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with<input value={searchWord} onChange={handleSearchWordChange} />
      <h2>add a new</h2>
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
      {namesToShow.map(person => <p key={person.name}>{person.name} {person.phonenumber}</p>)}
    </div>
  )

}

export default App