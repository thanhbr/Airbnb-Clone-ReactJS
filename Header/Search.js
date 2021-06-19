import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className="header_center">
            <input type="text" placeholder="Start your search"/>
            <SearchIcon />
        </div>
    )
}

export default Search
