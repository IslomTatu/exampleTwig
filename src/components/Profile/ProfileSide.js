import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon } from 'semantic-ui-react'

const style = {
    "width": "25%",
    "backgroundColor": "white",
    "borderRadius": "5px",
    "height": 250
}

const ProfileSide = ({ onClick, username, goMyPage }) => (
    <div id="profile-side" style={style}>
        <List selection verticalAlign='middle'>
            <List.Item>
                <List.Header>
                    <Icon name="smile outline" />
                    <h3>Welcome {username}</h3>
                </List.Header>
            </List.Item>
            <List.Item onClick={goMyPage}>
                <Link style={{"display": "flex"}}
                    to={`/profile/${username}`}
                >
                    <Icon name='home'/>
                    <List.Content>My Page</List.Content>
                </Link>
            </List.Item>
            <List.Item>
                <Icon name='newspaper outline'/>
                <List.Content>News</List.Content>
            </List.Item>
            <List.Item>
                <Icon name='comments'/>
                <List.Content>Messages</List.Content>
            </List.Item>
            <List.Item>
                <Icon name='list'/>
                <List.Content>Twigs</List.Content>
            </List.Item>
            <List.Item onClick={onClick}>
                <Icon name='sign out'/>
                <List.Content>Log out</List.Content>
            </List.Item>
        </List>
    </div>

)

export default ProfileSide