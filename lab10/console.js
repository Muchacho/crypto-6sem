function getModul(c, e, n, r){
    if(e == 0) return r;
    let ret = (c * r) % n;
    return getModul(c, e - 1, n, ret);
}

function qwe(){
    let a = [12, 32];
    let x = [1087, 2153, 3967, 10399, 14831, 24023, 32257];
    let n = 9007199254740991n

    for(let i in a){
        for(let j in x){
            let start = performance.now();
            let k = getModul(10, 1009, 43219, 1);
            let finish = performance.now();
            console.log(`a: ${a[i]}, x: ${x[j]}, k: ${k}, time: ${finish-start}`);
        }
    }
}

qwe();
// console.log(getModul(4, 4, 13, 1));

