//in web browsers the window object is also the global object
console.log(this === window);

d = 42;
console.log(window.d);

this.c = "cat";
console.log(c);
console.log(window.c);

//implicit binding -> value of this got bound to an object
function myFunction() {
    console.log(this);
}
myFunction(); //will point to window as nothing else in the context

const thisObj = {
    bool: true,
    myFunction: myFunction
}
console.log(thisObj.myFunction()); //prints the object

//explicit binding is when you force a function to use a certain objecy as its this

const someData = {
    name: "John",
    surname: "Doe",
    displayfullName: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

const someNewData = {
    name: "Jane",
    surname: "Doe"
}

console.log(someData.displayfullName());
console.log(someData.displayfullName.call(someNewData));


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

//nb does not work on arrow function - arrow function inherit the parent's context (above would be window)
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