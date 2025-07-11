/* 
prefer not to use var keyword becauese of its issue with block scope and function scope
*/
let accountId = 12345;
const accountEMail = "gayatri@gmail.com";
let city = "Morshi";
let state;
console.log(accountId);
console.table([accountId,accountEMail,city,state]);