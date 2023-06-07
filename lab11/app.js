const express = require('express');
const md5 = require('md5');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res)=>{
    res.end(fs.readFileSync('index.html'));
});
app.post('/',(req, res)=>{
    let start = performance.now();
    let result = md5(req.body.mess);
    console.log(result.length);
    let end = performance.now();
    res.end(JSON.stringify({result:result, time:(end-start)}));
});

app.listen(3001);

