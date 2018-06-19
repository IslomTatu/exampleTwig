import React from 'react'
import styled from 'styled-components'


const Input1 = styled('input')`
  
  border: 1px solid grey;
  width: 150px;
  padding: 2px 10px;
  margin-left: 10px;
  position: relative;
  outline: 0;
  border-radius: 10px;
`

const style = {
    // border: '1px solid yellow',
    display: 'inline-block',
    marginRight: '10px'
}
const Input = ( {type, name, value} ) => (
    <div style={style}>
        <Input1 type={type} name={name}  />
    </div>
)

export default Input