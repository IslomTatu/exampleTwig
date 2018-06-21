import React from 'react'
import LoginSide from './LoginSide'
import Main from './Main'
import HotSide from './HotSide'

import '../index.css'

const Home = () => (
        <div id='container-inner'>
            <LoginSide />
            <Main />
            <HotSide />
        </div>
)

export default Home