
//difference between var and let = var is function scoped and let is block scoped in this instance a will be undefined
function tryMe(num) {
    if (num > 5) {
        let a = num;
        var b = num;
    }

    //console.log(a);
    console.log(b);
    //return `${a} + ${b}` 
}

console.log(tryMe(10));

//difference between == and === 
//with == JS engine allows type coercion and in === instance does not
console.log(5 === "5")
console.log(5 == "5") //string is converted to a number
console.log(1 == true) // true converted to 1
console.log(1 === true);
console.log(true == "true") // Number("true") = Nan Number(true) converted to 1

//Nan === Nan -> false
//just because both not a number does not mean that the type will match

let num = 7;
let newname = "John";
//how to check if variable is not Nan?
console.log(isNaN(num)); //false as it is num
console.log(isNaN(newname));//true
//n.b if using isNaN will need to do further checks, i.e
console.log(isNaN('123')); //false


//on floats -> is 0.1 + 0.2 === 0.3  -> false
console.log(0.1 + 0.2 === 0.3); //false
let thissum = 0.1 + 0.2;
console.log(thissum) // 0.30000000004

//output of the below code

function TryMe() {
    return 
    {
        cat: "Prince"
    }
}
console.log(TryMe()); //undefined unreachable code
//JS will inject semicolong after return on line 91 and treat 92-94 as scope rather than object definition
function TryMe2() {
    const newobj = {
        cat: "Prince"
    }

    return newobj;
}

console.log(TryMe2()); //Object {cat: "Prince"}


//convert a string to an int

//parseInt converts to a whole number
console.log(parseInt("30"));
//parseFloat converts to a pointnumber with a decimal
console.log(parseFloat("55px"));
console.log(parseFloat("2.79"));
//can also use Number() converts a string to a number 
console.log(Number("12"));


//typeof operator returns a string indicating the type of the operand
console.log(typeof(122)); //number
console.log(typeof("Hi")); //string
console.log(typeof({name: "Jane Doe"})); //object
console.log(typeof(true)); //boolean

//default function parameters -> allow named parameters to be initialized with default valurs if no value or undefined
//is passed

function sumOfTwo(x, y=1) {
    return x + y;
}

console.log(sumOfTwo(10, 10)); //20
console.log(sumOfTwo(1)); //2


//why is JavaScript called a loosely typed/dynamic language
//variables are not directly associted with any value type and any variable can be assigned and reassigned values
//of all types

let someVariable = 10;
console.log(someVariable);
someVariable = "Now I am a string";
console.log(someVariable);
someVariable = true;
console.log(someVariable);


//two ways to make functions

function one() {
    console.log("Normal fuction");
}

const two = () => {
    console.log("Arrow function");
}

//Math.pow() retur the base to the exponent power, as in base^exponent

console.log(Math.pow(2, 2)); //4
console.log(Math.pow(7, 3)); //343