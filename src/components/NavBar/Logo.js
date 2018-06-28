import React from 'react'
import styled from 'styled-components'

import logo from './logo/logo_orange.svg'

const Img = styled('img')`
  width: 70px;
  padding-top: 7px;
  padding-bottom: 7px;
`

const style = {
    // border: "1px solid black"
}

const Logo = () => (
        <div style={style}>
            <Img src={logo} alt=""/>
        </div>
)

export default Logo