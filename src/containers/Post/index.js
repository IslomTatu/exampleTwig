import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getPostId} from "../../actions/postAction";

import Button from '../../components/Button'
import  FaAngleUp from 'react-icons/lib/fa/angle-up'
import  FaAngleDown from 'react-icons/lib/fa/angle-down'
import './index.css'

class Post extends Component{


    componentWillMount() {
        this.props.getPostId(this.props.match.url.slice(-3))
        console.log(this.props.match)
    }


    render(){
        const { post }  = this.props
        const { username } = (this.props.post.user || {})
        const { twig_name } = (this.props.post.twig || {})
        const  media  = (this.props.post.media || [])
        return (
            <div id='container-post'>
                <div id='main-post'>
                    <div id='head-post'>
                            <h4>{this.props.post.title} <span><a href="#"><small>(t/{twig_name})</small></a></span></h4>
                            <p>{this.props.post.date} author <a href="#">u/{username}</a></p>
                    </div>
                    <div id='body-post'>
                        {post.media_type==='image'
                            ? <img width='100%' src={media[0]} alt=""/>
                            : <video width="100%" height="400" src={media[0]} frameBorder="0" controls allowFullScreen></video>
                        }
                        <p>{post.text}</p>
                    </div>
                    <div id='footer-post'>
                        <div id='footer-post-head'>
                            <p>comments</p>
                            <a href="#">share</a>
                        </div>
                        <Button type="button" value='write comment'></Button>
                    </div>

                    <div id="like-post">
                        <FaAngleUp size={25} />
                        <p>1</p>
                        <FaAngleDown size={25} />
                    </div>
                </div>

                <div id='main-comment'>
                    <p>Comments</p>
                    <p style={{"color":"grey"}}>No Comments yet</p>
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