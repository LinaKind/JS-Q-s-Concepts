//have the function return 1 if mean of array matches mode and 0 if does not
const arr = [5, 3, 3, 3, 1];

//function to find mean of an array

const findMean = (arr) => {
    return (arr.reduce((a,b) => a+b)/arr.length);
}


console.log(findMean(arr));

//find mode 

function findMode(arr) {
    let obj = {};
    arr.map(num => {
        obj[num] = (obj[num] || 0) + 1;
    })

    const sorted = Object.keys(obj).sort((a, b) => obj[a] -obj[b]);
    const mode = sorted.slice(-1);
    if (+mode === findMean(arr)) {
        return 1;
    } else {
        return 0;
    }
}


console.log(findMode(arr));

//OR

function findModeOtherWay(arr) {
    let obj = {}, max =1, mode;
    arr.map(num => {
        obj[num] = (obj[num] || 0) + 1;
    })
    for (let y in obj) {
        if (obj[y] > max) {
            max = obj[y];
            mode = y;
        }
    }
    if (+mode === findMean(arr)) {
        return 1;
    } else {
        return 0;
    }
}

console.log(findModeOtherWay(arr));