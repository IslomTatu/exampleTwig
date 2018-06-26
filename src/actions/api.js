import axios from 'axios'

export default {
    user: {
      login: credentials =>
        axios.post("https://twig.uz/v1.0/api/account/create/", {email: credentials.email, username: credentials.username, password: credentials.password}),
      signup:'',
      confirm:'',
      activate: code =>
          axios.post("https://twig.uz/v1.0/api/account/activate/", {code: code})
    },
    posts: {
        fetchAll: () => axios.get('https://twig.uz/v1.0/api/posts/', {}).then(res => res.data.results)
    },
    post: {
        fetchOne: id => axios.get(`https://twig.uz/v1.0/api/posts/${id}`, {}).then(res => res.data)
    }
}