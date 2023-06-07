const express = require('express');
const fs = require('fs');
const app = express(); 
const {verifyMess} = require('./rsa');
const {verifyMessAG, getSecretKey} = require('./ag');
const {verifyMessSh, getSecretKeySh} = require('./shnorr');

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.json());
app.use(urlencodedParser);

//rsa
app.get('/', (req,res)=>{
    // let keys = rsaKeys();
    // sKey = keys.prKey;
    res.end(fs.readFileSync('index.html'));
})

app.post('/checkRSA', verifyMess);



//эль-гамаля
app.get('/ag', (req,res)=>{
    // let keys = rsaKeys();
    // sKey = keys.prKey;
    res.end(fs.readFileSync('index2.html'));
})

app.get('/getKey', getSecretKey);
app.post('/checkAG', verifyMessAG);



//шнорр
app.get('/sh', (req,res)=>{
    // let keys = rsaKeys();
    // sKey = keys.prKey;
    res.end(fs.readFileSync('index3.html'));
})

app.get('/getKeySH', getSecretKeySh);
app.post('/checkSH', verifyMessSh);

// app.post('/decipher', rsa_decip);

app.listen(3000);
