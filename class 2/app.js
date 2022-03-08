console.log("javascript lecture 2");

//common stream method

let email="raheel@thedevnation.com";

let result=email.lastIndexOf("n");
console.log(result);

//slice:extract section from a string 
//string.slice(from,to)

let sliceResult=email.slice(0,6);
console.log(sliceResult);

//replace =replace the string with custom input 

let replace =email.replace("raheel","khubaib");
console.log(replace);


//let extarct the name

let answer=email.slice(0,email.lastIndexOf("@"));
console.log(answer);
//substring :make a sub-string from the main string 
//substring(from,how many letters)

let substring=email.substr(5,10);
console.log(substring);

//domain

let domain=email.slice(email.lastIndexOf("@")+1,email.length);//+1 means 1 adding then remove @
console.log(domain);

//number shortcut

let likes=10;
likes++;

likes=likes+1;

likes +=10;//  likes *=10,likes /=10, likes %=10
likes--;

++likes;
--likes;
console.log(likes);


//Template String

const title="Blog Post";
const author="khubaib";
const like=200;

let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>${like}</span>
    `;



console.log(html);


//Array Methods

let array=["khubaib","irfan","devnation","khubaib"];
console.log(array.length);

//Join Method:after every comma,turn this into a string

let result1=array.join(',');
console.log(result1);

console.log(result1.length);

//this is used to space between name:


let nameArray=["khubaib","Irfan"];
let fullName=nameArray.join(' ');
console.log(`Welcome ${fullName}`);

//Find the index of an element with an array


let location1=array.indexOf("khubaib");
console.log(location1);

let location2=array.lastIndexOf("khubaib");
console.log(location2);

//concat element within the same array

let concat=array.concat(["javascript","python"]);//ye add array me ni.conact me add hu rha hain:Temporary
concat=array.concat("flutter");
console.log(concat);
//delete the element in the arrray

let deleteElement=array.pop();//pop last element nikal detha hain
console.log(deleteElement);

console.log(array);

console.log("----------------------------------");
let pushTheElement=array.push("altaf");
console.log(pushTheElement);
console.log(array);

//Splice(index,kitne element change krna hain : 1,"may")

let month=["jan","feb","march","april"];
// month.splice(1,0,"feb");
month.splice(3,1,"may");
console.log(month);


//filter method

secondArray=["khubaib","uziar","areeba","devnation"];
let thirdArray=secondArray.filter(element => element.length > 8)
console.log(thirdArray);

console.log(secondArray);
//find and replace element from array
let fourthArray=[10,20,30,40,50];

let indexNo=fourthArray.indexOf(40);
if(indexNo > -1){
    fourthArray.splice(indexNo,0);
}
console.log(fourthArray);

 
console.log("------------------------------");
//Does SOmething exists or not in a String
let email2="khubaibirfan199@gmail.com";
let emailExit=email2.includes('@');
console.log(emailExit);

//comparison operator
let ages=20;
console.log(ages==20);
console.log(ages=="20");//loose comparison.data types check ni krta
console.log(ages==="20");
console.log(ages>"20");
console.log(ages<"20");
console.log(ages >= "20");
let newName="khubaib";
console.log("=====================");
console.log(newName=="khubaib");
console.log(newName=="Khubaib");
console.log(newName > "Hamza");//low character value is greater than capital letter.


//strict comparison:check data and data types
//goood practice to use strict comparison

console.log(ages==="20");
console.log(ages===20);
console.log("========================");
console.log(ages!== 20);
console.log(ages!=="20");

//type conversion
let score ='100';
//convert string to number
score=Number(score);
console.log(score +1);
console.log(typeof score);

let scoreNew=200;
let scoreNewString=String(scoreNew);
console.log(scoreNewString);
console.log(typeof scoreNewString);

//convert into bollean
let boolean=Boolean();
console.log(boolean);

//Truthy and falsy values:Boolean
//Truthy:"0","false",[],positive,negative,numbers,function,{}
//falsy:false,zero,empty string,null,undefine,NaN

//control flow:loops AND COnditional
//for loop
for(let i=0;i<5;i++){
    console.log(i);
}

const arr2=["raheel","khan","khubaib","khallad"];
for(let i=0;i<arr2.length;i++){
    let html=`<div>${arr2[i]}</div>`
    console.log(html);
}
//forEach
// arr2.forEach(items =>console.log(items));

//while loop

let i=0;
while(i<6){
    console.log(i);
    i+=1;
}
//do-while loop
console.log("===============================");
let j=8;
do{
    console.log(j);
    j++;
}while(j<8);

//IF statements

const password="khubaib123@";
if(password.length>=8){
    console.log("password accepted");
}
//if and else
console.log("========================");
if(password.length>=12){
    console.log("password strong");
}
else if(password.length>=8){
    console.log("password weak");
}
else{
    console.log("pls password be longer");

}


console.log("====================================");

//logical operators "OR" and "And"

if(password.length>=12 && password.includes('@')){
    console.log("password strong");
}
else if(password.length>=8 || password.includes('@')&&password.length>=5){
    console.log("password is weak");

}
else{
    console.log("pls password sahi kre");
}

console.log("=================================");
//logical not(!)
let user=false;
if(!user){
    console.log("user not login");
    //redirect to the login page
}
else{
    console.log("user page istemal kre");
}
    

//Break and COntinue
console.log("==========================");
let Score=[50,25,0,30,100,20,10];
for(let k=0;k<Score.length;k++){
    if(score[k] === 5){
        continue;
    }


    console.log(k);
    // else if(Score[k] === 0){
    //     console.log(k);
    //     console.log("you have the top ranker");
    //     break;
    // }

    //switch
    console.log("==============================");

    let days="monday";

    switch(days){
        case "Monday":
            console.log("aj monday hain");
            break;

            case "tuesday":
            console.log("aj tuesday hain");
            break;

            case "wednesday":
            console.log("aj wednesday hain");
            break;

            case "thursday":
            console.log("aj thursday hain");
            break;

            case "friday":
            console.log("aj friday hain");
            break;

            case "saturday":
            console.log("aj saturday hain");
            break;

            case "sunday":
            console.log("aj sunday hain");
            break;
            default:
                console.log("ap ne galat days type kr dia hai pls correct kre");
    }
 


}
  
