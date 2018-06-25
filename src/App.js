import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Post from './containers/Post'

import './index.css'

const App = () => (

        <div id="container">
            <NavBar />
            <Route exact path='/' component={Home} />
            <div id='container-inner'>
                <Route path='/:id' component={Post} />
            </div>
        </div>


)

export default App