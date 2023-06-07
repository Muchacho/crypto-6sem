let cb = 13, p = 23, g = 5;

function getSecretKey(request, responce){
    let db = Math.pow(g, cb)%p;
    // console.log(db);
    responce.end(JSON.stringify({db: db}));
}



const verifyMessAG = (request, response) => {
    // console.log('1');
    // console.log(request.body.data);
    let start = performance.now();
    let isRes = false;
    isRes = request.body.data[1][request.body.data[1].length - 1] == ag_decip(request.body.data[0]) ? true : false;

    let end = performance.now();
    console.log('ag - time : ' + (end-start));

    return response.end(JSON.stringify({mess:isRes}));
    // return response.end(JSON.stringify({mess:false}));
}

function ag_decip(cip){
    let result;
    // console.log(cip)
    result = (cip.e * Math.pow(cip.r, p - 1 - cb))%p;
    // console.log(result,1);
    return result;
    // responce.end(JSON.stringify({result: result}));
}

module.exports = {
    verifyMessAG, getSecretKey
}