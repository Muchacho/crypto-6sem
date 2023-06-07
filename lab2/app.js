const espAlphabet = "abcdefghijklmnñopqrstuvwxyz";
const serAlphabet = "абвгдђежзијклљмнњопрстћуфхцчџш";
const binAlphabet = "01";
const fs = require('fs');

let verAlp = {};

let serEnt, espEnt, serBinEnt, espBinEnt;

function getCountOfSymbol(data){
    var dataLength = 0;
    for(let i = 0; i < data.length; i++){
        if(verAlp[data[i]] >= 0){
            verAlp[data[i]]++;
            dataLength++;
        }
    }
    return dataLength;
}

function getEntropia(length){
    let entropia = 0;
    for(key in verAlp){
        verAlp[key] /= length;
        if(verAlp[key] != 0){
            entropia += verAlp[key] * Math.log2(verAlp[key]);
        }
    }
    entropia = entropia.toFixed(2) * (-1);
    return entropia;
}

function convToBinary(num){
    let number = num;
    let binary = (num % 2).toString();
    for(; number > 1; ){
        number = parseInt(number/2);
        binary = (number%2) + (binary);
    }
    return binary;
}

function getEntropiaAndAlp(alphabet, type){
    var alpLength = alphabet.length;
    for(let i = 0; i < alpLength; i++){
        verAlp[alphabet[i]] = 0;
    }
    let data, dataLength = 0;
    switch(type){
        case "esp": {
            data = fs.readFileSync('esp.txt', "utf8");
            dataLength = getCountOfSymbol(data);
            espEnt = getEntropia(dataLength);
            break;}
        case "ser": {
            data = fs.readFileSync('ser.txt', "utf8");
            dataLength = getCountOfSymbol(data);
            serEnt = getEntropia(dataLength);
            break;}
        case "bin": {
            data = fs.readFileSync('ser.txt', "utf8");
            var resData = "";
            for(let i = 0; i < data.length; i++){
                resData += convToBinary(data[i].charCodeAt(0));
            }
            dataLength = getCountOfSymbol(resData);
            serBinEnt = (-1) * (verAlp["0"]/dataLength) * Math.log2(verAlp["0"]/dataLength) + (-1) * (verAlp["1"]/dataLength) * Math.log2(verAlp["1"]/dataLength);
            serBinEnt = serBinEnt.toFixed(2);
            verAlp = {"0":0,"1":0};
            resData = "";
            data = fs.readFileSync('esp.txt', "utf8");
            for(let i = 0; i < data.length; i++){
                resData += convToBinary(data[i].charCodeAt(0));
            }
            dataLength = getCountOfSymbol(resData);
            espBinEnt = (-1) * (verAlp["0"]/dataLength) * Math.log2(verAlp["0"]/dataLength) + (-1) * (verAlp["1"]/dataLength) * Math.log2(verAlp["1"]/dataLength);
            espBinEnt = espBinEnt.toFixed(2);
        }  
    }
}

function getCountOfDataByEntropia(message, entropia, bin = false, p = 0){
    if(!p){
        if(!bin){
            return message.length * entropia;
        } else {
            let resData = "";
            for(let i = 0; i < message.length; i++){
                resData += convToBinary(message[i].charCodeAt(0));
            }
            return resData.length * entropia;
        }
    } else {
        if(!bin){

            return p < 0.9 ? message.length * (1 - ((-p)*Math.log2(p)-(1-p)*Math.log2(1-p))) : 0;
        } else {
            let resData = "";
            for(let i = 0; i < message.length; i++){
                resData += convToBinary(message[i].charCodeAt(0));
            }
            return resData.length * (1 - ((-p)*Math.log2(p)-(1-p)*Math.log2(1-p)));
        }
    }
}

function taskAB(arr){
    let words = ['сербского', 'испанского', 'сербского(2)', 'испанского(2)'];
    console.log('task a and b');
    for(let i = 0; i < 4; i++){
        console.log(`Энтропия для ${words[i]} языка: ${arr[i]}`);
    }
    console.log('\n');
}

function taskC(arr){
    let words = ['сербской', 'испанской', 'сербской(2)', 'испанской(2)'];
    let mess = ['Бутурля Роман Андреевич', 'Buturlia Roman Andreevich'];
    let bin = false;
    console.log('task c');
    for(let i = 0; i < 4; i++){
        if(i == 2) bin = true;
        console.log(`Фио по ${words[i]} энтропии: ${getCountOfDataByEntropia(mess[i%2], arr[i], bin).toFixed(2)}`);
    }
    console.log('\n');
}

function taskD(arr){
    let words = ['сербской', 'испанской', 'сербской(2)', 'испанской(2)'];
    let mess = ['Бутурля Роман Андреевич', 'Buturlia Roman Andreevich'];
    let p = [0.1, 0.5, 0.99];
    let bin = false;
    console.log('task d');
    for(let i = 0; i < 4; i++){
        if(i == 2) bin = true;
        for(let j = 0; j < 3; j++){
            console.log(`Фио по ${words[i]} энтропии c вероятностью ошибки ${p[j]}: ${getCountOfDataByEntropia(mess[i%2], arr[i], bin, p[j]).toFixed(2)}`);
        }
        console.log('\n');
    }
}

function main(){
    getEntropiaAndAlp(serAlphabet, 'ser');
    getEntropiaAndAlp(espAlphabet, 'esp');
    getEntropiaAndAlp(binAlphabet, 'bin');

    taskAB([serEnt,espEnt,serBinEnt,espBinEnt]);

    taskC([serEnt,espEnt,serBinEnt,espBinEnt]);

    taskD([serEnt,espEnt,serBinEnt,espBinEnt]);
}
main();