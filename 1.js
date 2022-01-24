//Task 1: Simple Programs todo for variables
//a.Declare four variables without assigning values and print them in console
let a
let b
let c
let d
console.log(10,20,30,40)
//b.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);
// //c. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let e={
first_name:"Pavithra",
last_name:"Sethuraman",
marital_status:"married",
country:"India",
age:"29"
}
console.log(e)
//d. Declare variables and assign string, boolean, undefined and null data types
let f="guvi"
let g=true
let h
let l=null
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))
console.log(typeof(l))
//e.Convert the string to integer
let y="12"
var yy = +y
console.log(parseInt(y))
console.log(Number(y))
console.log(yy)
//f.Write 6 statement which provide truthy & falsey values.
let v=1
v="1"
v=[1]
console.log(1 == "1")
console.log("1" == [1])
console.log([1] == 1)
console.log(1 === "1")
console.log("1" === [1])
console.log([1] === 1)
