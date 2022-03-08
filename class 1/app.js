console.log("hello world");

//comments

//variable

//method 1

var variable_1;

//method 2

//let and const

let name="khubaib";
console.log(name);

name="uzair";
console.log(name);


const interestRate=0.3;
console.log(interestRate);

//dynamic vs static language

//static => String name;int no;float per

//javascript is a dynamic language;

console.log(typeof name);

//rules for naming the variables

//good variable name

//let firstName;

//bad variable name

//let firstname;
// let first_name;


//javascript has two types of values

//1:Primitive/value  types
//2:Reference type

//primitive type(int,string,number,boolean,undefined,null)


// let lastName="ahmed";
// let age=26;//number literal
// let isApproved=true;
// let thisVariable=undefined;
// let homeAddress=null;

hour=24;
console.log(hour);

//escape character

let example="my name is \"khubaib\"";
console.log(example);

let example2='my password is "khubaib123"';
console.log(example2);

let products="8";

let productsDescription="I need " +products  +" products ";
//  let productsDescription = 'I need ${products} products';

console.log(productsDescription);

console.log(typeof products == "number"?true:false);

//Reference type(Objects)

//Refrence =Objects,Arrays,Functions
//Object
let person = {
    firstName:"altaf",
    lastName:"hussain",
    age:20

}
console.log(person);



 
//change the value in person

// method 1:

person.firstName="hamza";
console.log(person);

//method 2
person['firstName']="pakwan";
console.log(person);

//user selection

let selection='firstName';
person[selection]="harry";
console.log(person);

//Array
//List of Object
//Use array to store these values.

let selectedColor=["red","green","blue","brown"];
console.log(selectedColor);

//index
console.log(selectedColor[0]);

//add element in the array

selectedColor[4]="black";
console.log(selectedColor);

//undefined

let userName;
console.log(userName);

// let dynamicArray=[1,"khubaib",[1,2,4],{3:name}];
// print(dynamicArray);

for(var i=0;i<selectedColor.length;i++){
    console.log(selectedColor[i]);
}
console.log("--------------------------------");

selectedColor.forEach(element=>console.log(element));

console.log("--------------------------------");

for(let colorfull in selectedColor){
    console.log(colorfull);
}

//function

function great(){
    alert("hello world");
}
great();


function human(fathername,height){ //parameters
    console.log("hello " + fathername  + height);
}

human("irfan",45);//arguments


function Square(square){
 return square*square;
}

let assume=Square(2);
console.log(assume);

