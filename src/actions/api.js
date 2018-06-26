import axios from 'axios'

export default {
    user: {
      login: credentials =>
        axios.post("https://twig.uz/v1.0/api/account/create/", {email: credentials.email, username: credentials.username, password: credentials.password}).then(response => console.log("in login api ", response)),
      signup:'',
      confirm:''
    },
    posts: {
        fetchAll: () => axios.get('https://twig.uz/v1.0/api/posts/', {}).then(res => res.data.results)
    },
    post: {
        fetchOne: id => axios.get(`https://twig.uz/v1.0/api/posts/${id}`, {}).then(res => res.data)
    }
}