//what is callback function in JavaScript?
//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous programming and helps in handling tasks that take time to complete, such as API calls or reading files.

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Radhey Radhey!");
}

greet("Jagriti", sayBye);

//Callback with Arrow Function

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Jagriti", () => {
    console.log("Welcome!");
});