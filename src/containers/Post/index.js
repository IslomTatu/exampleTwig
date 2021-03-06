import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getPostId, getComments, sendComment} from "../../actions/postAction"

import { fetchUser } from "../../actions/auth"

import Moment from 'react-moment'
import { Button, Icon, Form, Comment, Header, Message } from 'semantic-ui-react'

// import Button from '../../components/Button'
import  FaAngleUp from 'react-icons/lib/fa/angle-up'
import  FaAngleDown from 'react-icons/lib/fa/angle-down'
import './index.css'

class Post extends Component{

    state = {
        data:{
          post_id: 0,
          comment_text: "",
          parent_comment: 0
        },
        loading: false,
        errors: [],
        error: {}
    }

    componentWillMount() {
        const postID = this.props.match.url.slice(-3)
        this.props.getPostId(this.props.match.url.slice(-3))
        this.props.getComments(this.props.match.url.slice(-3))
        // this.props.fetchUser()
        console.log(this.props.match)

        this.setState({
            data: {
                ...this.state.data,
                post_id: postID
            }
        })
    }

    replyComment = (parent_id, user) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                parent_comment: parent_id
            }
        })

        document.getElementById("commentArea").focus()
        document.getElementById("commentArea").value = `@${user} `

    }


    onChange = (e) => {
        this.setState({
            ...this.state,
            data: { ...this.state.data,
                comment_text: e.target.value,
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            errors: []
        })
        if(Object.keys(this.state.errors).length === 0) {

            this.setState({ loading : true })
        }
        this.props
            .sendComment(this.state.data)
            .then(() => {
                document.getElementById("commentArea").value = ""
                this.props.getComments(this.props.match.url.slice(-3))
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                if (err.response.status === 401){
                    this.setState({
                        error: err.response.data,
                        loading: false
                    })
                }
                else if (err.response.status === 400){
                    this.setState({
                        errors: err.response.data.errors,
                        loading: false
                    })
                }
                else {
                    console.log("Something is wrong with INTERNET", err)
                    this.setState({
                        loading: false
                    })
                }
            })


    }



    render(){
        const { post }  = this.props
        const { username } = (this.props.post.user || {})
        const { twig_name } = (this.props.post.twig || {})
        const  media  = (this.props.post.media || [])

        const comments = this.props.comments.filter(parent => parent.parent_comment === 0)
        const reComments = this.props.comments.filter(parent => parent.parent_comment !== 0)
        const {parent_comment} = reComments

        const { errors, error, loading } = this.state
        return (
            <div id='container-post'>
                <div id='main-post'>
                    <div id='head-post'>
                            <h4>{this.props.post.title} <span><a href="#"><small>(t/{twig_name})</small></a></span></h4>
                            <p><span><Moment  fromNow>{post.date}</Moment></span> author <a href="#">u/{username}</a></p>
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
                    <div className="container-comments">
                        <Comment.Group threaded>
                            <Header as='h3' dividing>
                                Comments
                            </Header>
                            {comments.map((comment, index) =>
                                <Comment key={index}>
                                    <Comment.Avatar as='a'/>
                                    <Comment.Content>
                                        <Comment.Author as='a'>{comment.user.username}</Comment.Author>
                                        <Comment.Metadata>
                                            <span><Moment fromNow>{comment.date}</Moment></span>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                            <p>{comment.comment_text}</p>
                                        </Comment.Text>
                                        <Comment.Actions>
                                            <a onClick={() => this.replyComment(comment.id, comment.user.username)}>Reply</a>
                                        </Comment.Actions>
                                    </Comment.Content>


                                    {reComments.map((reCom, index) => (
                                        <div key={index}>
                                            {
                                                reCom.parent_comment === comment.id
                                                ? <Comment.Group>
                                                    <Comment>
                                                        <Comment.Avatar as='a'/>
                                                        <Comment.Content>
                                                            <Comment.Author as='a'>{reCom.user.username}</Comment.Author>
                                                            <Comment.Metadata>
                                                                <span><Moment fromNow>{reCom.date}</Moment></span>
                                                            </Comment.Metadata>
                                                            <Comment.Text>{reCom.comment_text}</Comment.Text>
                                                            <Comment.Actions>
                                                                <a>Reply</a>
                                                            </Comment.Actions>
                                                        </Comment.Content>
                                                    </Comment>
                                                </Comment.Group>
                                                :""
                                            }
                                        </div>
                                    ))}
                                </Comment>


                            )}
                            {error.detail ? <Message color="red">Please login or signup first</Message>
                                :""
                            }
                            <Form reply onSubmit={this.onSubmit} loading={loading}>
                                <Form.TextArea id="commentArea" onChange={this.onChange} />
                                <span style={{"display":errors.length?"block":"none"}}>{errors.length? errors[0].message:""}</span>
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                            </Form>
                        </Comment.Group>
                    </div>
                </div>
            </div>

        )
    }



    componentDidMount(){


    }
}



Post.propTypes = {
    // post: PropTypes.objectOf(PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     title: PropTypes.string.isRequired,
    //     twig: PropTypes.object.isRequired,
    //     user: PropTypes.object.isRequired,
    //     text: PropTypes.string.isRequired,
    //     media: PropTypes.string.isRequired,
    //     date: PropTypes.string.isRequired
    // })).isRequired
    // comments: PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     user: PropTypes.object.isRequired,
    //     comment_tex: PropTypes.string.isRequired,
    //     parent_comment: PropTypes.number.isRequired,
    //     date: PropTypes.string.isRequired
    // }).isRequired
}


const mapStateToProps = state => ({
    post: state.news.item,
    comments: state.news.comments,
    user: state.user.username
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostId: id => getPostId(id),
    getComments: id => getComments(id),
    sendComment,
    fetchUser
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)