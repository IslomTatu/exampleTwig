import React from 'react'
import styled from 'styled-components'


const Input = styled('input')`
  width: 300px;
  display: ${props => props.active ? 'block' : 'none'};
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
        <Input type='text' active={search}/>
    </div>
)

export default SearchInput