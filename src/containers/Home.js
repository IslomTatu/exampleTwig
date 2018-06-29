import React from 'react'
import { connect } from 'react-redux'
import LoginSide from './LoginSide'
import Main from './Main'
import HotSide from './HotSide'
import ProfileSideContainer from '../containers/ProfileSide'




import '../index.css'

const Home = ({ user }) => (
        <div id='container-inner'>
            {   localStorage.twigJWT?
                !!localStorage.twigJWT?<ProfileSideContainer/>: <LoginSide />
                : <LoginSide />
            }
            <Main />
            <HotSide />
        </div>
)


const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, null)(Home)