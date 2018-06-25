import axios from 'axios'

export default {
    posts: {
        fetchAll: () => axios.get('https://twig.uz/v1.0/api/posts/', {}).then(res => res.data.results)
    },
    post: {
        fetchOne: id => axios.get(`https://twig.uz/v1.0/api/posts/${id}`, {}).then(res => res.data)
    }
}