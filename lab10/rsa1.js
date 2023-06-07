let p1 = 53, p2 = 59, n = p1 * p2, fn = (p1 - 1) * (p2 - 1), e = 3, d = (2 * n + 1) / e;

let e1 = 257, d1 = 353, n1 = 481;

function rsa_cip(request, responce){
    let start = performance.now();
    let mess = request.body.mess;
    let messArr = getCodeArr(mess);
    let result = [];
    for(let item in messArr){
        result.push(getModul(messArr[item], e1, n1, 1));
    }
    console.log(result);
    for(let item in result){
        result[item] = String.fromCharCode(result[item]);
    }
    let finish = performance.now()
    responce.end(JSON.stringify({
        result: result,
        time: finish-start,
        length: result.length
    }));
}

function getCodeArr(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        result.push(String(str[i]).charCodeAt());
    }
    return result;
}

function rsa_decip(request, responce){
    let start = performance.now();
    let mess = request.body.mess;
    let messArr = getCodeArr(mess);
    let result = [], i = 0, isRNum = false, x, y;
    console.log(messArr);
    for(let item in messArr){
        result.push(getModul(messArr[item], d1, n1, 1));
    }
    
    for(let item in result){
        result[item] = String.fromCharCode(result[item]);
    }
    let finish = performance.now()
    responce.end(JSON.stringify({
            result: result.join(''),
            time: finish-start
    }));
}
module.exports = {
    rsa_cip,
    rsa_decip
}


function getModul(c, e, n, r){
    if(e == 0) return r;
    let ret = (c * r) % n;
    return getModul(c, e - 1, n, ret);
}