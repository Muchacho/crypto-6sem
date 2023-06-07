const express = require('express');
const RSA = require('node-rsa');
const fs = require('fs');
const app = express(); 
const {rsa_cip, rsa_decip} = require('./rsa1');

const {getSecretKey, ag_decip} = require('./ag');

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.json());
app.use(urlencodedParser);

app.get('/', (req,res)=>{
    // let keys = rsaKeys();
    // sKey = keys.prKey;
    res.end(fs.readFileSync('index.html'));
})

app.get('/ag', (req,res)=>{
    // let keys = rsaKeys();
    // sKey = keys.prKey;
    res.end(fs.readFileSync('index2.html'));
})
// app.post('/cipher', (req,res)=>{
//     let {word, key} = req.body;
//     let start = performance.now();
//     let newKey = new RSA(keyArr[0]);
//     let result = newKey.encrypt(word, 'utf8');
//     let end = performance.now();
//     resData = word;
//     let xxx = JSON.stringify({result: result, time:(end-start)});
//     res.end(xxx);
// });

// app.post('/decipher', (req,res)=>{
//     try{
//         let start = performance.now();
//         let {word, key} = req.body;
//         console.log(sKey, 99);
//         let keyPrivate = new RSA(sKey);
//         let result = keyPrivate.decrypt(resData, 'utf8');
//         let end = performance.now();
//         res.end(JSON.stringify({result: result, time:(end-start)}));
//     } catch(err){
//         console.log(err.mess);
//         res.end(JSON.stringify({result: resData, time:( 5.618199944496155)}));
//     }
// });

let sKey = '';
let keyArr = []
let resData;
// rsaKeys = ()=>{
//     const keys = new RSA({b:512});
//     const pKey = keys.exportKey('public');
//     const prKey = keys.exportKey('private');
//     keyArr = [pKey, prKey];
//     return {pKey:pKey, prKey:prKey}
// }

// console.log(rsaKeys());

app.post('/cipher', rsa_cip);
app.post('/decipher', rsa_decip);

app.get('/db', getSecretKey);
app.post('/agdecip', ag_decip);


app.listen(3000);
