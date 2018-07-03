import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input } from 'semantic-ui-react'
import InputMask from 'react-input-mask'


import './index.css'

class AddTwig  extends Component{


    onChange = (e) => {
        console.log(e.target.value)
    }
    render() {
        return (
            <div id="container-addTwig">
                <Form>
                    <Form.Field>
                        <label>name of twig</label>
                        <Input label="t/" type="text" onChange={this.onChange}/>
                    </Form.Field>
                </Form>
            </div>

        )
    }
}

export default connect(null, null)(AddTwig)