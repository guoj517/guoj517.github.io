const constantVariable = "canbechanged"

let dynamicVariable ="cannotbechanged"

console.log

const thisIsAString ="Anything tat is text between quotes"

const integer = 15

const float = 3.1234567

const boolean = true/false

const array = [1, "hello", 3.2, false]

const object = {
    info1: "name",
    info2: 10
}

//Operators: +, -, *, /, % //

const firstName = "A"
const lastName = "B"
const fullName = firstName + "  " + lastName

//Conditionals ==, ===, >, <, >=, <=//

const username = "Ian"

if(username == "Ian") {
    console.log("User is Ian")
} else {
    console.log("you must be Ian to log in")
}

if(password === 1234){ 
}

const smallNumber = 1234
const bigNumber = 5678

if (smallNumber < bigNumver){
    console.log("Small number is smaller than big number")
}else{
    console.log("Small number is not smaller than big number")
}

//Functions //

function multiplyByTwo () {
}

//or//

const multiplyByTwoDifferentSyntax = function(){}

//or//

const multiplyByAnotherSyntax = function(){}

///////////

const multiplyByAnotherSyntax = function(input){
    return input * 2
}

const A = 1
const B = 2
const C = 3

const D = multiplyByAnotherSyntax (A)
const E = multiplyByAnotherSyntax (B)

//methods//

const lowercaseString = "this is a lowercase string"
const uppercaseString = lowercaseString.toUpperCase 

//loops//

let str = '';

for (let index =0; index < 9; index++){
    str=str+index;
}
/////////////
const names = ["A", "B", "C", "D", "E"]

console.log(names[0])

for (let index =0; index < names.length; index++){
    console.log(names[index])
}

//or//
names.forEach(function(name){
    console.log(name)
})

//////////
button.addEventListener('click', buttonClicked)
const button = document.getElementById("add-class")
const newElement = document.createElment('li')
newElement.classList.add("New Class")
