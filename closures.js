/** combination of a function and the environment in which it is contained
 * we need closures whe a variable which is defined outside of scope is accessed from some inner scope
 * closure is way to maintain some variables in between calls to the function
 * closure has access to its own scope, outer functions variable and global variables
 * it allows an inner function to access an outer function's scope even when the outer function has aready returned
 */

//closure creator --each function creates a new scope, variables defined inside a function are not visible from the 
//outside of the function
//these are often called private variable and they are created by using closure
//use private variables to hide info and using them to affect the logic of other parts of the code
function createPassword(password) {
    //newpassword is local to function, can't be seen outside the function
    //but can be seen in the function below
    let newpassword = password;
    //declare new function within
    //closure -- NOT CALLING BUT DECLARING A NEW FUNCTION
    return function checkPassword(guess) {
        return guess === newpassword;
    }
}
//creating a closure and declaring a new function checkPassword which will be stored in bankAccount
const bankAccount = createPassword("cat");
//can check if password is valid, but can't actually see the password
console.log(bankAccount("cat")); //true
console.log(bankAccount("123"));  //false

//closure creator
function totalSum(num) {
    //private scope remembers num
    //returns a closure
    return function(num2) {return num + num2};
}

const tenPlus = totalSum(10);
console.log(tenPlus(7)); //17

//can use the same code to create new closure
const twentyPlus = totalSum(20);
console.log(twentyPlus(5)); //25

//closure creator
function createAccount(num) {
    //define hidden variable that will be maintained in the closure
    let balance = num;
    //closure
    return function(newbalance) {
        balance += newbalance;
        return balance > 0 ? "All good" : "Overdrawn";
    }
}

const checkAccount = createAccount(300);
console.log(checkAccount(50)); //All good
console.log(checkAccount(-500)); //Overdrawn



function shoppingCart() {
    //private variable
    let items = [];
    function scanItem(item) {
        items.push(item);
        return "Added to cart"
    }
    function totalItems() {
        return items.length;
    }
    return {
        scanItem,
        totalItems
    }
}

const myCart = shoppingCart();
console.log(myCart.scanItem("milk")); //added to cart
console.log(myCart.items); //undefined --unable to access as private variable
console.log(myCart.totalItems()); //1


