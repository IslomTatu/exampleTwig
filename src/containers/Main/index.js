import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts, getPostId, likePost, unlikePost } from "../../actions/postAction"
import { fetchUser } from "../../actions/auth"
import InfiniteScroll from 'react-infinite-scroll-component'
import Moment from 'react-moment'
import { bindActionCreators } from 'redux'
import { Dimmer, Loader } from 'semantic-ui-react'
import { Instagram } from 'react-content-loader'
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
        end: 6,
        errors: [],
        loading: false,
        array: [1,2,3]
    }
    componentWillMount(){

        this.props
            .fetchPosts()
        // this.props.fetchUser()
        setTimeout(()=>{
            this.setState({
                items: this.props.news.slice(0,3)
            })
        },150)

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
        }, 1)

    }


    render(){
        const { array } = this.state
        const { loading } = this.props
        return (
            <div id="main">

                {loading ? array.map(arr => <Instagram/>) : ""}
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                >
                {this.state.items.map((post, index) => (
                        <div key={index} className="posts-container" id={"post__"+index} onClick={()=>this.props.getPostId(post.id)}>

                            <div>
                                <div className='post-header'>
                                    <h3><Link to={"post/test_"+post.id} >{post.title}</Link></h3>
                                    <div className='user-data'>
                                        <span><Moment  fromNow>{post.date}</Moment></span>
                                        <p>author <a href="">u/{post.user.username}</a></p>
                                        <p>from <a href="">t/{post.twig.twig_name}</a></p>
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

                        </div>

                ) )}
                </InfiniteScroll>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    news: state.news.items,
    loading: state.news.loading

})

const mapDispatchToProps = dispatch => bindActionCreators ({
    fetchPosts,
    getPostId,
    fetchUser
    // likePost: id => dispatch(likePost(id)),
    // unlikePost: id => dispatch(unlikePost(id)),
    // dataPosts:() => dispatch(dataPosts())
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps )(Main)