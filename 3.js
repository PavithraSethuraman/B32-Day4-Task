//Task 3: Simple Programs todo for Condition , Looping and Arrays
//a.Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);


//b.Iterate through the string array and print it contents
var strArray= ["Jazz","Blues","New Age","Classical","Opera"]
console.log(... strArray)

//c.write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
myarray.map((e) => {
console.log(e)
})


//d.Foods variable holds the names of your top 20 favorite foods, 
//starting with the best food. How can you find your fifth favorite food?
let food=["rice","dal","chapathi","biriyani","pizza","burger","gheerice","tandoori",
"naan","paneet pulao","chettinadchicken","poori","dosa","idly",
"pongal","curdrice","panipoori","muttoncurry","fishfinger","prawn65"]

//e.Find the length of your foods array
console.log(food.length)
let a= [... food]
console.log(a[5])

//f.Starting from the existing friends variable below, 
//change the element that is currently “Mari” to “Munnabai”.
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
  input.splice(0, 1, "Munnabai");
console.log(input)
    }
    dataHandling(friends);
