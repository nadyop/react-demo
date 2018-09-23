import React from 'react'

const SearchBar = props => {
    return(
        <div>
            <center>
                <input type="text"
                       style={styles.inputSearch}
                       placeholder="search by text"
                       onChange={ props.onChangeSearch }/>
            </center>
        </div>
    )
}

const styles = {
    inputSearch: {
        width: 1000,
        height: 30
    }
}

export default SearchBar
