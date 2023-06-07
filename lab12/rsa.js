// let p1 = 53, p2 = 59, n = p1 * p2, fn = (p1 - 1) * (p2 - 1), e = 3, d = (2 * n + 1) / e;

// let e1 = 257, d1 = 353, n1 = 481;

// function rsa_cip(request, responce){
//     let start = performance.now();
//     let mess = request.body.mess;
//     let messArr = getCodeArr(mess);
//     let result = [];
//     for(let item in messArr){
//         result.push(getModul(messArr[item], e1, n1, 1));
//     }
//     console.log(result);
//     for(let item in result){
//         result[item] = String.fromCharCode(result[item]);
//     }
//     let finish = performance.now()
//     responce.end(JSON.stringify({
//         result: result,
//         time: finish-start
//     }));
// }

// function getCodeArr(str){
//     let result = [];
//     for(let i = 0; i < str.length; i++){
//         result.push(String(str[i]).charCodeAt());
//     }
//     return result;
// }

// function rsa_decip(request, responce){
//     let start = performance.now();
//     let mess = request.body.mess;
//     let messArr = getCodeArr(mess);
//     let result = [], i = 0, isRNum = false, x, y;
//     console.log(messArr);
//     for(let item in messArr){
//         result.push(getModul(messArr[item], d1, n1, 1));
//     }
    
//     for(let item in result){
//         result[item] = String.fromCharCode(result[item]);
//     }
//     let finish = performance.now()
//     responce.end(JSON.stringify({
//             result: result.join(''),
//             time: finish-start
//     }));
// }
// module.exports = {
//     rsa_cip,
//     rsa_decip
// }


function getModul(c, e, n, r){
    if(e == 0) return r;
    let ret = (c * r) % n;
    return getModul(c, e - 1, n, ret);
}

const verifyMess = (req, res) => {
    let start = performance.now();
    let {data} = req.body;
    console.log(data);  
    let h = getModul(data.sign, data.e, 33, 1);
    console.log(h);
    let valid = false
    if(h == data.messcip[data.messcip.length - 1])
        valid = true;
    let end = performance.now();
    console.log('rsa - time : ' + (end-start));
    res.end(JSON.stringify({sign:data.sign, valid: valid}));
}
module.exports = {
    verifyMess
}