let url = "https://jsonplaceholder.typicode.com/todos/";



(async () => {
    try {
        let response = await fetch(url);
        if ( response.ok) {
            let answer = await response.json();
            console.log(answer);
            for (let title of answer) {
                console.log(title.title);
            }
        } else {
            console.log(`Server error: ${response.statusText}`);
        }
    } catch(err) {
        console.log(`Error: ${err.message}`)
    }
})();

// then().catch() syntax
 fetch(url) 
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Server error: ${response.statusText}`)
        }
    })
    .then(data => {
        console.log(data);
        for (let todo of data) {
            console.log(todo.title);
        }
    })
    .catch(err => {
        console.log(`Error: ${err.message}`)
    });


