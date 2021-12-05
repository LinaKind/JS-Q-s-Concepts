//function declaration uses the keyword function followed by the name function
//function expresion begins with let/const followed by the name of the function and the assignment operator =

//function declaration

function sumTwo(x, y) {
    return x + y;
};

//function expresion ES5

var sumTwoES5 = function(x, y) {
    return x + y;
};

//function expression ES6

const sumTwoES6 =(x,y) => {return x + y};

//function declarations are hoisted while expressions are not
//function declarations are moved to the top of their scope --> meaning you can define a function declaration 
//and call it anywhere in your code
//function expression can only be called in linear sequence --> you have to define it before you call it
