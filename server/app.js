const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')
const models = require('./models/models')
const routes = require('./routes/index')
const fileUpload = require('express-fileupload')
const path = require('path')
//const errorHandler = require('./middleware/ErrorHandlingMiddleware')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',routes)

//Замыкающий middleware
//app.use(errorHandler)


const PORT = process.env.PORT || 5000


async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,() => {
            console.log('server has beeen started on port: ',PORT)
        })
    }catch(e) {
        console.log(e.message)
    }
}

start()