import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import ProfileSide from '../../components/Profile/ProfileSide'

import { history } from 'history'

class ProfileSideContainer extends Component{


    onClick = () =>{
        this.props.logout()
    }

    goMyPage = () => {
        this.props.history.push(`/user/${this.props.user}`)
    }

    render(){
        const { user, history } = this.props
        return(
            <ProfileSide
                onClick={this.onClick}
                username={user}
                goMyPage={this.goMyPage}
            />
        )
    }
}


const mapStateToProps = state => ({
    user: state.user.username
})

export default connect(mapStateToProps, { logout })(ProfileSideContainer)

