const fs = require('fs');
// const { it } = require('node:test');

const defaultPath = 'D:\\projects\\BSTU\\6\\kmzi\\labs\\lab15\\'


function getFileText(filename){
    return fs.readFileSync(defaultPath + filename, 'utf8');
}

function getSymbols(filename){
    let text = getFileText(filename);
    let result = ''
    for(let i = 0; i < text.length; i++){
        if(text[i] == ' ' && text[i + 1] == ' '){
            i++;
            result += '1';
        }else if(text[i] == ' ' && text[i + 1] != ' '){
            result += '0';
        }
    }
    console.log(result);
    k = 0;
    let str = ''
    let resArr = [];
    for(let item in result){
        if(k == 8){
            resArr.push(str);
            k = 0;
            str = '';
        }
        str+=result[item];
        k++;
    }
    console.log(resArr);
    let asdqwe = [];
    let strResult = '';
    for(let item in resArr){
        // for(let i = 0; i < resultArrChar.length; i++){
            if(resArr[item] == '11111111')break;
            strResult += String.fromCharCode(parseInt(resArr[item], 2));
        // }
    }
    console.log(strResult);
}

getSymbols('text.txt');