const express = require('express')
const path = require('path')
const app = express()
const port = 4343

app.use(express.static(path.join(__dirname, 'site')))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/webpage', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/webpage/site/', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/admin', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/admin/testdrive', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/admin/testdrive', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/storage', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.listen(port, () => {
	console.log(`Listening on ${port}`)
})