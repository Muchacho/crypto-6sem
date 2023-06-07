const z = 8;
const sTable = [2, 3, 6, 13, 27, 52, 105, 210, 421, 841, 1682, 3364];
// const sTable = [2, 3, 6, 13, 27, 52, 105, 210];
const n = 420, a = 31, a1 = 271;
const {getArr} = require('./getDecipherArr');

// module.exports =
 function cipher(word, key){
    let start = performance.now();
    let wordArr = [];
    for(let item in word){
        wordArr[item] = ConvertToBinary(word[item]);
    }
    let resArr = [];
    for(let i = 0; i < wordArr.length; i++){
        resArr[i] = 0;
        for(let j = 0; j < wordArr[i].length; j++){
            if(wordArr[i][j] === '1')resArr[i] += key[j];
        }
    }
    let end = performance.now();
    console.log(resArr);
    return {result: resArr, time:(end - start)};
}

function ConvertToBinary(symbol){
    let result = String(symbol).charCodeAt(0).toString(2)
    while(result.length < z){
        result = '0' + result;
    }
    return result;
}

function getBasicKey(){
    let result = [];
    for(let item in sTable){
        result[item] = (sTable[item] * a) % n;
    }
    console.log(result);
    return result;
}

getBasicKey();

// cipher('abcd', [62, 93, 186, 403, 417, 352, 315, 210]);


function getBase64BinStr(str){
    const buf = Buffer.from(str, "base64");
    console.log(buf);
    const bufhex = buf.toString("hex").split("");

    let arr = [];

    for (let i = 0; i < bufhex.length / 2; i++) {
        arr.push(bufhex[i * 2]  + bufhex[i * 2 + 1])
    }

    console.log(arr)

    arr = arr.map(hexNum => parseInt(hexNum, 16).toString(2).padStart(8, '0'));

    const result = [];

    arr = arr.join("");
    console.log(arr);

    for (let i = 0; i < arr.length / 6; ++i) {
        console.log(i);
        result.push((arr.slice(i * 6, i * 6 + 6)).padStart(6, '0'))
    }

    console.log(result);
}


function decipher(word){
    let start = performance.now();
    let wordArr = [];
    let resultPer = [];
    let result = [];
    for(let i in word){
        wordArr[i] = (word[i] * a1) % n;
    }
    let arr = [];
    for(let item in wordArr){
        arr[item] = getArr(wordArr[item], sTable);
    }
    for(let i = 0; i < arr.length; i++){
        resultPer[i] = [];
        for(let j = 0; j < arr[i].length; j++){
            resultPer[i][j] = sTable.indexOf(arr[i][j]);
        }
    }
    for(let i = 0; i < resultPer.length; i++){
        result[i] = ['0', '0', '0', '0', '0', '0', '0', '0'];
        for(let j = 0; j < resultPer[i].length; j++){
            result[i][resultPer[i][j]] = '1';
        }
        result[i] = result[i].join('');
    }
    for(let item in result){
        result[item] = String.fromCharCode(parseInt(result[item], 2));
    }
    console.log(result);
    let end = performance.now();
    return {result: result.join(''), time:(end - start)};
}
// let key = [ 489, 594, 804, 631 ];
// decipher(key);

module.exports = {
    cipher:cipher,
    decipher:decipher
}