import React from 'react'

const SearchBar = props => {
    return(
        <div>
            <input type="text"
                   placeholder="search by text"
                   onChange={ props.onChangeSearch }
                   value={ props.search }/>
        </div>
    )
}

export default SearchBar
