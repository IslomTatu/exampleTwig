import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTwig } from '../../actions/twigs'

import { Form, Input, Button } from 'semantic-ui-react'
import InputMask from 'react-input-mask'


import './index.css'

class AddTwig  extends Component{

    state = {
        data: {
            twig_name: "",
            description: "",
            type: 1,
            lang: ''
        },
        loading: false,
        errors: []
    }

    typeHandle = (e, {value}) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                type: value
            }
        })
        console.log(this.state.data)
    }

    langHandle = (e, {value}) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                lang: value
            }
        })

    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            data:{
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if(Object.keys(this.state.errors === 0)){
            this.setState({
                loading: true
            })
            this.props
                .addTwig(this.state.data)
                .then(() => {
                    this.setState({
                        loading: false
                    })
                    this.props.history.push(`/profile/${this.props.user}`)
                })
                .catch(err => {
                    this.setState({errors: err.response.data, loading: false})
                })
        }
    }
    render() {
        const {data, loading} = this.state
        return (
            <div id="container-addTwig">
                <div className="container-form">
                    <h2 align="center">Add new Twig</h2>
                    <Form onSubmit={this.onSubmit} loading={loading}>
                        <Form.Field>
                            <label>name of twig</label>
                            <Input label="t/" name="twig_name" type="text" onChange={this.onChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Choose type</label>
                        </Form.Field>
                        <Form.Group label="choose type">
                            <Form.Radio name="type"
                                   label="public"
                                   value={1}
                                   checked={data.type === 1}
                                   onChange={this.typeHandle}
                            />
                            <Form.Radio name="type"
                                   label="private"
                                   value={0}
                                   checked={data.type === 0}
                                   onChange={this.typeHandle}
                            />
                        </Form.Group>

                        <Form.Field>
                            <label>Choose language</label>
                        </Form.Field>
                        <Form.Group>
                            <Form.Radio name="lang"
                                        label="ru"
                                        value="ru"
                                        checked={data.lang === "ru"}
                                        onChange={this.langHandle}
                            />
                            <Form.Radio name="lang"
                                        label="uz"
                                        value="uz"
                                        checked={data.lang === "uz"}
                                        onChange={this.langHandle}
                            />
                        </Form.Group>
                        <Form.Field>
                            <label>Description</label>
                            <Form.TextArea
                                    name='description'
                                   onChange={this.onChange}
                            />
                        </Form.Field>
                        <Button type="submit">Create</Button>
                    </Form>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    user: state.user.username
})
export default connect(mapStateToProps, { addTwig })(AddTwig)