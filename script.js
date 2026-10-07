const titile = document.getElementById("title");
console.log(title);


//change the heading.....
const element = document.getElementById("title").textContent="students list";

///new student add
// enter the name 
// anjali

///create  a new student
let newstudent = document.createElement("p")
newstudent.textContent = "Anjali";
Studentlist.append(newstudent);

///add another student 
const anotherstudent = document.createElement("p");
anotherstudent.textContent = "Vishnu";
Studentlist.appendChild(anotherstudent);

//remove student 

let name = document.querySelector("#name");
name.remove();

///use queryselectorall.
const displays = document.querySelectorAll("#Studentlist p")
for (let display of displays){
    console.log(display.textContent)
}

Studentlist.textContent=<h1>students</h1>