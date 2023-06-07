const fs = require('fs');

console.log(fs.readFileSync('en.txt', 'utf-8').length);

function doRoutePermutationCipher(mess){
    let arr = [];
    let res = '', iterator = 0;
    let num = Math.sqrt(mess.length);
    let x = Number.isInteger(num) ? num : Math.ceil(num), y = x;   
    for(let i = 0; i < x; i++){
        arr[i] = [];
        for(let j = 0; j < x; j++){
            if(iterator < mess.length){
                res+=mess[iterator];
                arr[i][j] = mess[iterator];
                iterator++;
            } else {
                res+=0;
                arr[i][j] = 0;
            }
        }
        res+='\n';
    }
    res='';
    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            if((i+1)%2==0){
                res+= arr[x-1-j][i];
            } else res+= arr[j][i];
        }
    }
    fs.writeFileSync('1c.txt', res);
}
function doRoutePermutationDecipher(mess){
    let arr = [], xxx = [];
    let res = '', iterator = 0;
    let num = Math.sqrt(mess.length);
    let x = Number.isInteger(num) ? num : Math.ceil(num), y = x;   
    for(let i = 0; i < x; i++){
        arr[i] = [];
        xxx[i] = [];
        for(let j = 0; j < x; j++){
            xxx[i][j] = 0;
            if(iterator < mess.length){
                res+=mess[iterator];
                arr[i][j] = mess[iterator];
                iterator++;
            } else {
                res+=0;
                arr[i][j] = 0;
            }
        }
        res+='\n';
    }
    res = '';
    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            if((i+1)%2==0){
                xxx[j][i] = arr[i][x-1-j];
            } else {
                xxx[j][i] = arr[i][j];
            }
        }
    }
    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            if(xxx[i][j]!='0')res+=xxx[i][j];
        }
    }
    fs.writeFileSync('1d.txt', res);
}

let time;
const text = fs.readFileSync('en.txt', 'utf-8');
console.log(text.length);
time = performance.now();
doRoutePermutationCipher(text);
console.log(`=========================\n1 time: ${performance.now() - time}\n=====================`);

const text2 = fs.readFileSync('1c.txt', 'utf-8');
time = performance.now();
doRoutePermutationDecipher(text2);
console.log(`=========================\n2 time: ${performance.now() - time}\n=====================`);



// let mess = fs.readFileSync('2c.txt', 'utf-8');
// function x(mess){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let obj = {};
//     for(let i = 0; i < alphabet.length; i++){
//         obj[alphabet[i]] = 0;
//     }
//     for(let i = 0; i < mess.length; i++){
//         if(obj[mess[i]] >= 0) obj[mess[i]]++;
//     }
//     for(let i = 0; i < alphabet.length; i++){
//         obj[alphabet[i]] = obj[alphabet[i]] / mess.length;
//     }
//     console.log(obj);
// }
// x(mess);

