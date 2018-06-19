import React from 'react'
import MdSearch from 'react-icons/lib/md/search'


const listItem = {
    // border: "1px solid black",
    display: 'inline-block',
    marginRight: '10px',
}

const Search = ( {onClick} ) => (
    <div style={listItem} onClick={onClick}>
        <MdSearch size={25} color={"grey"} />
    </div>
)

export default Search