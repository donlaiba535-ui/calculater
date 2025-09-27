const buttonA = document.querySelector("#button_A");
const headingA= document.querySelector("#heading_A");
let count = 1;
buttonA.onclick = () => {
    buttonA.textContent = "Try again!";
    headingA.textContent = `${count} clicks so far`;
    count += 1;
  };
  

  let myName = "paul";

  const section = document.querySelector("section");
  const para = document.createElement("p");
  para.textContent = myName;
  section.appendChild(para);



  let finalResult;
  let evenOddResult;

  const section1 = document.querySelector("section1");
  const para1 = document.createElement("p");
const finalResultCheck = 
          finalResult === 48 ?`yes, well done` :`no it is ${finalResult}`;
          para1.textContent = `is the final result 48? ${finalResultCheck}`;
          const para2 = document.createElement("p");
          const evenOddResultCheck = 
          evenOddResult === 0
          ? "the final result is even!"
          :"the final result is odd .   Hrm.";
          para2. textContent = evenOddResultCheck;
          section.appendChild(para1);
          section.appendChild(para2);



const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);


const list = document.querySelector("ol");
const cities =  ["london","ManCHESTe","BiRmiNGHAM"];
for (const city of cities) {
  const result = city;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}


const theorem= "Pythagorean theorem";
const a = 5;
const b = 8;


const myString =
  "Using *, we can work out that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";


const section2 = document.querySelector("section2");
const para3 = document.createElement("p");
para3.textContent = myString;
section.appendChild(para3);


const list2 = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list2.textContent = "";
totalBox.textContent = "";

let itemText = 0;
const listItem = document.createElement("li");
listItem.textContent = itemText;
list2.appendChild(listItem);
totalBox.textContent = `Total: $${total.toFixed(2)}`;
