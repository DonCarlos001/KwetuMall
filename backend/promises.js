// console.log('starting');
// setTimeout(function(){
// console.log('Run me')
// },20000);
// console.log('Ending');


// onMyBday(true)
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log('we will still have lunch')
//     })
// console.log(onMyBday(true))

// onMyBday(true).then((result)=>{
//         console.log('hello')
//         console.log(result)
//     })
// let result=async()=>{
//     let b = await onMyBday(true)
//     console.log(b)
// }
// result();

// const onMyBday = (isOfferAvailable) => {
//     // console.log('calling function');
//     return new Promise((resolve, reject) => {
//         setTimeout=(()=> {
//             if(isOfferAvailable==true){
//                 resolve('yay, ill eat chicken today')
//             }else{
//                 reject(new Error('i am sad'))
//             }
//         },2000);
//     });
// };

// const onMyBday = (isOfferAvailable) => {
//     return new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//     if(isOfferAvailable == true){
//         resolve('Yay, I’ll eat chicken today!')
//     }else{
//         reject(new Error('I am sad'))
//     }
// }, 2000);
// });
// };
// console.log(onMyBday(true));

// let result = async() => {
//     let b =   await onMyBday(true);
//     console.log(b);
//     return b;
// }
// console.log(result());

const Game= ()=>{
// let num= Number(window.prompt('enter a number between 1-6'));
let num=[3]
let systemNumber=Math.floor(Math.random()*6)
return new Promise((resolve, reject)=>{
    // if(typeof(num)==='number'){
    // resolve('ok')
    // }else{
    // reject(new error('wrong input type'))
    // }
    setTimeout(()=>{
     if(num==systemNumber){
    resolve('2 points')
    }else {
     reject(new Error('0 points'))
    }
    }, 2000)
    })
}
Game()
let result=async()=>{
    let b= await Game()
    console.log(b)
}