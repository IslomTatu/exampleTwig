import React from 'react'
import styled from 'styled-components'

const But = styled('button')`
  padding: 3px 10px;
  width: 100px;
  border-radius: 5%;
  box-shadow: none;
  border: none;
  cursor: pointer;
  background-color: #dee1e3;
  float: right;
`

const Button = ( {type, value} ) => (
    <But type={type}>{value}</But>
)

export default Button