import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      alert(`${newName} is already ahandleSearchWordChangedded to phonebook`)
      return null
    }
    const personToAdd = {name: newName, phonenumber: newPhonenumber}
    setPersons(persons.concat(personToAdd))
    setNewName('')
    setNewPhonenumber('')
  }
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewPhonenumber(event.target.value)
  const handleSearchWordChange = (event) => setSearchWord(event.target.value)
  const namesToShow = searchWord ==='' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchWord={searchWord} handleSearchWordChange={handleSearchWordChange} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange}
      newPhonenumber={newPhonenumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow} />
    </div>
  )

}

export default App