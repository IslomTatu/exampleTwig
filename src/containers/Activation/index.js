import React, { Component } from 'react'
import { connect } from 'react-redux'
import { active } from '../../actions/auth'

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
            this.props
                .active(this.state.code)
                .then(() => {
                    if (this.props.status == 201){
                        console.log("userActive")
                        this.props.history.push("/")
                    }
                })
                .catch(err => {
                        console.log("error in container : ",err)
                        // this.setState({errors: err.response.data.errors[0], loading: false})

                    }
                )
        }

    }

    render(){
        return(
            <div id='container-activation'>
                <h4>We have sent activation code to your email please check your email and activate your account</h4>
                <form onSubmit={this.onSubmit}>
                    <Input type="text" name="code" onChange={this.onChange} />
                    <Button type="submit" value="Active" color="#337ab7" />
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.user.status
})

export default connect(mapStateToProps, { active })(Activation)