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