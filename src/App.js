import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Post from './containers/Post'
import Register from './containers/Register'
import Activation from './containers/Activation'

import './index.css'

const App = () => (

        <div id="container">
            <NavBar />
            <Route exact path='/' component={Home} />
            <div id='container-inner'>
                <Route path='/post/:id' component={Post} />
                <Route path='/user/register' component={Register} />
                <Route path='/setting/email' component={Activation} />
            </div>
        </div>


)

export default App