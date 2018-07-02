import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signup } from '../../actions/auth'

import { Loader, Form } from 'semantic-ui-react'
//components
import Input from '../../components/Register/input'
import Button from '../../components/Button'
//style
import './index.css'

class Register extends Component{

    state = {
        data:{
            email: "",
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
        const errors = this.validate(this.state.data)
        this.setState({ errors })
        if(Object.keys(errors).length === 0){
            this.setState({ loading: true })
            this.props
                .signup(this.state.data)
                .then(() => {
                    this.props.history.push("/setting/email")
                })
                .catch(err => {
                    console.log(err.response)
                    // if(err.response.status !== 201 || err.response.status !== 200){
                        this.setState({ errors: err.response.data.errors, loading: false })
                    // }
                })
        }
    }

    validate = data => {
        const errors =[]
        // if (!isEmail(data.email)) errors.email = "Invalid email"
        // if(!data.password) errors.password = "Can't be blank"
        return errors
    }

    render(){
        const { errors, loading } = this.state
        const errEmail = errors.find(field => field.field === 'email')
        const errLogin = errors.find(field => field.field === 'username')
        const errPassword = errors.find(field => field.field === 'password')
        return(
            <div id="container-register">
                <h4>{errors.field === 'email'? errors.message: "go home"}</h4>
                <h2>Register</h2>
                <Form onSubmit={this.onSubmit} loading={loading}>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <Input name='email' type='email' onChange={this.onChange}/>
                    <span style={{"display":errEmail?"block":"none"}}>{errEmail? errEmail.message:""}</span>

                    <label htmlFor="username">Login</label>
                    <br/>
                    <Input name='username' type='text' onChange={this.onChange}/>
                    <span style={{"display":errLogin?"block":"none"}}>{errLogin? errLogin.message:""}</span>

                    <label htmlFor="password">Password</label>
                    <br/>
                    <Input name='password' type='password' onChange={this.onChange}/>
                    <span style={{"display":errPassword?"block":"none"}}>{errPassword? errPassword.message:""}</span>

                    <Button type="submit" value="send" color={"#337ab7"} />
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.user.status
})


export default connect(mapStateToProps,{ signup })(Register)