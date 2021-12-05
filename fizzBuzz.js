
// const fizzBuzz = () => {
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

//shorter

// const fizzBuzz = () => {
//     for (let i =1; i <= 100; i++) {
//         if (i % 15 === 0) console.log("FizzBuzz");
//         if (i % 3 === 0) console.log("Fizz");
//         if (i % 5 === 0) console.log("Buzz");
//         else console.log(i);
//     }
// }
//using switch statements

// const fizzBuzz = () => {
//     const hundred = [];
//     hundred.length = 101;
//     hundred.fill("");
//     hundred.forEach((num, i) => {
//         switch (true && i !== 0) {
//             case i % 15 === 0:
//                 console.log("FizzBuzz");
//                 break;
//             case i % 3 === 0:
//                 console.log("Fizz");
//                 break;
//             case i % 5 === 0:
//                 console.log("Buzz");
//                 break;
//             default:
//                 i !== 0 ? console.log(i) : null;
//                 break;
//         }
//     });
// }

//shortest (and mental)

const fizzBuzz = () => {
    for (let i = 0; i < 100;) {
        console.log((i++ % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
    }
}


fizzBuzz();