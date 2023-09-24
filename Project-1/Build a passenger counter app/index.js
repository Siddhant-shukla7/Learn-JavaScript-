//Here i have mentioned step by step approach to design the app

//document.getElementById("count").innerText = 5;

// let count = 0;

// console.log(count);

// function increment() {
//     console.log("The button was clicked");
// }
//o/p-"The button was clicked"

// function name(){
//     console.log("42");
// }
// name()
//o/p- 42


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function sum(){
//     console.log(lap1 + lap2 + lap3);
// }

// sum();
// o/p- 103

// let lapsCompleted = 0;

// function lapsCounter(){
//     lapsCompleted += 1;
//     console.log(lapsCompleted);
// }
// lapsCounter();
// lapsCounter();
// lapsCounter();

//o/p- 1 2 3


// let countEl = document.getElementById("count-el");
// // console.log(countEl);
// let count = 0;

// function increment(){
//     count += 1;
//     countEl.innerText = count;
// }
// // o/p- clicked   1
// // o/p- clicked   2


// function save(){
//     console.log(count);
// }
// save();


// let messageToUser = ('Hi this is Siddhant Shukla');
// console.log(messageToUser);


// let name = "Siddhant Shukla";
// let greeting = "Hi, my name is ";
// let myGreeting = (name + " " + greeting);
// console.log(myGreeting);

// String always wins in the competetion b/w the ingeter and string

// let points = 10;
// let bonusPoints = "10";
// let total = points + bonusPoints;
// console.log(total);
// o/p: 1010

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Siddhant Shukla";
// let greeting = "Welcome Back ";
// welcomeEl.innerText = greeting + name;
//o/p: Welcome Back Siddhant Shukla


// let welcomeEl = document.getElementById("welcome-el");
// let name = "Siddhant Shukla";
// let greeting = "Welcome Back ";
// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText = welcomeEl.innerText + " Emoji (^)"
//o/p: Welcome Back Siddhant Shukla Emoji (^)


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0; 

console.log(saveEl);

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    //saveEl.textContent += countStr
    console.log(count);
    count = 0;
    countEl.textContent = 0;
}

