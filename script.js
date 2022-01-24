//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
 let a=JSON.stringify(obj1)===JSON.stringify(obj2)
 console.log(a)

 //Use the rest countries API url " " and display all the country flags in console
//Use the same rest countries and print all countries name, region, sub region and population

const request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()

request.onload=function()
{
    if(request.status==200)
    {
        let c=JSON.parse( request.responseText)
 for(let i = 0 ; i< c.length ; i++){
     console.log(c[i].name,c[i].region,c[i].subregion,c[i].population);
  }
 c.map((s)=>{
     console.log(s.flags.png)
 })
    }
else{
request.onerror=function(){
    console.log("error")
}
}}
