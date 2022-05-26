
// let count = 0

// let countEL = document.getElementById('count-el')

// console.log(countEL)

// function increment(){
//  count += 1
//  countEL.innerText = count
//  console.log(count)
// }


let score = 0

let scoreDoc = document.getElementById('count-el')

function increment(){
 score += 1
 scoreDoc.innerText = score
}

let count = 0

let saveBtn = document.getElementById('render')
function save() {
//  saveBtn.innerText += " " + score + ", " 
 saveBtn.innerText += " " + score
 console.log(count)
 
}





let A = "Hello"
alert("Hello")
let firstName  = prompt(" input your firstName ")
// let middleName = prompt(" input your middleName ")
let lastName = prompt(" input your lastname ")  
// let  fullName = firstName + " " + middleName + " "+ lastName
console.log(firstName)
alert("hello " + firstName )
let B = "Welcome"
let timeOfDay = Number(prompt("welcome, what hour of the day is it?"));
console.log(timeOfDay)
if (timeOfDay>4&&timeOfDay<12) {
    alert("Good Morning " + firstName)
}
else if (timeOfDay>12 &&timeOfDay<16){
    alert("Good Afternoon "+ firstName)
}
else if (timeOfDay>16||timeOfDay<4) {
    alert("Good Evening " + firstName)
}

