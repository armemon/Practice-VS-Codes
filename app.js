// var plan2 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
// }
// console.log(plan2.hasOwnProperty("price"))
// object constructor
// function Plan(name, price, space) {
//     this.hi = "hi"
//     this.name = name,
//         this.price = price,
//         this.space = space
//     this.calcAnnul = this.calcAnnual(0.8)
// }
// Plan.prototype.calcAnnual = function (percentIfDisc) {
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     bestPrice = this.price * percentIfDisc;
//     return bestPrice * 12;

// };

// var plan1 = new Plan("Rahman", 8000, "re")
// console.log(plan1)
// // ES6 class constructor
// class Student {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
// }
// class School extends Student {
//     constructor(name, email, school) {
//         super(name, email)
//         this.school = school
//     }
// }
// let student1 = new School("AR", "ARM@gamil.com", "NED")
// console.log(student1)
// function savedata(){
//     var name= document.getElementById("name")
//     var roll= document.getElementById("roll")

//     var student={
//         name:name.value,
//         roll: roll.value
//     }
//     console.log(student)
//     // getDatabase().ref('student').set(student)
// }
// console.log(getDatabase())


// //Arrow Function    ,   this targets function parent instead of itself
// var hello = (name) =>`hello ${name}` //backtick`, template literal
// // function_name = (inputs) => return

// var foo = he => {        //function as input not import if same name is written
//     console.log("hi")
//     console.log(he("AR"))
// }
// foo(hello) //^

// function function3(){console.log("Hello")}
// time=1000
// setinterval_walafunction = setInterval(function3,time)
// // setTimeout(function3,time*3)

// //in any function or condition
// clearInterval(setinterval_walafunction)

// //filter
// var arr =[{name:"Abdul", age:15},{name:"Rahman", age:20},{name:"Memon", age:30}]
// let filter_array = arr.filter(array_as_input => array_as_input.age>20)  //Higher order function, inout of callback fn is given by this function in this case it is arr
// console.log(filter_array)
// //map
// let arra=[2,4,6,8]; console.log(arra)
// let multiply = arra.map(a => a>5)       //same as filter but instead of checking condition it iterate loop
// console.log(multiply)
// //Search
// console.log("Abdul Rahman MEmon".startsWith("Abul")) //endsWith

// //Destructuring
// var student = {
//     name: "ghous",
//     school: "saylani",
//     roll: 123
// }
// let { school, roll } = student;
// console.log(student)
// console.log(school)

// Ternary Operators
// var age = 40; 
// var check = 
// age > 30 && age < 50 ? 
// "30 se bara hai" 
// :
// "30 se chota hai";

// var bool = false;
// var name = bool && 37;
// console.log(name)

// //Promise
// var promise = new Promise(function (resolve, reject) {     //promise will wait for response as it is resoled or reject
//     if (true) {
//         setTimeout(() => {
//             resolve("It's resolve")      //if condition is true resolve input will returned to .then callback func input
//         }, 3000)
//     } else {                              //if condition is false reject input will returned to .catch callback func input
//         reject("Reject")
//     }
// })

// console.log(promise)
// promise.then(function (data) {          // promise.then and catch are always written in this format
//     console.log("Resolve==>", data)
// })
//     .catch(function (error) {
//         console.log("Error==>", error)
//     })

// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){        // promis will wit for data to come
//         if(data.val()){
//             resolve(data.val())

//         }else{
//             reject("something went wrong")
//         }
//     })
// })
// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })

// //Assyn await
// //fetch
// async function getData() {
//     let promise = new Promise(function (resolve, reject) {      //promise will wait and also get daat outside fetch
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(function (data) {
//                 resolve(data)
//             })
//             .catch(function (err) {
//                 reject(err)
//             })
//     }
//     )
//     let data = await promise            //direct assignment will give undefined in case of using server or database
//     console.log(data)
// }
// getData()


// //push and localstorage             for e-shoping
// arr = []
// arr.push(product)               //push product(any thing) in arr
// localStorage.setItem("Cart",arr)        // to save arr in local storage
// //Firebase
// function savedata() {
//     var name = document.getElementById("name")
//     var roll = document.getElementById("roll")
//     var key = firebase.database().ref('student').push().key //this is not pushed in database,,,, Push always is set in a new key folder
//     console.log(key)

//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref('student/' + key).set(student) //Thsi is set in database
// }


// // // Onloadd once
// // function getFirebaseData() {
// //     firebase.database().ref('student').once('value', function (data) {
// //         console.log(data.val())
// //     })
// // }
// // getFirebaseData()


// // When new data is added real time
// function getFirebaseDataon() {
//     firebase.database().ref('student').on('child_added', function (data) {      //for every object each time it is run
//         console.log(data.val())
//     })
// }
// // getFirebaseDataon() //No need to call but when called work as once

// function removeFirebaseData() {
//     firebase.database().ref('student/' + key).remove()        //set key in ID attribute
// }

// function editFirebaseData() {
//     firebase.database().ref('student/-MEJHRGtxXzUJn5op-FN').set({
//         key: '-MEJHRGtxXzUJn5op-FN',
//         name: "basit",
//         roll: '123'
//     })
// }
// key = Math.random() * 100
// console.log(key.toFixed())

