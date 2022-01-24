//Find the person is ur friend or not.
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input, name){
    var result="Not a friend"
    for (var i = 0; i < input.length; i++) {
     var a= input[i]
     if(a == input){
         result="friend"
         break;
     }  
return result
    }
}
let found = dataHandling(friends,"Jeff");
        console.log(found)
        
//1.Get the first item, the middle item and the last item of the array
let arrayVal=[10,25,36,56,14,28]
let firstElement=arrayVal[0]
let midElement=arrayVal[arrayVal.length/2]
let lastElement=arrayVal[arrayVal.length-1]
console.log(firstElement)
console.log(midElement)
console.log(lastElement)

//Concat all the names the friends array and return as comma “,” seperated string.
let friends2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
console.log(friends2.join());

//Find the friends names who has letter ‘a’ and return the list.
let friends3 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
    const startWith = friends3.filter((name) => name.startsWith("A"));
    console.log(startWith)

    //Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let friends4 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
avg = friends4.join('').length // friends.length     //length of all friends name
console.log(avg)
let c=friends4.map(w => w.length);// individual length
console.log(c)
let avgOfc = c.join('').length / c.length // and its avg
console.log(avgOfc)

//Find the names and return the list starting with letter M.
let friends5 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
    const startWith = friends5.filter((name) => name.startsWith("M"));
    console.log(startWith)
//Find the name with max characters and return the name.
let friends6 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"]
const maxiChar = friends6.
console.log(maxiChar)
