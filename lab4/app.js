const fs = require('fs');
let text = fs.readFileSync('en.txt', 'utf-8');
console.log(text.length);


const alphabetString = `abcdefghijklmnopqrstuvwxyz ,.-\'?!()\n`;

function getCipherTable(word){
    let table = word;
    for(let i = 0; i < alphabetString.length; i++){
        if(!table.includes(alphabetString[i])) table += alphabetString[i];
    }
    return table;
}

function getCharacterFrequency(fileName){
    let text;
    if(fileName.includes('.txt'))
        text=fs.readFileSync(fileName, 'utf-8');
    else text = fileName.toLocaleLowerCase();
    let obj = {};
    let textLength = text.length;
    for(let i = 0; i < alphabetString.length; i++){
        obj[alphabetString[i]] = 0;
    }
    for(let i = 0; i < textLength; i++){
            obj[text[i]]++;
    }
    console.log(obj['\n']);
    for(key in obj){
        obj[key] = obj[key] / textLength;
    }
    console.log(obj);
}


function caesarCipher(fileName, mode){
    let text;
    if(fileName.includes('.txt'))
        text = fs.readFileSync(fileName, 'utf-8').toLocaleLowerCase();
    else
        text = fileName;
    let result = '';
    let caesarTable = getCipherTable('buturlia');
    console.log(caesarTable);
    if(mode){
        for(let i = 0; i < text.length; i++){
            result += caesarTable[alphabetString.indexOf(text[i])];
        }
        fs.writeFileSync('ceaserCipher.txt', result);
    } else {
        for(let i = 0; i < text.length; i++){
            result += alphabetString[caesarTable.indexOf(text[i])];
        } 
        fs.writeFileSync('ceaserDecipher.txt', result);
    }
}

function TrisemusTable(fileName, mode){
    let text;
    if(fileName.includes('.txt'))
        text = fs.readFileSync(fileName, 'utf-8').toLocaleLowerCase();
    else
        text = fileName;
    let arr = [];
    let result = '';
    let trisTable = getCipherTable('roman');
    let trisTableArr = trisTable.split('');
    for(let i = 0, k = 0; i < 6; i++){
        arr[i] = [];
        for(let j = 0; j < 6; j++){
            arr[i][j] = trisTableArr[k];
            k++;
        }
    }
    if(mode){
        for(let i = 0; i < text.length; i++){
            result += trisTable[trisTable.indexOf(text[i]) + 6 < trisTable.length ? trisTable.indexOf(text[i]) + 6: 
                (trisTable.indexOf(text[i]) + 6 - trisTable.length)];
        }
        fs.writeFileSync('trisemusCipher.txt', result);
    } else {
        for(let i = 0; i < text.length; i++){
            result += trisTable[trisTable.indexOf(text[i]) - 6 >= 0 ? trisTable.indexOf(text[i]) - 6: (trisTable.length + trisTable.indexOf(text[i]) - 6)];
        }
        fs.writeFileSync('trisemusDecipher.txt', result);
    }
    console.log(arr);
}



function main(){
    let time;
    time = performance.now();
    caesarCipher('en.txt', true);
    console.log(`=========================\n1 time: ${performance.now() - time}\n=====================`);

    time = performance.now();
    caesarCipher('ceaserCipher.txt', false);
    console.log(`=========================\n2 time: ${performance.now() - time}\n=====================`);

    time = performance.now();
    TrisemusTable('en.txt', true);
    console.log(`=========================\n3 time: ${performance.now() - time}\n=====================`);

    time = performance.now();
    TrisemusTable('trisemusCipher.txt', false);
    console.log(`=========================\n4 time: ${performance.now() - time}\n=====================`);

    getCharacterFrequency('en.txt');
    getCharacterFrequency('ceaserCipher.txt');
    getCharacterFrequency('trisemusCipher.txt');
}
main();

