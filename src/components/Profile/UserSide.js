import React from 'react'
import styled from 'styled-components'

const Div =  styled('div')`
    background-color: white;
    text-align: center;
    padding: 5px 2px;
    margin: ${props => props.top ? "0" : "10px 0"};
    //border: 1px solid black;
    border-radius: 5px;
`

const UserSide = ( { children, top } ) => (
    <Div id="user-side" top={top}>
        {children}
    </Div>
)

export default UserSide