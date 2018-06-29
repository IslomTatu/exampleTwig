import axios from 'axios'

const url = "https://twig.uz/v1.0/api/"

export default {
    user: {
      login: credentials =>
        axios.post(url+"account/create/", {email: credentials.email, username: credentials.username, password: credentials.password}),
      signup: user =>
        axios.post(url+"account/login/", {password: user.password, username: user.username}),
      confirm: token =>
        axios.get(url+"account/", {headers:{
                'Authorization': `token ${token}`}}),
      activate: code =>
          axios.post(url+"account/activate/", {code: code})
    },
    posts: {
        fetchAll: () => axios.get(url+'posts/', {}).then(res => res.data.results)
    },
    post: {
        fetchOne: id => axios.get(`${url}posts/${id}`, {}).then(res => res.data)
    }
}