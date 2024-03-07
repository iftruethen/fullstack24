import axios from 'axios'

const baseUrl = "/api/persons"
//const baseUrl = "http://localhost:3001/persons"

const fetchPersons = () => {
    const persons = axios
        .get(baseUrl)
        .then(response => response.data)
    return persons
}

const postPerson = (person) => {
    return (
        axios
            .post(baseUrl, person)
            .then(response => response.data)
    )
}

const removePerson = (person) => {
    const personToRemove = person
    const vastaus = axios
        .delete(`${baseUrl}/${personToRemove.id}`)
}

const updateNumber = (person, newNumber) => {
    const newPerson = { ...person, number: newNumber }
    const response1 = axios
        .put(`${baseUrl}/${person.id}`, newPerson)
    return response1
}

export default {
    fetchPersons: fetchPersons,
    postPerson: postPerson,
    removePerson: removePerson,
    updateNumber: updateNumber
}