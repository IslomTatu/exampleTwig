import React, { Component } from 'react'
import { connect } from 'react-redux'

//style
import './index.css'

class Activation extends Component{



    render(){
        return(
            <div>
                <h1>Activation Page</h1>
            </div>
        )
    }
}

export default connect(null, null)(Activation)