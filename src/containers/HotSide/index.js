import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.css'
import {getPostId} from "../../actions/postAction";

class HotSide extends Component{


    render(){
        return (
            <div id="hot-side">
                <button onClick={() => this.props.getPostId(353)}>Post</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    getPostId: id => getPostId(id)
}, dispatch)

export default connect(null, mapDispatchToProps)(HotSide)