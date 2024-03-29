import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from "./services/persons"
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('positive')

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = persons.find(alkio => alkio.name === newName)
    if (result !== undefined) {  // program forks here if person already exists
      if (newNumber !== result.number) {  // if existing name with new number is given
        // verifies from the user if number is to be updated:
        if (window.confirm(`Person ${result.name} is already added to phonebook, replace the old number with the new one?`)) {
          personService
            .updateNumber(result, newNumber)
            .then(response => {
              setPersons(persons
                .filter(person => person.id !== result.id)
                .concat(response.data))
              setNotification(`Updated ${response.data.name}'s number`)
              setTimeout(() => {
                setNotification(null)
              }, 5000)
              setNotificationType('positive')
            })
            .catch(response => {
              setNotificationType('negative')
              setNotification(`Person ${result.name} already removed from the server`)
              setTimeout(() => {
                setNotification(null)
              }, 5000)
              setPersons(persons.filter(person => person.id !== result.id))
            })
          // to break the eventhandler and to not add the person again:
          return null
        }
        // if user denies updating the number:
        return null
      }
      alert(`${newName} is already added to phonebook`)
      return null
    }
    // perform post request after validations passed
    const personToAdd = {name: newName, number: newNumber}
    personService
      .postPerson(personToAdd)
      .then(response => {
        setPersons(persons.concat(response))
        setNotification(`Added ${response.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        setNotificationType('negative')
        setNotification(error.response.data)
        setTimeout(() => {
          setNotification(null)
          setNotificationType('positive')
        }, 5000)
      })
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearchWordChange = (event) => setSearchWord(event.target.value)
  const namesToShow = searchWord ==='' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchWord.toLowerCase()))

  useEffect(() => {
    personService
      .fetchPersons()
        .then(response => setPersons(response))
  },[])

  const handlePersonRemove = (id) => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToRemove.name}?`)) {
      personService.removePerson(personToRemove)
      setNotification(`Removed ${personToRemove.name}`)
      setTimeout(() => setNotification(null), 5000)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} notificationType={notificationType} />
      <Filter searchWord={searchWord} handleSearchWordChange={handleSearchWordChange} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow} handlePersonRemove={handlePersonRemove} />
    </div>
  )

}

export default App