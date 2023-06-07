const n = 401, m = 367;

function firstTask(){
    var isPrime = true;
    var primeNumbers = [];
    console.log('task 1');
    for(let i = 2; i < 3780; i++){
        for(let j = 2; j <= i / 2; j++){
            if(i % j == 0) isPrime = false;
        }
        if(isPrime) primeNumbers.push(i);
        isPrime = true;
    }
    console.log('Prime numbers: ' + primeNumbers);
    console.log('Count: ' + primeNumbers.length);
    console.log('n/ln(n): ' + n/Math.log(n));
}

firstTask();

function secondTask(){
    var isPrime = true;
    var primeNumbers = [];
    console.log('\ntask 2');
    for(let i = m; i < n; i++){
        for(let j = 2; j <= i / 2; j++){
            if(i % j == 0) isPrime = false;
        }
        if(isPrime) primeNumbers.push(i);
        isPrime = true;
    }
    console.log('Prime numbers: ' + primeNumbers);
    console.log('Count: ' + primeNumbers.length);
    console.log('n/ln(n): ' + (n-m)/Math.log(n-m));
}

secondTask();

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
  function x(a){
    let x = factors(a);
    let obj = {};
    for(let i = 0; i < x.length; i++){
        obj[x[i]] = 0;
    }
    for(let i = 0; i < x.length; i++){
        obj[x[i]]++;
    }
    var str = '';
    for(let key in obj){
        if(obj[key] != 1) str+= '*' + key + '^'+obj[key];
        else str+= '*' + key;
    }
    // console.log(str.slice(1));
    return str.slice(1);
  }

function thirdTask(){
    console.log('\ntask 3');
    let q = x(2770);
    let y = x(m);
    console.log(n + ': ' + q);
    console.log(m + ': ' + y);
}

thirdTask();

function fourTask(){
    console.log('\ntask 4');
    var x = +(m.toString() + n.toString());
    var isPrime = true;
    for(let i = 2; i <= x/2; i++){
        if(x % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(x + ' isPrime? ' + isPrime);
}

fourTask();

function fiveTask(){
    console.log('\ntask 5');
    let a = n, b = m;
    while (a!=b) {
        if (a>b) {
          a = a -b;
        }
        else {
          b = b - a;
        }
    }
    console.log('НОД: ' + a);
}

fiveTask();

