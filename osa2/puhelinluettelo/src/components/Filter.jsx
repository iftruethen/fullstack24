const Filter = (props) => {
    const searchWord = props.searchWord
    const handleSearchWordChange = props.handleSearchWordChange
    
    return (
        <>
            filter shown with<input value={searchWord} onChange={handleSearchWordChange} />
        </>
    )
}

export default Filter