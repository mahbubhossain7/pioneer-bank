// program-1 hellow world:
/*console.log('Hellow world');
alert("Hello world");
document.write( "<h1>hellow mahbub</h1>");
*/


//program-2 = To Add Two number:
//work -1 (To add static numbers)
 /* let a = 6;
  let b = 8;
  let c = a + b;
  console.log("The total sum is :" +" " + c); */

//work-2 (To Add dynamic numbers)
 /* let a = prompt('Enter first number', "");
 let b = prompt('Enter second number', "");
 let c = parseInt(a) + parseInt(b);
 console.log("Your sum is : " + " " + c);
 */


 //program-3 = To find square Root of a number:
 /* let a = prompt('Enter your number:');
  let b = Math.sqrt(a);
  console.log(b);
*/

 //program-4 = To find area of a Triangle number:
 // work-1: basic tringle
  /* let a = prompt('Enter base value');
    let b = prompt('Enter height value');
  let area = (a * b)/2;
  console.log('Your tringle Area is :' + ""+ area);
*/
// work-2: regular tringle :-
/* let a = 10;
let b = 5;
let c = 10;
let s = (a+ b+ c)/2;
let template = s * (s-a)* (s-b)* (s-c);
let Area = Math.sqrt(template);
console.log(Area);
*/


 //program-5 = Swapping of Two number:
 // work-1 = swapping using temporary variable:-
 /* let a = prompt(' enter your first number');
 let b = prompt(' enter your second number');
 let temp = a;
  a = b;
  b = temp;
  console.log(`The value of a is :${a}, the value of b is: ${b}`);
*/

 // work-2 = swapping without using temporary variable:-
 /* let a = parseInt(prompt('enter your first number'));
    let b = parseInt(prompt('enter your second number'));
   a = a + b;
  b = a - b;
  a = a - b;
  console.log(`The value of a is :${a}, the value of b is: ${b}`);
*/


// Program-6: Convert Kms to Miles :
/*function convert(x) {
  const kilometers = document.getElementById("kilometers").value;
  const milesPerKilometer = 0.621371;
  const miles = kilometers * milesPerKilometer;
  document.getElementById("result").textContent = `${kilometers} kilometers is equal to ${miles} miles.`;
}
console.log(x);
*/

// Program-7:Celcius to fehrenheit:
// Formula is =(0°C × 9/5) + 32 = 32°F
//work-1:
/*
 function Changer(){
  const Celcius = document.getElementById('Celcius').value;
  const farenheit = (Celcius*9/5) +32;
        document.getElementById("result").textContent = `${Celcius}°C celcius is equal to ${farenheit}°F ferenheit.`;  
 }
 */


// work-2:
/*
function convert() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById("result").innerHTML = `${celsius}°C is ${fahrenheit}°F`;
}
*/


//Program-8: Check if a number is Positive, Negative or Zero:-
// function Check(){
//    let value = document.getElementById('data').value;
//    if (value > 0){
//       res = `${value} is positive number`;
//    }
//    else if (value < 0) {
//     res = `${value} is Negative number`;
    
//    } else if(value == 0){
//     res = `${value} is Zero`;

//    }else{
//     res = `${value} is Not a Number`;
//    }

//    document.getElementById('res').innerText=res;
// }



//Program-9: Random number:-