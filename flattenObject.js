const obj = {
    name: "Jane Doe",
    personal_info: {
        age: "32",
        nationality: "English"
    },
    address: {
        city: "London",
        full_Street_Address: {
            street: "Nice Street, 123",
            postcode: "SW3 9NU"
        }
    }
}

const flattenData = (nestedObj, parent, flatObj = {}) => {
    for (const key of Object.keys(nestedObj)) {
        const propName = parent ? parent + "." + key : key;
        if (typeof nestedObj[key] === 'object') {
            flattenData(nestedObj[key], propName, flatObj);
        } else {
            flatObj[propName] = nestedObj[key];
        }
    }
    return flatObj;
}

const flat = flattenData(obj);
console.log(flat);
//logs in table format ----> beautiful!
console.table(flat);