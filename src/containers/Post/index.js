import React, { Component } from 'react'
import { connect } from 'react-redux'



class Post extends Component{

    render(){
        const post  = this.props.post
        return (
            <div>
                <h1>{this.props.post.title}</h1>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    post: state.news.item
})

export default connect(mapStateToProps, null)(Post)