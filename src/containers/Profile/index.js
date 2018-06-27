import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'


class Profile extends Component{


    render(){
        return(
            <div id="container-profile">
                <h1>Profile Page</h1>
            </div>
        )
    }
}

export default connect(null, null)(Profile)