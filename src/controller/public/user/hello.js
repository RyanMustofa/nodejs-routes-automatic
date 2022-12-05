export default {
    get: {
        ['hello-user']: async (req, res) => {
            return res.send({
                route: 'hello-user'
            })
        },
        ['hello-data']: async (req, res) => {
            return res.send({
                route: 'hello-data'
            })
        }
    },
    post: {
        ['post-hello-data']: async (req, res) => {
            return res.send({
                route: 'post-hello-data'
            })
        }
    }
}