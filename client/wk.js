"use strict";

fetch("http://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            Promise.reject(res.body);
        }            
    })
    .then((todo) => {
        self.postMessage(todo.title);
    })
    .catch((err) => {
        self.postMessage(err);
    });