import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
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
                        <h4>Enter</h4>
                        <Form>
                            <div className='input-group'>
                                <label htmlFor='name'>Login </label>
                                <br/>
                                <Input type='text' name='name'/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="password">Password </label>
                                <a href="">forget password?</a>
                                <br/>
                                <Input type='password' name='password'/>
                            </div>
                            <div id='submit-container'>

                                <Button type='submit' value='Enter' color={"#337ab7"} />

                                <Link to="/user/register">Register</Link>
                            </div>
                        </Form>
                    </div>

                    <div id='via-container' style={style}>
                        <h2>Connect Via</h2>
                        <div>
                            <a href="#"><FaFacebookSquare color='#3b5998' size={40} /></a>
                            <a href="#"><FaGooglePlusSquare color='red' size={40} /></a>
                            <a href="#"><FaTwitterSquare color='#0084b4' size={40} /></a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default LoginSide