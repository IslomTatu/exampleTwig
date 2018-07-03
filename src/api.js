import axios from 'axios'

const url = "https://twig.uz/v1.0/api/"

export default {
    user: {
        singup: credentials =>
            axios.post(url + "account/create/", {
                email: credentials.email,
                username: credentials.username,
                password: credentials.password
            })
                .then(res => res.data.auth_token
                ),
        login: user =>
            axios.post(url + "account/login/", {password: user.password, username: user.username})
                .then(res => res.data.auth_token),
        confirm: token =>
            axios.get(url + "account/", {
                headers: {
                    'Authorization': `token ${token}`
                }
            })
                .then(res => res.data),
        activate: code =>
            axios.post(url + "account/activate/", {code: code}).then(res => res.data)
    },
    post: {
        fetchAll: () => axios.get(url + 'posts/', {}).then(res => res.data.results),
        fetchOne: id => axios.get(`${url}posts/${id}`, {}).then(res => res.data),
        fetchComments: (id) => axios.get(`${url}posts/${id}/comments/`)
            .then(res => res.data.results),
        comment: (data, token) => axios.post(`${url}posts/${data.post_id}/comments/`, {
            comment_text: data.comment_text,
            parent_comment: data.parent_comment
        }, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
            .then(res => {
                console.log("in api res comment", res)
                return res
            })
    },
    twig: {
        create: data => axios.post(`${url}account/twigs/`,
            {
                twig_name: data.twig_name,
                description: data.description,
                type: data.type,
                lang: data.lang
            })
            .then(res => res.data),
        fetchAll: () => axios.get(`${url}account/twigs`)
            .then(res => res.data.results)
    }
}