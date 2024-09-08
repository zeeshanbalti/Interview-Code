//     Array Class


// var a = [1,2,3,4,5,6,7,"zee" ,false ,null]
// for(let i = 0 ; i <  a.length ; i++){

//     console.log(a[i])
// }
 

// Array Methord

let arrayMth = [123,212,3,423,5,6 ,7];

// console.log(arrayMth)

let string = arrayMth.toString(); //   toString method convert array to string  

let join = arrayMth.join();   // JOin methord join the element of an array to the given things

 let pop = arrayMth.pop() // Pop method return the POp element
 
 let push = arrayMth.push(786)  //Push return the new array lenght

 let shift = arrayMth.shift() // Remove an element from starting of an array

let unShift = arrayMth.unshift(12) // Add a new array starting of an array and return the new array element

let sort = arrayMth.sort() //Sort method is used to sort the array by Alphabatically

let compare = (a , b) => {
return a - b 
}
arrayMth.sort(compare)  ,arrayMth; // Compare function is used to sorting the array without alphabatically

let myArray = [1, 21, 3, 8, 5];

// Add elements at index 2
// let deletedVAlues =  myArray.splice(2, 2, 'a', 'b'); // Splice is used to add and deleter the element

// let newSlice = myArray.slice(2 ,4) //Slice cn create a new array 
// console.log(newSlice)

// ============= For each loop ============

myArray.forEach((element) => {
    // console.log(element*element)
})

// ======== Array.form =============

let name1 = "zeeshan";

let nam2 = Array.from(name1)
// console.log(nam2)

// ============  For of ===========

for(i of myArray){
    // console.log(i)
}


// =========  For in ===========

// for(item in myArray){
//     console.log(myArray[item])
// }


// ============== Clouser 1

// function x() {
//     for(var i = 1; i <= 5; i++){
//         function cl(i){
//             setTimeout( () => {
//             console.log(i)
//             }, i * 1000);
//         };
//         cl(i)
//     }
//     console.log("han Balti")
// }
// x()


// ===========Closer 2 

// function j() {
//     for(var j = 1; j <= 5; j++){ 
//             setTimeout( () => {
//             console.log(j)
//             }, j * 1000);
//         }; 
//     console.log("han Balti")
// }
// j()


// ===========Closer 3 

// function k() {
//     for(let k = 1; k <= 5; k++){ 
//             setTimeout( () => {
//             console.log(k)
//             }, k * 1000);
//         }; 
//     console.log("han Balti")
// }
// k()



// ======== Call Back 

// setTimeout( function() {
//     console.log("Timer...")
// }, 3000)

// function x(z) {
//     console.log("X....")
    
// z();
// }
// x(function y() {
//     console.log("Y....")
// });



// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback(); // Executing the callback function
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data");
// }

// fetchData(processData)



// console.log("Start");

for (let i = 0; i < 1e9; i++) {
    // console.log(i)
}

// console.log("End");



function clickButton  () {
    let count = 0;
    document.getElementById("btn").addEventListener("click", () => {
        count++;
        console.log(`Button Clicked ${count} Time`)
    });
};
clickButton()