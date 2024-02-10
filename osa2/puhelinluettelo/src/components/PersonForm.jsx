const PersonForm = (props) => {
    const handleSubmit = props.handleSubmit
    const newName = props.newName
    const handleNameChange = props.handleNameChange
    const newPhonenumber = props.newPhonenumber
    const handleNumberChange = props.handleNumberChange

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newPhonenumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm