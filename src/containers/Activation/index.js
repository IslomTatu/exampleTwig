import React, { Component } from 'react'
import { connect } from 'react-redux'
import { active } from '../../actions/auth'

import { Form } from 'semantic-ui-react'

//components
import Input from '../../components/Input'
import Button from '../../components/Button'

//style
import './index.css'

class Activation extends Component{

    state = {
        code: "",
        loading: false,
        errors: {}
    }

    onChange = e =>
        this.setState({
            ...this.state,
            code: e.target.value
        })

    onSubmit = e => {
        e.preventDefault()
        const errors = {}
        this.setState({ errors })
        if(Object.keys(errors).length === 0){
            this.setState({ loading: true })
            this.props.active(this.state.code)
                .then(() => {
                    this.props.history.push("/")
                })
                .catch(err => {
                        console.log("error in container : ",err)
                        this.setState({errors: err.response.data.code, loading: false})

                    }
                )
        }

    }

    render(){
        const { errors, loading } = this.state
        return(
            <div id='container-activation'>
                <h4>We have sent activation code to your email please check your email and activate your account</h4>
                <Form loading={loading} onSubmit={this.onSubmit}>
                    <Input type="text" name="code" onChange={this.onChange} />
                    <span style={{"display":errors.length?"block":"none", "color": "red"}}>{errors.length? errors[0]:""}</span>
                    <Button type="submit" value="Active" color="#337ab7" />
                </Form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.user.status,
    username: state.user.username
})

export default connect(mapStateToProps, { active })(Activation)