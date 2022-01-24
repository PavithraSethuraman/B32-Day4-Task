//Task 2: Simple Programs todo for Operators
//a.Square of a number
let a=5
let b= a**2
console.log(b)
//b.Swapping 2 numbers
let x = prompt('Enter first value: ')
let y = prompt('Enter second value: ')
let z
z=x
x=y
y=z
console.log(`Value of x after swapping : ${x}`);
console.log(`Value of y after swapping  : ${y}`);
//c.Addition of 3 numbers
let a1=5
let b1=2
let c1=3
console.log(a1+b1+c1)
//d.Celsius to Fahrenheit conversion
let celsius=36
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)
//e.Meter to miles
let meter=320
let miles=meter*0.00062137
console.log(miles)
//f.Pounds to kg
let pound=25
let kilo = pound * 0.45
console.log(kilo)
//g.Calculate Batting Average
let runs = 10000;
let matches = 250;
let notout = 50;
let avg = runs/ (matches - notout);
 console.log(avg)
 //h.Calculate five test scores and print their average
let a2=100
let b2=98
let c2=99
let d2=98
let e2=100
let average=(a2+b2+c2+d2+e2)/5
console.log(average)
//i.Power of any number x ^ y
let x1=5
let y1=3
let power=x1 ** y1
console.log(power)
//j.Calculate Simple Interest
let p=36000
let n=12
let r=12.6
let SI = (p*n*r)/100
console.log(SI)
//k.Calculate area of an equilateral triangle
let a3=5
let arequilateralTriangle = ( 1.73 * a3 *a3) / 4
console.log(arequilateralTriangle)
//l.Area Of Isosceles Triangle
let a4=2
let b4=3
let AltitudeOfIsoscelesTriangle = Math.sqrt(Math.pow(a4, 2) - (Math.pow(b4, 2) / 4));
let h=AltitudeOfIsoscelesTriangle
let AreaOfIsoscelesTriangle=((1 * b4 * h) / 2)
console.log(AreaOfIsoscelesTriangle)
//m.Volume Of Sphere
let radius = 5;
let volumePOfSphere = (4/3)* Math.PI * Math.pow(radius, 3);
console.log(volumePOfSphere)
//n.Volume Of Prism
let b5=4.5
let h5=6
let volumeOfPrism= b5 *h5
console.log(volumeOfPrism)
//o.Find area of a triangle.
let b6=5
let h6=7
let areaOfTriangle=(1/2)* b6 * h6
console.log(areaOfTriangle)
//p.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost=500
let soldCost=475
let discountOfProduct=actualCost-soldCost
console.log(discountOfProduct)
//q.Given their radius of a circle and find its diameter, circumference and area.
let r=10
let diameterOfCircle = 2 * r
let circumferenceOfCircle= 2 * Math.PI * r
let areaOfCircle = Math.PI * r * r
console.log(diameterOfCircle)
console.log(circumferenceOfCircle)
console.log(areaOfCircle)
//r.Given two numbers and perform all arithmetic operations.
let p=5
let q=2
   let sum = p + q;
   let sub = p - q;
   let mul = p * q;
   let div = p / q;
   let mod = p % q;
   let sqr = p ** q
console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)
console.log(sqr)
//s.Display the asterisk pattern as shown below(No loop needed)
let a6=["*","*","*","*","*"]
a6.map((e)=>{
    d=e+e+e+e+e
console.log(d)
})
//t.Calculate electricity bill? //per hour 100watt,per unit10rs
let unitPerHourInWatt=100
let hour=1
let unitRate=10
let kWh=(unitPerHourInWatt * hour)/1000
let monthUsage=30*kWh
let costOfBill=unitRate*monthUsage
console.log(costOfBill)
//u.Program To Calculate CGPA
let mark1=97
let mark2=100
let mark3=98
let mark4=100
let mark5=99
let CGPA=(mark1+mark2+mark3+mark4+mark5)/5
console.log(CGPA)

