
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