import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import DB from './src/models';
import router from './src/router/router'

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.use('/', router)

app.use((req, res, next) => {
    res.send({
        message: "not found"
    })
})


app.listen(3000, '0.0.0.0', () => {
    console.log('listening port 3000')
})