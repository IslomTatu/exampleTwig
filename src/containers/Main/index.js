import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import {dataPosts, fetchMoreData, fetchPosts, likePost, unlikePost} from "../../actions/postAction";
import { bindActionCreators } from 'redux'

import Icon from 'react-icons-kit'
import {comment} from 'react-icons-kit/fa/comment'
import {share} from 'react-icons-kit/fa/share'
import {arrowUp} from 'react-icons-kit/fa/arrowUp'
import {arrowDown} from 'react-icons-kit/fa/arrowDown'

import './index.css'


class Main extends Component{

    state = {
        items: [],
        begin: 3,
        end: 6
    }
    componentDidMount(){

        this.props.fetchPosts()
        setTimeout(()=>{
            this.setState({
                items: this.props.news.slice(0,3)
            })
        },1500)

    }
    fetchMoreData = () => {

        let begin = this.state.begin
        let end = this.state.end
        let items = this.state.items
        setTimeout(() => {
            this.setState({
                items: items.concat(this.props.news.slice(this.state.begin, this.state.end)),
                begin: begin + 3,
                end: end + 3
            });
        }, 500)

    }


    render(){

        return (
            <div id="main">
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}



                >
                {this.state.items.map((post, index) => (
                        <div key={index} className="posts-container" id={"post__"+index}>
                            <h3><Link to={'/post'}>{post.title}</Link></h3>
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
    news: state.news.items

})

const mapDispatchToProps = dispatch => bindActionCreators ({
    fetchPosts,
    fetchMoreData
    // likePost: id => dispatch(likePost(id)),
    // unlikePost: id => dispatch(unlikePost(id)),
    // dataPosts:() => dispatch(dataPosts())
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps )(Main)