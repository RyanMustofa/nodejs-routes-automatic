import express from 'express'
import fs from 'fs'

const router = express();

let base = __dirname + "/../../controller/public"

let _dir = fs.readdirSync(base);
_dir.map(async _el => {
    let _file = fs.readdirSync(base + "/" + _el)
    _file = _file.filter(cm => {
        return cm.slice(-3) === ".js"
    }).map(async cm => {
        if (cm.slice(0, -3) === "index") {
            let _name = await import(`${base}/${_el}/${cm}`);
            Object.keys(_name.default).map(async _route => {
                Object.keys(_name.default[_route]).map(async _fields => {
                    let files = await import(`${base}/${_dir}`)
                    router[_route](`/${_el}/${_fields}`, files.default[_route][_fields])

                })
            })
        } else {
            let _name = await import(`${base}/${_el}/${cm}`);
            Object.keys(_name.default).map(async _route => {
                Object.keys(_name.default[_route]).map(async _fields => {
                    let files = await import(`${base}/${_el}/${cm}`)
                    router[_route](`/${_el}/${cm.slice(0, -3)}/${_fields}`, files.default[_route][_fields])
                })
            })
        }
    })
})

router.get('/', (req, res) => {
    return res.send({
        name: 'admin'
    })
})

export default router;