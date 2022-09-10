const Express = require('express');

const app = Express();

var port = process.env.PORT || 443;

app.get('/helloexpress', (req, res)=>{
    res.send("hello")
})

app.get('/', (req, res)=>{
    res.send("working....")
})

app.listen(process.env.PORT)