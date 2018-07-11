import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostId } from "../../actions/postAction"
import { fetchTwigs, fetchTwigPosts } from "../../actions/twigs"

import { List, Image } from 'semantic-ui-react'

import './index.css'
import t from '../../utils/t.png'

class HotSide extends Component{

    state = {

    }

    componentWillMount() {
        this.props.fetchTwigs()
    }

    onClick = twig_name => {
        this.props.fetchTwigPosts(twig_name)
    }

    render(){
        const { twigs } = this.props
        return (
            <div id="hot-side">
                <List animated verticalAlign='middle'>
                    {twigs.map((twig, index) => (
                        <List.Item key={index} onClick={() => this.onClick(twig.twig_name)}>
                            <Image avatar src={t}/>
                            <List.Content>
                                <List.Header>{twig.twig_name}</List.Header>
                            </List.Content>
                        </List.Item>
                    ))

                    }
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    twigs: state.twigs.allTwigs
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostId: id => getPostId(id),
    fetchTwigs,
    fetchTwigPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotSide)