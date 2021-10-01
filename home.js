const express = require('express')
const path = require('path')
const app = express()
//const port = 80
const port = 4343

app.use(express.static(path.join(__dirname, 'site')))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/webpage', function (req, res) {
	res.send({"status":"past the page huh?"})
})

app.get('/webpage/site/', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/webpage/site/prod', function (req, res) {
	res.send({"status":"cold"})
})

app.get('/admin', function (req, res) {
	res.send({"status":"past the page huh?"})
})

app.get('/admin/testdrive', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.get('/admin/testdrive/auth', function (req, res) {
	res.send({"status":"warmer"})
})

app.get('/admin/testdrive/auth/restore', function (req, res) {
	res.sendFile(path.join(__dirname,'site/flag.txt'))
})

app.get('/storage', function (req, res) {
	res.send({"status":"past the page huh?"})
})

app.get('/nah', function (req, res) {
	res.sendFile(path.join(__dirname,'site/index.html'))
})

app.listen(port, () => {
	console.log(`Listening on ${port}`)
})