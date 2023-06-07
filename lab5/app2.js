const firstKeyWord = 'buturlia';
const secondKeyWord = 'roman';
const fs = require('fs');

console.log(fs.readFileSync('en.txt', 'utf-8').length);

function getMinSequence(word){
    let arr = [];
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let res = [];
    for(let i = 0; i < word.length; i++){
        arr[i] = alphabet.indexOf(word[i]);
    }
    let min = arr[0], indMin = 0;
    for(let j = 0; j < arr.length; j++){
        for(let i = 0; i < arr.length; i++){
            if(min > arr[i]) {
                min = arr[i];
                indMin = i;
            }
        }
        res[j] = indMin;
        arr[indMin] = undefined;
        min = 27; indMin = 0;
    }
    return res;
}

function cipher(mess){
    let newMess = firstStep(mess);
    let result = secondStep(newMess);
    fs.writeFileSync('2c.txt', result);
}

function firstStep(mess){
    let result = '', it = 0;
    let arr = [], arr2 = [];
    let x = Number.isInteger((mess.length)/firstKeyWord.length)? (mess.length)/firstKeyWord.length:
        Math.ceil((mess.length)/firstKeyWord.length);
    for(let i = 0; i < x; i++){
        arr[i] = [];
        arr2[i] = [];
        for(let j = 0; j < firstKeyWord.length; j++){
            if(it >= mess.length)arr[i][j] = 0;
            else arr[i][j] = mess[it++];
        }
    }
    let fPS = getMinSequence(firstKeyWord);
    
    for(let i = 0; i < firstKeyWord.length; i++){
        for(let j = 0; j < x; j++){
            arr2[j][i] = arr[j][fPS[i]];
        }
    }
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr2[i].length; j++){
            result+=arr2[i][j];
        }
    }
    return result;
}

function secondStep(mess){
    let result = '', it = 0;
    let arr = [], arr2 = [];
    let x = Number.isInteger(mess.length/secondKeyWord.length)?mess.length/secondKeyWord.length:
        Math.ceil(mess.length/secondKeyWord.length);
    for(let i = 0; i < secondKeyWord.length; i++){
        arr[i] = [];
        arr2[i] = [];
        for(let j = 0; j < x; j++){
            if(it>=mess.length)arr[i][j] = '\/';
            else arr[i][j] = mess[it++];
        }
    }

    let sPS = getMinSequence(secondKeyWord);
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[sPS[i]];
    }
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            result+=arr2[i][j];            
        }
    }
    return result;
}

function decipher(mess){
    let newMess = firstDStep(mess);
    console.log(mess.length)
    fs.writeFileSync('2d.txt', newMess);
    newMess = newMess.slice(0, newMess.indexOf('\/'));
    console.log(newMess.length);
    let result = secondDStep(newMess);
    result = result.slice(0, result.indexOf('00'));
    fs.writeFileSync('2d.txt', result);
}

function firstDStep(mess){
    let result = '', it = 0;
    let arr = [], arr2 = [];
    let x = Number.isInteger(mess.length/secondKeyWord.length)?mess.length/secondKeyWord.length:
        Math.ceil(mess.length/secondKeyWord.length);
    for(let i = 0; i < secondKeyWord.length; i++){
        arr[i] = [];
        arr2[i] = [];
        for(let j = 0; j < x; j++){
            if(it>=mess.length)arr[i][j] = 0;
            else arr[i][j] = mess[it++];
        }
    }
    let sPS = getMinSequence(secondKeyWord);
    for(let i = 0; i < secondKeyWord.length; i++){
        arr2[sPS[i]] = arr[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            result+=arr2[i][j];            
        }
    }
    return result;
}

function secondDStep(mess){
    let result = '', it = 0;
    let arr = [], arr2 = [];
    let x = Number.isInteger((mess.length)/firstKeyWord.length)? (mess.length)/firstKeyWord.length:
        Math.ceil((mess.length)/firstKeyWord.length);
    for(let i = 0; i < x; i++){
        arr[i] = [];
        arr2[i] = [];
        for(let j = 0; j < firstKeyWord.length; j++){
            arr[i][j] = mess[it++];
        }
    }

    let fPS = getMinSequence(firstKeyWord);
    for(let i = 0; i < x; i++){
        for(let j = 0; j < arr[i].length; j++){
            arr2[i][fPS[j]] = arr[i][j];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            result+=arr2[i][j];            
        }
    }
    return result;
}

let time;

let text = fs.readFileSync("en.txt", 'utf-8');
time = performance.now();
cipher(text);
console.log(`=========================\n1 time: ${performance.now() - time}\n=====================`);

let text2 = fs.readFileSync("2c.txt", 'utf-8');

time = performance.now();
decipher(text2);
console.log(`=========================\n1 time: ${performance.now() - time}\n=====================`);