// console.log("Hello..");

// let name=true;
//  console.log(typeof name);
// class Customer{
//     name;
//     age;
//     address


// constructor(name,age,address){
//     this.name=name;
//     this.age=age;
//     this.address=address;
    
// }
// setName(name){
//     this.name=name;
// }
// getName(){
//     return this.name;
//     }

// }
// let customer1=new Customer("Saman",10,"Gampaha");
// console.log(customer1.getName());


//------------------------------------------------------------------------------------------------------

let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

let lblOutput = document.getElementById("output");


function btnGuess() {
    let guessNumber = document.getElementById("guessNumber").value;
    let random = randomNumber;

if(guessNumber>10){
    console.log("Invalid Input");
    lblOutput.innerHTML="Invalid Input";

  }else if(guessNumber>randomNumber){
     console.log("Your guess number is Grater than the random number. Try again");
     lblOutput.innerHTML= "Your guess number is Grater than the random number. Try again";

  }else if(guessNumber<randomNumber){
      console.log("Your guess number is Lower than the random number.Try again");
      lblOutput.innerHTML="Your guess number is Lower than the random number.Try again"
 }else{ 
    console.log("Yeah!! YOU ARE WIN");  
    lblOutput.innerHTML="Yeah!! YOU ARE WIN "; 
}
}


//--------------------------------------------------------------------------------------------------------


// let customers=[
// {
//     name : "saman",
//     age : 45,
//     address : "gampaha"
// },
// 12,
// [
// {
//     name : "wimal"
// },
// {
//     name : "amal"
// },
// {
//     name : "nimal"
// },
// 12
// ],
// {},
// {},
// {},
// {}
// ]

// console.log(customers[2]);

// customers[2].forEach(nameObj =>{
//     console.log(nameObj["name"]);
// }

// )






