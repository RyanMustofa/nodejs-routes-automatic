export default {
    get: {
        ['get-user']: async (req, res) => {
            return res.send({
                route: 'get-user'
            })
        },
        ['get-data']: async (req, res) => {
            return res.send({
                route: 'get-data'
            })
        }
    },
    post: {
        ['post-data']: async (req, res) => {
            return res.send({
                route: 'post-data'
            })
        }
    }
}