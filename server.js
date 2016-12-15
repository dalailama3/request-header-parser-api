var express = require('express')
var app = express()


app.get('/', function (req, res) {
    var headers = req.headers
    var ip = headers['x-forwarded-for']
    var language = headers['accept-language']
    var os = headers['user-agent']
    var userInfo = {
        ipaddress: ip,
        language: language,
        software: os
    }
    res.json(userInfo)
})


app.listen(process.env.PORT || '8080')