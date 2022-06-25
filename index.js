const router = require('./api')
const PORT = 5000
const express = require('express')
const bodyParser = require('body-parser')
require("./repositories")

const app = express()
app.use(bodyParser.json())


router.get('/', (req , res) => {
    console.log('ddd');
})

app.use(router)

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})