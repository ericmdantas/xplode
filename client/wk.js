self.onmessage = function(ev) {
    self.postMessage(":D")

    fetch("http://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
            console.log(res);
        });  
}