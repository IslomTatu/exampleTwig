import axios from 'axios'


export default (token = null) => {
    if (token){
        axios.defaults.headers.common.authorization = `token ${token}`
    }
    else {
        delete axios.defaults.headers.common.authorization
    }
}