const Filter = (props) => {
    const searchWord = props.searchWord
    const changeHandler = props.searchWordChange

    return (
        <>
            <form >
                find countries<input value={searchWord} onChange={changeHandler}></input>
            </form>
        </>
    )
}

export default Filter