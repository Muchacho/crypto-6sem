const alphabet =   'abcdefghijklmnopqrstuvwxyz';
const leftRotor =  'bdfhjlcprtxvznyeiwgakmusqo';
const midleRotor = 'nzjhgrcxmyswboufaivlpekqdt';
const rightRotor = 'ekmflgdqvzntowyhxuspaibrcj';
const reflector = 'ae bn ck dq fu gy hw ij lo mp rx sz tv';

let iterRR = 0;
let iterMR = 0;
let iterLR = 0;

function cript(mess){
    let result = '', symb;
    for(let i = 0; i < mess.length; i++){
        if(mess[i] == ' ') {
            result += ' ';
            continue;
        }
        checkIndex();
        symb = rRotor(mess[i]);
        symb = mRotor(symb);
        symb = lRotor(symb);
        symb = sReflector(symb);
        symb = lbRotor(symb);
        symb = mbRotor(symb);
        result += rbRotor(symb);
        iterLR++; iterMR++; iterRR++;
    }
    console.log(result, result.length);
}

function rRotor(symbol){
    return rightRotor[(iterRR + alphabet.indexOf(symbol))%rightRotor.length];
}

function mRotor(symbol){
    return midleRotor[(iterMR + alphabet.indexOf(symbol))%midleRotor.length];
}

function lRotor(symbol){
    return leftRotor[(iterLR + alphabet.indexOf(symbol))%leftRotor.length];
}

function rbRotor(symbol){
    return alphabet[rightRotor.indexOf(symbol)];
}

function mbRotor(symbol){
    return alphabet[midleRotor.indexOf(symbol)];
}

function lbRotor(symbol){
    return alphabet[leftRotor.indexOf(symbol)];
}


function sReflector(symbol){
    let result;
    let symNum = reflector.indexOf(symbol);
    if(symNum == 0) result = reflector[1];
    else if(symNum == reflector.length-1)result = reflector[reflector.length - 2];
    else if(reflector[symNum + 1] != ' ') result = reflector[symNum + 1];
    else result = reflector[symNum - 1];
    return result;
}

function checkIndex(){
    if(iterRR == rightRotor.length){
        iterMR++;
        iterRR = 0;
    }
    if(iterMR == midleRotor.length){
        iterLR++;
        iterMR = 0;
    }
    if(iterLR == leftRotor.length){
        iterLR = 0;
    }
}

// cript('buturlia roman');
cript('m');
