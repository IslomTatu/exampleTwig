import React from 'react'
import IoPerson from 'react-icons/lib/io/person'

const listItem = {
    // border: "1px solid black",
    display: 'inline-block',
    marginRight: '10px',
    paddingLeft: '50px',
    borderLeft: '1px solid grey',
    paddingTop: '14px',
    paddingBottom: '14px'
}

const Profile = ( {onClick} ) => (
    <div style={listItem} onClick={onClick}>
        <IoPerson size={25} color={"red"} />
    </div>
)

export default Profile