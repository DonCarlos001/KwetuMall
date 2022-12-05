// let toppings=['cheese', 'ham', 'pineapple', 'bacon'];
// function logTopping(topping){
//     console.log(topping)
// }
// toppings.forEach(logTopping)

// const names=['Carlos', 'John', 'George', 'Steve']
// function addLastName(name){
//     return`${name} Don`
// }
// const toys=names.map(addLastName);
// console.log(toys);

// const firstNames=['victor','David']
// const lastNames=['maina', 'waweru']
// const fullName= firstNames.map((firstName)=>{
//     lastNames.map((lastName)=>{
//         return`${firstName} ${lastName}`
//     })
// })
// console.log(fullName)

// const students=[
//     {
//         id:"abc",
//         firstName:"john",
//         lastName:"mwangi",
//         age:5,
//     },
//     {
//         id:"def",
//         firstName:"peter",
//         lastName:"kim",
//         age:6,
//     },
//     {
//         id:"ghi",
//         firstName:"Greg",
//         lastName:"mwas",
//         age:7,
//     },
//     {
//         id:"jkl",
//         firstName:"Anne",
//         lastName:"stew",
//         age:8,
//     },
//     {
//         id:"mno",
//         firstName:"Robert",
//         lastName:"maina",
//         age:9,
//     },
//     {
//         id:"pqr",
//         firstName:"Mike",
//         lastName:"Omondi",
//         age:10,
//     },
//     {
//         id:"ijk",
//         firstName:"Esther",
//         lastName:"Mukami",
//         age:11,
//     },
//     {
//         id:"xyv",
//         firstName:"Sharon",
//         lastName:"Mukami",
//         age:12,
//     },
//     {
//         id:"xyz",
//         firstName:"Brian",
//         lastName:"imah",
//         age:13,
//     }
// ]
//   function getStudentUnder10(student){
//     if(student.age<10){
//         return true
//     }
//     else{
//         return false
//     }
//   }
//   let studentUnder10= students.filter(getStudentUnder10)
//   console.table(studentUnder10)

// const uniqueStudent = students.find(student=>student.id==="abc")
// console.log(uniqueStudent)

// const numbersAndStrings=[1, 2, 3,'boy', 'girl', 7, 8]
// let getNumbersOnly=(numbers)=>{
//     if(typeof(numbers)==='number'){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let numbersOnly= numbersAndStrings.filter(getNumbersOnly)
// console.log(numbersOnly)
// let poweredNumbers=numbersOnly.map((number)=>{
//     return number*number
// })
// console.log(poweredNumbers)
// let values=poweredNumbers.join("")
// console.log(values)

// const orderTotal=[342,1002,523,34,634,854,1644,2222]
// function sumArray(array){
//     let sum=0;
//     array.forEach(item=>{
//         sum+=item;
//     })
//         console.log(sum);
//         return sum;
//     }
//     sumArray([342,1002,532,34,634,854,1644,2222])

// const orderTotal=[342,1002,523,34,634,854,1644,2222]
// let sum= orderTotal.reduce((a, b)=>a+b)
// console.log(sum)

const values=[1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]
let positiveNumbers=(numbers)=>{
    if(numbers>0){
           return true
        }
        else{
         return false
        }
 }
 let posNum= values.filter(positiveNumbers)
 console.log(posNum)

 let negativeNumbers=(numbers)=>{
    if(numbers<0){
           return true
        }
        else{
         return false
        }
 }
 let negNum= values.filter(negativeNumbers)
 console.log(negNum)

 let sum=negNum.reduce((a, b)=>a+b)
 console.log(sum)
let count= posNum.length
console.log(count)
let value=[(count) ,(sum)]
console.log(value)
// let answer= value.join()
// console.log(answer)