//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  return false
}

//////////////////PROBLEM 2////////////////////

function getName() {
  return prompt("What is your name?");
}

//////////////////PROBLEM 3////////////////////

  function welcome() {
    alert("Welcome, " + getName());
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

var ans = "The argument is the actual value passed into the function when it is called. The parameter is the variable(s) used to represent the arguments passed in."

//////////////////PROBLEM 5////////////////////

//What are all the falsy values in JavaScript and how do you check if something is falsy?

var answer = 'false, NaN, null, 0, "", undefined.'

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
    return "Fernando"    
  }
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return "Fernando";
  } 
}
//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();