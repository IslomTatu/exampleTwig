import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/auth'
import { Icon, Button } from 'semantic-ui-react'

//components
import ProfileSide from '../../components/Profile/ProfileSide'
import UserSide from '../../components/Profile/UserSide'
//style
import './index.css'


class Profile extends Component{

    addTwig = () =>{
        this.props.history.push('/create')
    }


    render(){
        const { user } = this.props.match.params
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

export default connect(null, { fetchUser })(Profile)