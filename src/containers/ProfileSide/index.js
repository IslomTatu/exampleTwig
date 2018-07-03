import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import ProfileSide from '../../components/Profile/ProfileSide'

class ProfileSideContainer extends Component{


    onClick = () =>{
        this.props.logout()
    }

    render(){
        const { user } = this.props
        return(
            <ProfileSide
                onClick={this.onClick}
                username={user}

            />
        )
    }
}


const mapStateToProps = state => ({
    user: state.user.username
})

export default connect(mapStateToProps, { logout })(ProfileSideContainer)

