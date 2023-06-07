function doBBS(p,q, iter){
    if(p%4!=3 || q%4!=3)throw new Error('wrong p or q');
    let n = p*q;
    console.log(factors(n));
    let x = findX(factors(n));
    let resArr = [], resArrBin = [];
    for(let i = 0; i < iter; i++){
        resArr[i] = Math.pow((i == 0 ? x : resArr[i - 1]), 2) % n;
        resArrBin[i] = resArr[i] % 2;
    }
    return [resArr, resArrBin];
}


function factors(a, arr = [], b = 2) {
    if (b > Math.sqrt(a)) {
      arr.push(a);
      return arr;
    } else if (a % b == 0) {
      arr.push(b);
      factors(a / b, arr, b);
    } else {
      factors(a, arr, ++b);
    }
    return arr;
}

function findX(nFactor){
    let isRightX = false, a = true;
    let x = 1, xFactor;
    while(!isRightX){
        x++;
        xFactor = factors(x);
        console.log(xFactor);
        for(let i = 0; i < xFactor.length; i++){
            for(let j = 0; j < nFactor.length; j++){
                if(xFactor[i] == nFactor[j]){
                    a=false;
                    break;
                }
            }
            if(!a)break;
        }
        if(a){
            return x;
        } else {a = true};

    }
}


module.exports = {
    doBBS:doBBS
}

