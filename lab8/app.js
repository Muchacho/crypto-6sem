const express = require('express');
const {doBBS} = require('./bbs');
const {doRC4} = require('./rc4');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.end(fs.readFileSync('first.html'));
});
app.post('/',(req, res)=>{
    console.log(req.body);
    let {p,q} = req.body;
    console.log(p,q);
    let arr = doBBS(+p,+q,10);
    res.end(JSON.stringify(arr));
});

app.get('/rc4', (req, res)=>{
    res.end(fs.readFileSync('second.html'));
});
app.post('/rc4', (req, res)=>{
    let {word,key} = req.body;
    key = key.split(' ');
    console.log(word, key);
    let obj = doRC4(word,key);
    res.end(JSON.stringify(obj));
})

app.listen(3000);

