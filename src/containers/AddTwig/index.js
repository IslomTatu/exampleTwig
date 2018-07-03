import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import InputMask from 'react-input-mask'


import './index.css'

class AddTwig  extends Component{



    render() {
        return (
            <div id="container-addTwig">
                <Form>
                    <Form.Field>
                        <InputMask mask='t/'/>
                    </Form.Field>
                </Form>
            </div>

        )
    }
}

export default connect(null, null)(AddTwig)