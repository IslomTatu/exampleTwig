import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import {dataPosts, fetchMoreData, fetchPosts, likePost, unlikePost} from "../../actions/postAction";

import Icon from 'react-icons-kit'
import {comment} from 'react-icons-kit/fa/comment'
import {share} from 'react-icons-kit/fa/share'
import {arrowUp} from 'react-icons-kit/fa/arrowUp'
import {arrowDown} from 'react-icons-kit/fa/arrowDown'

import './index.css'


class Main extends Component{

    state = {
        begin: 0,
        end: 2,
        posts: this.props.posts.slice(0, 5)
    }

    componentWillMount(){
        this.props.fetchPosts()
    }
    fetchMoreData = () => {

        this.props.fetchMoreData()

        // setTimeout(() => {
        //     this.setState({
        //         begin: this.state.begin + 2,
        //         end: this.state.end + 2,
        //         posts: this.state.posts.concat(this.props.posts.slice(6, 16))
        //     });
        // }, 500)
    }



    render(){


        return (
            <div id="main">
                <InfiniteScroll
                    dataLength={this.state.posts.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h1>Loading...</h1>}

                >
                {this.props.posts.map((post, index) => (
                        <div key={index} className="posts-container" id={"post__"+index}>
                            <h1>{post.title}</h1>
                            <div className='post-header'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={"http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"} alt="user"/>

                                </div>
                                <div className='user-data'>
                                    <p>{post.user.username}</p>
                                    <p>{post.date}</p>
                                </div>
                            </div>

                            <div className='post-body'>
                                {post.media_type==='image'
                                    ? <img width='100%' src={post.media[0]} alt=""/>
                                    : <video width="100%" height="400" src={post.media[0]} frameBorder="0" controls allowFullScreen></video>
                                }
                            </div>
                            <div className="post-footer">
                                <div className="footer-left">
                                    <div className="footer-comment" >
                                        <Icon icon={comment} />
                                    </div>
                                    <div className="footer-share">
                                        <Icon icon={share} />
                                    </div>
                                </div>

                                <div className="footer-right">
                                    <div className="unlike">
                                        <p></p>
                                        <Icon  onClick={()=> this.props.unlikePost(post.id)} icon={arrowDown} />
                                    </div>
                                    <div className="count">

                                    </div>
                                    <div className="like" >
                                        <Icon  onClick={()=> this.props.likePost(post.id)} icon={arrowUp} />
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                ) )}
                </InfiniteScroll>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.news.items
})

// const mapDispatchToProps = dispatch => ({
//     likePost: id => dispatch(likePost(id)),
//     unlikePost: id => dispatch(unlikePost(id)),
//     dataPosts:() => dispatch(dataPosts())
// })


export default connect(mapStateToProps, {fetchPosts, fetchMoreData} )(Main)