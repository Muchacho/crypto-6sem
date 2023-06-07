// const { response } = require("express");

// // let p = 23, g = 5;


// // function ag_c(request, responce){
// function ag_c(mess, cb){
//     let db = (g^cb)%p;
// }

// function ag_c1(m, db){
//     let k = getRandomInt();
//     console.log(k);
//     k = 7;
//     console.log(k);

//     let r = (Math.pow(g,k))%p
//     let e = (m * Math.pow(db,k))%p;
//     return {r, e};
// }

// function qwe(r, e, cb){
//     let ms = (e * Math.pow(r, p-1-cb))%p;
//     console.log(ms);
// }


//   console.log(ag_c1(15, 21));
//   qwe(17, 12, 13);



let cb = 13, p = 23, g = 5;

function getSecretKey(request, responce){
    let db = Math.pow(g, cb)%p;
    console.log(db);
    responce.end(JSON.stringify({db: db}));
}

function ag_decip(request, responce){
    let {data} = request.body;
    let result = [];

    for(let item in data){
        result.push(
            (data[item].e * Math.pow(data[item].r, p - 1 - cb))%p
        )
    }
    responce.end(JSON.stringify({result: result}));
}

module.exports = {
    getSecretKey,
    ag_decip
}



// function convertTo(str){
//     let result = [];
//     for(let i = 0; i < str.length; i++){
//         result.push(String(str[i]).charCodeAt());
//     }
//     return result;
//     }

//     console.log(convertTo('abcd'))

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'
//         , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//         function convertTo(str){
//             let result = []
//             for(let item in str){
//                 for(let item1 in alphabet){
//                     if(str[item] == alphabet[item1]){
//                         result.push(item1);
//                     }
//                 }
//             }
//             return result;
//         }
// console.log(convertTo('buturlia'))