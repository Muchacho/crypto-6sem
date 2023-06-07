const n = 187,e = 163, d = 107;

function cipher(word){
    let arr = word.split('');
    arr = getCipherArr(arr);
    let result = [];
    console.log(arr);
    for(let item in arr){
        result[item] = Math.pow(arr[item],e)%n;
    }
    console.log(result);
    return result;
}

function getCipherArr(arr){
    for(let item in arr){
        arr[item] = String(arr[item]).charCodeAt(0);
    }
    return arr;
} 

console.log(cipher('a'));




