import React from 'react'
import { List, Icon } from 'semantic-ui-react'

const style = {
    "width": "25%",
    "backgroundColor": "white",
    "borderRadius": "5px",
    "height": 150
}

const ProfileSide = () => (
    <div id="profile-side" style={style}>
        <List selection verticalAlign='middle'>
            <List.Item>
                <Icon name='home'/>
                <List.Content>My Page</List.Content>
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
        </List>
    </div>
)

export default ProfileSide