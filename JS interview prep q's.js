
//in web browsers the window object is also the global object
console.log(this === window);

d = 42;
console.log(window.d);

this.c = "cat";
console.log(c);
console.log(window.c);



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

//what does 'this' keyword mean?
//this keyword is available in any function and points to the object that contains this function

const myObject = {
    a: "a",
    b: "b",
    doSomething: function() {
        console.log(this.a + this.b);
    }
}

myObject.doSomething(); //"ab"

//nb does not work on arrow function
const myObject2 = {
    e: "c",
    f: "d",
    doSomethingMore: () => console.log(this.e, this.f) //undefined
};

myObject2.doSomethingMore();

//constructor function
//constructor function is called with new keyword and returns the value of this, does not point to outer object,
//used as placeholder object

function Animal(name, type) {
    this.name = name;
    this.type = type;
    //do not need to return as automatically returned
}

const myPet = new Animal("Prince", "cat");
console.log(myPet.name);


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