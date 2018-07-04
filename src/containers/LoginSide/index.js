import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'
import Input from '../../components/LoginSide/Input'
import Button from '../../components/Button'
import { login } from "../../actions/auth";

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

    state = {
        data: {
            username: "",
            password: ""
        },
        loading: false,
        errors: []
    }

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value },
            errors: []
        })

    onSubmit = e => {
        e.preventDefault()

        if (Object.keys(this.state.errors).length === 0){
            this.setState({ loading: true })
            this.props
                .login(this.state.data)
                .catch(err => {
                    //if(err.response.status !== 201 || err.response.status !== 200){
                        this.setState({ errors: err.response.data.errors, loading: false })
                    //}
                })
        }
    }


    render(){
        const { errors, loading } = this.state
        const errUsername = errors.find(field => field.field === 'username')
        const errPassword = errors.find(field => field.field === 'password')
        const errNone = errors.find(field => field.field === 'None')
        return (
            <div id="login-side">
                <div id='container-login' style={style}>
                    <div id="form-container" style={style}>
                        <h4>Enter</h4>
                        {!errNone ? ""
                            :<Message color="red">{errNone.message}</Message>
                        }
                        <Form onSubmit={this.onSubmit} loading={loading}>
                            <div className='input-group'>
                                <label htmlFor='name'>Login </label>
                                <br/>
                                <Input type='text' name='username' onChange={this.onChange} />
                                <span style={{"display":errUsername?"block":"none"}}>{errUsername? errUsername.message:""}</span>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="password">Password </label>
                                <a href="">forget password?</a>
                                <br/>
                                <Input type='password' name='password' onChange={this.onChange}/>
                                <span style={{"display":errPassword?"block":"none"}}>{errPassword? errPassword.message:""}</span>
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



export default connect(null, { login })(LoginSide)