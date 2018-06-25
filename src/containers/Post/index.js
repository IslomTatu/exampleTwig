import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {getPostId} from "../../actions/postAction";

import Button from '../../components/Button'


class Post extends Component{


    componentWillMount() {
        this.props.getPostId(this.props.match.url.slice(-3))
        console.log(this.props.match)
    }


    render(){
        const { post }  = this.props
        const {username} = (this.props.post.user || {})
        const { twig_name } = (this.props.post.twig || {})
        const  media  = (this.props.post.media || [])
        return (
            <div id='container-post'>
                <div id='main-post'>
                    <div id='head-post'>
                        {this.props.post.title}
                    </div>
                    <div id='body-post'>
                        <p>{username} and {twig_name}</p>
                        <img src={media[0]} alt=""/>
                    </div>
                    <div id='footer-post'>

                    </div>
                </div>

                <div id='main-comment'>

                </div>
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        twig: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        text: PropTypes.string.isRequired,

        media: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }).isRequired
}


const mapStateToProps = state => ({
    post: state.news.item
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostId: id => getPostId(id)
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)