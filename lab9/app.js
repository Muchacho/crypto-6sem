const express = require('express');
const {cipher, decipher} = require('./cipher')
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.end(fs.readFileSync('first.html'));
});
app.post('/',(req, res)=>{
    console.log(req.body);
    let {word, key} = req.body;
    key = key.split(' ');
    console.log(key);
    for(let item in key){
        key[item] = +key[item];
    }
    let arr = cipher(word, key);
    res.end(JSON.stringify(arr));
});

app.get('/decipher', (req, res)=>{
    res.end(fs.readFileSync('second.html'));
});
app.post('/decipher', (req, res)=>{
    console.log(req.body);
    let {word} = req.body;
    word = word.split(', ');
    let arr = decipher(word);
    res.end(JSON.stringify(arr));
})

function checkKey(arr){
    let k = 0;
    for(let i = 2; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            k+=arr[j];
        }
        if(k > arr[i])return false;
        k = 0;
    }
    return true;
}

app.listen(3000);

