//axios is a promised-based HTTP client for node.js and the browser. 
//isomorphic => can run in the browser and node.js with the same codebase
//on the server side it uses the native node.js http module
//on the client (browser) it uses XMLHttpRequests

//nb async/await is part of ECMASscript 2017 and is not supported in IE and older browsers



// import axios from 'axios';

(async = () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
      console.log(response)
    } catch (error){
        console.error(error);

    }
}


)();