let cb = 13, p = 23, q = 2, g = 5, x = 5;

function getSecretKeySh(request, responce){
    let db = Math.pow(g, cb)%p;
    // console.log(db);
    responce.end(JSON.stringify({db: db}));
}



const verifyMessSh = (request, response) => {
    let start = performance.now();
    console.log('1');
    console.log(request.body.data[1][request.body.data[1].length - 1], 'qqq');
    let = isRes = request.body.data[0].e == ag_decip(request.body.data[0])? true : false

    let end = performance.now();
    console.log('ag - time : ' + (end-start));
    return response.end(JSON.stringify({mess:isRes}));
    // return response.end(JSON.stringify({mess:false}));
}

function ag_decip(cip){
    let result;
    console.log(cip)
    // result = (cip.e * Math.pow(cip.r, p - 1 - cb))%p;
    result = (Math.pow(g, cip.e) * Math.pow((Math.pow(g, cb)%p), cip.r))%p;
    console.log(result,1);
    return result;
    // responce.end(JSON.stringify({result: result}));
}

module.exports = {
    verifyMessSh, getSecretKeySh
}