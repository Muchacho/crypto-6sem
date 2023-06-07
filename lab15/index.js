const fs = require('fs');

const defaultPath = 'D:\\projects\\BSTU\\6\\kmzi\\labs\\lab15\\'

function getSpace(filename){
    let text = fs.readFileSync(defaultPath + filename, "utf8");
    for(let i in text){
        if(text[i] == ' ')console.log(123);
    }
    console.log(text.split(' '));
    return text.split(' ');
}

// getSpace('text.txt');

function createFile(arr, filename){
    let fileText = getSpace(filename);
    console.log('get file text');
    let result = ''
    for(let item in fileText){
        if(item == fileText.length - 1){
            result += fileText[item];
            break;
        }
        if(arr[item] == '0'){
            console.log(0)
            result += fileText[item] + ' ';
        } else {
            console.log(1)
            result += fileText[item] + ' ' + ' ';
        }
    }
    console.log('result: ' + result);
    fs.writeFileSync(defaultPath + filename, result);
}

function cip(mess, filename){
    let binMess = [];
    for(let i in mess){
        binMess.push(ConvertToBinary(mess[i]));
    }
    console.log(binMess.join(''));
    createFile(binMess.join(''), filename);
}

function ConvertToBinary(symbol){
    let result = String(symbol).charCodeAt().toString(2);
    while(result.length < 8){
        result = '0' + result;
    }
    return result;
}

cip('abt', 'text.txt');

