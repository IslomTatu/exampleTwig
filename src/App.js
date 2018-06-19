import React from 'react'
import NavBar from './containers/NavBar'
import LoginSide from './containers/LoginSide'
import Main from './containers/Main'
import HotSide from './containers/HotSide'

import './index.css'

const App = () => (
    <div id="container">
        <NavBar />
        <div id='container-inner'>
            <LoginSide />
            <Main />
            <HotSide />
        </div>
    </div>
)

export default App