//ERROR//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
    var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
    function dataHandling(input){
        var f= friends1.concat(friends2)
        let h=[... f]
        input=h.sort()
        console.log(input)
        }
        dataHandling(friends)
        
//Add your name to the end of the friends array, and add another name to beginning.
let friends3 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let a=friends3.push('PavithraSethuraman')
let b=friends3.unshift("Jisy")
console.log(friends3)
//Print the contents of the input variable
var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
    ]
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    console.log(input[i])
    }
    }
    dataHandling(input);
//What the output
 var myobject = {1:'one','11':1,'name':'arun'}
// console.log(myobject.11)//error ERROR
console.log(myobject.name)//arun
// Add a new key value pair to myobject
myobject.ten='ten'
console.log(myobject)
//Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
// const info={fname:'Guvi',lname:'Geek',no:6,Address:"IIT-M RP,Chennai"}
// console.log(info)
