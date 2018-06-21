import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Post from './containers/Post'

import './index.css'

const App = () => (
    <div id="container">
        <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <div id='container-inner'>
                    <Route path='/post' component={Post} />
                </div>
            </Switch>
    </div>
)

export default App