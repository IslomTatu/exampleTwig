import React, { Component } from 'react'
import { connect } from 'react-redux'

//components
import Input from '../../components/Register/input'
import Button from '../../components/Button'
//style
import './index.css'

class Register extends Component{


    render(){
        return(
            <div id="container-register">
                <h4>Register</h4>
                <form>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <Input name='email' type='email'/>
                    <label htmlFor="login">Login</label>
                    <br/>
                    <Input name='login' type='text'/>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <Input name='password' type='password'/>

                    <Button type="submit" value="send" color={"#337ab7"} />
                </form>
            </div>
        )
    }
}

export default connect(null,null)(Register)