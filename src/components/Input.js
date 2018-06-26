import React from 'react'
import styled from 'styled-components'


const Input1 = styled('input')`
  
  border: 1px solid #afafaf;
  width: 100% !important;
  padding: 7px 10px;
  position: relative;
  outline: 0;
  border-radius: 50px;
  
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  }
`

const style = {
    // border: '1px solid yellow',
    display: 'inline-block',
    width: "100%"
}

const Input = ( {type, name, value, onChange} ) => (
    <div style={style}>
        <Input1 type={type} name={name} onChange={onChange}  />
    </div>
)

export default Input