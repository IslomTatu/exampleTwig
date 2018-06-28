import React from 'react'
import styled from 'styled-components'
import { Transition } from 'semantic-ui-react'

const Input = styled('input')`
  width: 300px;
  
  padding: 2px 10px;

  box-shadow: none;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: 0;
  
  
   
  &:focus{

      box-shadow: none;
      border-radius: 10px;
      border: 1px solid grey;
  } 
  
`

const style = {
    // border: '1px solid yellow',
    display: 'inline-block',
    marginRight: '10px'
}
const SearchInput = ({search}) => (
    <div style={style}>
        <Transition visible={search} animation='slide left' duration={500}>
            <Input type='text'/>
        </Transition>
    </div>
)

export default SearchInput