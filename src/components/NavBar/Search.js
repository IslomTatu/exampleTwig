import React from 'react'
import MdSearch from 'react-icons/lib/md/search'
import MdClose from 'react-icons/lib/md/close'


const listItem = {
    // border: "1px solid black",
    display: 'inline-block',
    paddingRight: '50px'
}

const Search = ( {onClick, type} ) => (
    <div style={listItem} onClick={onClick}>
        {type?<MdClose size={27} color={"grey"} />
            :<MdSearch size={27} color={"grey"} />}

    </div>
)

export default Search