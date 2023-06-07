function mod(x, y){
    let fX = factors(x), fY = factors(y), isRight = true;
    for(let key in fX){
        if(fY[fX[key]])isRight = false;
    }
    console.log(isRight);
    if(!isRight)throw new Error('НОД элементов не равен 1');
    let k = 0, obj = {}, m = 1, arr = [];
    while(k !=1){
        while(m*x < y){
            m++;
        }
        obj[x] = m - 1;
        k = (x * (m-1)) % n;
        arr[i] = 1;
    }
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
function getFactors(a){
    let x = factors(a);
    let obj = {};
    for(let i = 0; i < x.length; i++){
        obj[x[i]] = 0;
    }
    for(let i = 0; i < x.length; i++){
        obj[x[i]]++;
    }
    console.log(obj);
    return obj
}

function x(x,w){
    let k = x, m = 0, i = 0;
    let arr = [];
    while(k > 2){
        console.log(k);
        while(m * x < w){
            m++;
        }
        m--;
        k = w - (x * (m));
        arr[i] = [w, x, m, k];
        i++; m = 0;
        w = x;
        x = k;
    }
    console.log(arr);
}
x(54, 1234);

function y(arr){
    for(let i = arr.length-1; i >= 0; i--){
        
    }   
}
y([[ 1234, 54, 22, 46 ], [ 54, 46, 1, 8 ], [ 46, 8, 5, 6 ], [ 8, 6, 1, 2 ]]);

// let m = 0, x = 2, w = 6, k = 0;
// while(m * x < w){
//     m++;
// }
// m--;
// k = w - (x * (m));
// console.log(m, x*m, k)

// console.log(mod(44, 160));