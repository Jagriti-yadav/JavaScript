let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello World`;
console.table({ str1, str2, str3 });
let text = "Hello";

console.log(text[0]); // H
console.log(text[1]); // e

let text2 = "Hello World";

console.log(text2.toUpperCase()); // HELLO WORLD
console.log(text2.toLowerCase()); // hello world
console.log(text2.includes("World")); // true
console.log(text2.indexOf("World"));  // 6
console.log(text2.slice(0, 4)); // Java
console.log(text.substring(4)); // Script


// escape characters
let text3 = "He said, \"Hello!\"";
console.log(text3);
let path = "C:\\Users\\John";
console.log(path);


// Template literals
let name = "Jagriti";
let age = 21;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
let message = `Line 1
Line 2
Line 3`;
console.log(message);