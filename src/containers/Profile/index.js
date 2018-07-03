import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/auth'
import { fetchTwigs } from '../../actions/twigs'
import {List, Icon, Button, Image } from 'semantic-ui-react'

//components
import ProfileSide from '../../components/Profile/ProfileSide'
import UserSide from '../../components/Profile/UserSide'
//style
import './index.css'

import logo from '../../utils/t.png'


class Profile extends Component{

    addTwig = () =>{
        this.props.history.push('/create')
    }

    componentWillMount(){
        this.props.fetchUser()
        this.props.fetchTwigs()
    }


    render(){
        const { user } = this.props.match.params
        const { twigs } = this.props
        return(
            <div id="container-profile">
                <ProfileSide />
                <div id="main-user">
                    <UserSide top={true}>
                        <Icon name="user circle" size="massive" color="grey"/>
                        <h3>u/{user}</h3>
                        <p>Post twig 0</p>
                        <p>Comment twig 0</p>
                    </UserSide>

                    <UserSide>
                        <h4>My Twigs</h4>
                        {twigs.length === 0
                            ? ""
                            : <List selection verticalAlign={"middle"}>
                                {twigs.map((twig, index) => (
                                    <List.Item key={index}>
                                        <Image avatar src={logo} />
                                        <List.Content>
                                            {twig.twig_name}
                                        </List.Content>
                                    </List.Item>
                                ))}
                            </List>}
                        <Button size='tiny' animated="fade" color="google plus" onClick={this.addTwig}>
                            <Button.Content visible>Add Twig</Button.Content>
                            <Button.Content hidden><Icon name='plus'  /></Button.Content>
                        </Button>
                    </UserSide>

                    <UserSide>
                        <p><Icon name='envelope' color='orange' /> example@email.ru</p>
                        <Button  size="tiny" color="youtube">
                            Inactive
                        </Button>
                    </UserSide>

                    <UserSide>
                        <Button basic size="tiny">
                            <Icon name={"sign out"} color='orange' />Log out
                        </Button>
                    </UserSide>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    twigs: state.twigs.twigs
})

export default connect(mapStateToProps, { fetchUser, fetchTwigs })(Profile)