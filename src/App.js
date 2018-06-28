import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Post from './containers/Post'
import Register from './containers/Register'
import Activation from './containers/Activation'
import Profile from './containers/Profile'

//style
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const App = () => (

        <div id="container">
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <div id='container-inner2'>
                    <Route path='/post/:id' component={Post} />
                    <Route path='/user/register' component={Register} />
                    <Route path='/setting/email' component={Activation} />
                    <Route path='/profile/:user' component={Profile} />
                </div>
            </Switch>
        </div>


)

export default App