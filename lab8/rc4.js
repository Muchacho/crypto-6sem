const n = 8;


function doRC4(word,key){
    let start = performance.now();
    let sTable = getStartedStable();
    let kTable = createKTable(key);
    sTable = doPermutationSTable(sTable, kTable);
    let resultKey = getResultKey(sTable, key.length);
    let result = cipher(word, resultKey);
    let end = performance.now();
    return {result:result, time:(end-start)};
}

function getStartedStable(){
    let arr = [];
    for(let i = 0; i < n*n; i++){
        arr[i] = i;
    }
    return arr;
}

function createKTable(key){
    let k = 0, keyLength = key.length;
    let arr = [];
    for(let i = 0; i < n*n; i++){
        if(i >= keyLength*(k+1))k++
        arr[i] = +key[i - k * keyLength]
    }
    return arr;
}

function doPermutationSTable(sTable, kTable){
    let sPTable = sTable;
    let kPTable = kTable;
    let x;
    let i = 0, j = 0;
    while(i < n*n){
        j = (j + sPTable[i] + kPTable[i])%(n*n);
        x = sPTable[i];
        sPTable[i] = sPTable[j];
        sPTable[j] = x;
        i++;
    }
    return sPTable;
}

function getResultKey(sTable, length){
    let sRTable = sTable;
    let k = 0, x, a;
    let i = 0; j = 0;
    let arr = []
    while(k < length){
        i = (++i)%(n*n);
        j = (j + sRTable[i])%(n*n);
        x = sRTable[i];
        sRTable[i] = sRTable[j];
        sRTable[j] = x;
        a = (sRTable[i] + sRTable[j])%(n*n);
        arr[k] = sRTable[a];
        k++;
    }
    return arr;
}

function cipher(word, pKey){
    let numWord = [];
    for(let item in word){
        numWord[item] = ConvertToNum(word[item]);
    }
    let key = [];
    let k = 0, keyLength = pKey.length;
    for(let i = 0; i < word.length; i++){
        if(i >= keyLength*(k+1))k++
        key[i] = pKey[i - k * keyLength]
    }

    let result = [];
    for(let i = 0; i < key.length; i++){
        result[i] = numWord[i]^key[i];
    }
    for(let item in result){
        result[item] = String.fromCharCode(result[item]);
    }
    return result;
}

function ConvertToNum(symbol){
    let result = String(symbol).charCodeAt();
    while(result.length < 8){
        result = '0' + result;
    }
    return result;
}

module.exports = {
    doRC4: doRC4
}
