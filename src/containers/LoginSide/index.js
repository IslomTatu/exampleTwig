import React, { Component } from 'react'
import Input from '../../components/LoginSide/Input'
import Button from '../../components/Button'

//Icons
import MdAccountCircle from 'react-icons/lib/md/account-circle'
import MdVpnKey from 'react-icons/lib/md/vpn-key'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'

//styles
import './index.css'

const style = {
    border: "1px solid #dee1e3"
}

class LoginSide extends Component{


    render(){
        return (
            <div id="login-side">
                <div id='container-login' style={style}>
                    <div id="form-container" style={style}>
                        <form>
                            <div className='input-group'>
                                <label htmlFor='name'>Login: </label>
                                <br/>
                                <MdAccountCircle size={25} color='#dee1e3' />
                                <Input type='text' name='name'/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="password">Password: </label>
                                <br/>
                                <MdVpnKey size={25} color='#dee1e3' />
                                <Input type='password' name='password'/>
                            </div>
                            <div id='submit-container'>
                                <a href="">forget password?</a>
                                <Button type='submit' value='Enter' />
                            </div>
                        </form>
                    </div>

                    <div id='via-container' style={style}>
                        <h2>Connect Via</h2>
                        <div>
                            <a href="#"><FaFacebookSquare color='#3b5998' size={40} /></a>
                            <a href="#"><FaGooglePlusSquare color='red' size={40} /></a>
                            <a href="#"><FaTwitterSquare color='#0084b4' size={40} /></a>
                        </div>
                    </div>

                    <div id='register-container' style={style}>
                        <a href="#">register</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default LoginSide