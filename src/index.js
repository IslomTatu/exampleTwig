import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './App'

render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    ,
    document.getElementById('root')
)

