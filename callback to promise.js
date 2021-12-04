const mockdata = {
    "id": 5345,
    "uid": "7c5037c4-b004-47ba-b91c-e33e9c525cdf",
    "password": "05kB2ariTu",
    "first_name": "Guadalupe",
    "last_name": "Predovic",
    "username": "guadalupe.predovic",
    "email": "guadalupe.predovic@email.com",
    "avatar": "https://robohash.org/impeditsuscipitdeserunt.png?size=300x300&set=set1",
    "gender": "Genderqueer",
    "phone_number": "+856 495-268-0875 x740",
    "social_insurance_number": "972711998",
    "date_of_birth": "1973-06-22",
    "employment": {
      "title": "Farming Associate",
      "key_skill": "Communication"
    }
}
//callback function
function getDataCallback(info, callback) {
    if (!info) {
        return callback(new Error("no data available!"))
    }
    return callback(info)
}

getDataCallback(mockdata, console.log);

//promise version of the callback function above
function getDataPromise(info) {
    return new Promise((resolve, reject) => {
        if(!info) reject (new Error("no data available!"))
        resolve(info)
    })
}

getDataPromise(mockdata).then(console.log).catch(console.log);
getDataPromise().then(console.log).catch(console.log);

//async version

async function asyncDataCall() {
    const result = await getDataPromise(mockdata);
    console.log(result);
}

asyncDataCall();