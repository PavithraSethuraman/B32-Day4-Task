//Find the person is ur friend or not.
let friends0 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
      if (input[i] == name)
      {
  return true;
      }else{
 return false;
      }
}
}
let found = dataHandling(friends0,"Jeff");
        console.log(found)
        
//1.Get the first item, the middle item and the last item of the array

let friends000 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let firstElement=friends000[0]
let midElement=friends000[friends000.length/2]
let lastElement=friends000[friends000.length-1]
console.log(firstElement)
console.log(midElement)
console.log(lastElement)

//Concat all the names the friends array and return as comma “,” seperated string.
let friends2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
console.log(friends2.join());


//Find the friends names who has letter ‘a’ and return the list.
let friends3 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
    const startWith1 = friends3.filter((name) => name.startsWith("A"));
    console.log(startWith1)


    //Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let friends4 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
avg = friends4.join('').length // friends.length     //length of all friends name
console.log(avg)
let c=friends4.map(w => w.length);// individual length
console.log(c)
let avgOfc = c.join('').length / c.length // and its avg
console.log(avgOfc)


//Find the names and return t`he list starting with letter M.
let friends5 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
    const startWith2 = friends5.filter((name) => name.startsWith("M"));
    console.log(startWith2)


//Find the name with max characters and return the name.
let friends6 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
var maxx = friends6.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    })
console.log(maxx)

//9. Find the name with min characters and return the name.
let friends66 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
var mini = friends66.reduce(
    function (a, b) {
        return a.length <= b.length ? a : b;
    })
console.log(mini)


//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends01 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
    var friends02 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
    let friends00=[]
    function dataHandling(input){
    friends00=friends01.concat(friends02).sort()
     
    console.log(friends00)
     
}
dataHandling(friends00)
    

//Add your name to the end of the friends array, and add another name to beginning.
let friends33 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let a=friends33.push('PavithraSethuraman')
let b=friends33.unshift("Jisy")
console.log(friends33)


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
// console.log(myobject.11)//ERROR
console.log(myobject.name)//arun


// Add a new key value pair to myobject
myobject.ten='ten'
console.log(myobject)


//Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
const info=[['Guvi','Geek',6 ,"IIT-M RP,Chennai"],
            ["Amazon", "Inc", 31, "SP Infocity, Chennai"],
            ["Google", "Alphabet", 34 ,"Amphitheater Parkway, MountainView"],
            ["Tesla", "Inc" , 32, "333 Santana Row,San Jose"]]
            console.log(info)

//Find the average in the array below.
//Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
const mapArray = friendsInfo.filter((item) => {
  if (item < 0 || item >= 0  && item!==true && item!=='200') return item;
});
var add = 0;
for (var i = 0; i < mapArray.length; i++) {
add = add+ mapArray[i] }
console.log(add)


//3. Add Mr or Ms to the names in the friends array.
// let friends003 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
