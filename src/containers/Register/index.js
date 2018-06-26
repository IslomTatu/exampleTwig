import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

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
        errors: {}
    }

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })

    onSubmit = e => {
        e.preventDefault()
        const errors = this.validate(this.state.data)
        this.setState({ errors })
        if(Object.keys(errors).length === 0){
            this.setState({ loading: true })
            this.props
                .login(this.state.data)
                .then(() => this.props.history.push("/setting/email"))
                .catch(err => {
                        this.setState({errors: err.response.data.errors[0], loading: false})

                    }
                )
        }
    }

    validate = data => {
        const errors = {}
        // if (!isEmail(data.email)) errors.email = "Invalid email"
        // if(!data.password) errors.password = "Can't be blank"
        return errors
    }

    render(){
        const { data, errors, loading } = this.state
        return(
            <div id="container-register">
                <h4>{errors.field === 'email'? errors.message: "go home"}</h4>
                <h4>{data.login}</h4>
                <h4>{data.password}</h4>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <Input name='email' type='email' onChange={this.onChange}/>
                    <span style={{"display":errors.field?"block":"none"}}>{errors.field === 'email'? errors.message: ""}</span>

                    <label htmlFor="username">Login</label>
                    <br/>
                    <Input name='username' type='text' onChange={this.onChange}/>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <Input name='password' type='password' onChange={this.onChange}/>

                    <Button type="submit" value="send" color={"#337ab7"} />
                </form>
            </div>
        )
    }
}

export default connect(null,{ login })(Register)