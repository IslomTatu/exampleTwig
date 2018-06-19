import React from 'react'
import TiUser from 'react-icons/lib/ti/user'

const listItem = {
    // border: "1px solid black",
    display: 'inline-block',
    marginRight: '10px'
}

const Profile = ( {onClick} ) => (
    <div style={listItem} onClick={onClick}>
        <TiUser size={25} color={"grey"} />
    </div>
)

export default Profile