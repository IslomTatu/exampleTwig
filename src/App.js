import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Post from './containers/Post'
import Register from './containers/Register'
import Activation from './containers/Activation'
import Profile from './containers/Profile'
import AddTwig from './containers/AddTwig'

//style
import 'semantic-ui-css/semantic.min.css'
import './index.css'

class App extends Component{



    render(){
        return(
            <div id="container">
                <NavBar />

                <Route exact path='/' component={Home} />
                <div id='container-inner2'>
                    <Route path='/post/:id' component={Post} />
                    <Route path='/user/register' component={Register} />
                    <Route path='/setting/email' component={Activation} />
                    <Route path='/profile/:user' component={Profile} />
                    <Route path='/create' component={AddTwig}/>
                </div>

            </div>
        )
    }

}
export default App