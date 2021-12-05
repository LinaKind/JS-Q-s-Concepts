let arr = ["John", "Mary", "Joe"];

//__proto__ is the object where JS engine automatically attaches properties/methods
//prototype chain
console.log(arr.__proto__.forEach); //function forEach
console.log(arr.__proto__); //Array []
console.log(arr.__proto__.__proto__); //Object { ... }
console.log(arr.__proto__.__proto__.__proto__); //null

//User object constructor

// function User(name, age) {
//     this.name = name,
//     this.age = age
// }

//create objects of User

// const user1 = new User("John", 25);
// const user2 = new User("Rob", 30);
// console.log(user1);
// console.log(user2);

//to add new property to the User object we have to add it to its prototype before creating objects so available to
//all User objects

// User.prototype.gender = "male";
// const user1 = new User("John", 25);
// const user2 = new User("Rob", 30);
// console.log(user1.gender);//male
// console.log(user2.gender); //male

//same way will add methods

// User.prototype.displayInfo = function () {
//     console.log(this.name, this.age);
// }

// const user1 = new User("John", 25);
// const user2 = new User("Rob", 30);
// user1.displayInfo(); //John 25
// user2.displayInfo(); //Rob 30

//add any property or method to an object need to add it to its prototype

// console.log(user1.displayInfo === user2.displayInfo); //true

//above logs true as only one copy of displayInfo in memory
//BUT if added straight to costructor above would display false as everytime a new object is created
//it will have its own copy of the method --> that will increase memory consuption so should avoid creating
//functions inside constructor and instead add them to prototype

// function User(name, age) {
//     this.name = name,
//     this.age = age,
//     this.displayInfo = function () {
//         console.log(this.name, this.age);
//     }
// }

// const user1 = new User("John", 25);
// const user2 = new User("Rob", 30);
// console.log(user1.displayInfo === user2.displayInfo); //false


//new Employee constructor function which will inherit the properties and methods of User

// function Employee(name, age, type) {
//     User.call(this, name, age);
//     this.type = type;
// }

// const employee1 = new Employee("Tom", 23, "waiter");
// console.log(employee1);
// //nb did not inherit displayInfo method as not called to inherit
// employee1.displayInfo(); //employee1.displayInfo() not a function

//to inherti methods also, link the prototype and then create an object

// Employee.prototype = Object.create(User.prototype);
// const employee1 = new Employee("Tom", 23, "waiter");
// employee1.displayInfo();


/** ES6 CLASS Syntax**/

class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    displayInfo() {
        console.log(this.name, this.age)
    }
}

class Employee extends User {
    constructor (name, age, type) {
        super(name, age);
        this.type = type;
    }
}

const employee1 = new Employee("Tom", 23, "waiter");
console.log(employee1);//object {...}
employee1.displayInfo();//Tom 23
console.log(employee1.constructor); //class Employee {constructor(name, age, type)}