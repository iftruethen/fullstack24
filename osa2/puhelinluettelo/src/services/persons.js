import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

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

export default {
    fetchPersons: fetchPersons,
    postPerson: postPerson
}