const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home/index')
})

app.post('/login', (req, res) => {
    res.redirect('/dashboard')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard/index')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})