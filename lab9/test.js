function getArr(n, table){
    for(let i = 0; i < table.length; i++){
        if(table[i] == n) {console.log(table[i], 999);return;}
    }
    let y;
    for(let i = 0; i < table.length; i++){
        y=ju(n, [table[i]], table)
        if(y && y.length!=0){
            return y;
        }
    }
    return false;
}

function ju(n, arr=[], table){
    let find = false, arrCompl = true;
    let arrNum = 0;
    let y;
    if(arr.length){
        for(let item in arr)
            arrNum+= arr[item];
    }
    for(let i = 0; i < table.length; i++){
        arrCompl = true;
        for(let item in arr){
            if(table[i] == arr[item]) {arrCompl = false; break;}
        }
        if(arrCompl){
            if(arrNum + table[i] == n) {
                arr.push(table[i]);
                find = true;
                break;
            }
        }
    }
    if(find)return arr;
    else {
        for(let i = 0; i < table.length; i++){
            arrCompl = true;
            for(let item in arr){
                if(table[i] == arr[item]) {arrCompl = false; break;}
            }
            if(arrCompl){
                arr.push(table[i])
                return ju(n, arr, table);
            }
            arr.pop();
        }
        
    }
}

module.exports = {
    getArr: getArr
}

