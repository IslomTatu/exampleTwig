import React from 'react'
import styled from 'styled-components'

const But = styled('button')`
  padding: 3px 10px;
  width: 100px;
  box-shadow: none;
  border: none;
  cursor: pointer;
  background-color: ${props => props.color? props.color : '#dee1e3'};
  
  height: 30px;
  border-radius: 10px;
  color: white;
  font-size: 0.9em;
`

const Button = ( {type, value, color} ) => (
    <But type={type} color={color}>{value}</But>
)

export default Button