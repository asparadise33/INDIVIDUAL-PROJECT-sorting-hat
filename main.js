console.log("here we go");
//add our array of students - start small then add to see if functions are working
const students = [
{
  id: 1,
  imageUrl:"https://preview.redd.it/1sfkwpojame71.jpg?width=640&crop=smart&auto=webp&s=e5462c12b4a0aa551cc2f0a27587523731623980",
  name:"Harry Potter",
  house: "Gryffindor",
},

{id: 2,
  imageUrl:"https://i.pinimg.com/236x/a8/4f/fa/a84ffab3f5c4b135167b0b6710deb51f.jpg",
  name:"Draco Malfoy",
  house: "Slytherin",
},

{
  id: 3,
  imageUrl:"https://64.media.tumblr.com/9f65a2e708cd999f8c16b77dcba2e2c7/df3ed2a8819eef35-ba/s1280x1920/6322de1df614f52550ff6f3b56b5f3feb9c8a38e.png",
  name:"Cedric Diggory",
  house: "Hufflepuff",
},

{
  id: 4,
  imageUrl:"https://i.pinimg.com/736x/72/f2/b3/72f2b32d597729a9fb4eb2c79c7e2c93.jpg",
  name:"Luna Lovegood",
  house: "Ravenclaw",
}
];

//utility funtion to get cards on the DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
//iterate through array and get those cards on the DOM
const studentsOnDom = (students) => {
let studentString = ""; //empty string that pulls our info from the array
 students.forEach((student) => { 
 studentString+= `<div class="card" style="width: 18rem;">
  <img src="${student.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-name">${student.name}</p>
    <p class="card-house">${student.house}</p>
  </div>
</div>`;
});
renderToDom("#hat", studentString);
};


//TODO - function for my form to appear when we click a button on the sorting hat card
const formOnDom = () => {
  let formInfo = `<form> 
  <div class="row g-3">
  <div class="col">
    <input type="text" id="userInput" class="form-control" placeholder="Enter your name here!" aria-label="First name">
  </div>
  <div class="col-auto">
    <button type="submit" Id ="getSorted" class="btn btn-info">Get Sorted!!</button>
  </div>
  </form>` 
  
  renderToDom("#studentForm", formInfo);
  }

  const form = document.querySelector("form")
  const createStudent = (e) => {
    e.preventDefault()
  
    const newStudent = {
      id: students.length +1, //name of our array and adding 1 to the length
      name: document.querySelector("#userInput").value, //includes our new student's name
    }
    
    students.push(newStudent) //pushes our new student to the DOM
    console.log(newStudent)
    studentsOnDom(students)
    form.reset() //resets form to empty
  }
//form.addEventListener("submit", createStudent)
//TODO form should clear and new student card added below the form TODO add a new student card to the array







//TODO sort new student into a random
// const houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin" ];
// const randomHouse = Math.floor(Math.randomHouse() * houses.length);
// console.log(randomHouse, houses[random]);

//TODO - Filter by House
const filter = (array, specificHouse) => {
  const houseArray =[];
  array.forEach((item) => {
    if (item.house === specificHouse){
      houseArray.push(item);
    }
});

for (const student of array) {
  if (student.house === specificHouse){
    houseArray.push(student);
  }
}
studentsOnDom(students);
return houseArray;
};

//TODO EVENT LISTNERS for each button
const studentBtn = document.querySelector("#totalbtn");
const gryffindorBtn = document.querySelector("#gryfbtn");
const slytherinBtn = document.querySelector("#slythbtn");
const hufflepuffBtn = document.querySelector("#huffbtn");
const ravenclawBtn = document.querySelector("#ravebtn");

studentBtn.addEventListener("click", () =>{
  studentsOnDom(students)
  console.log("what's wrong?");
});

gryffindorBtn.addEventListener("click", () =>{
 studentsOnDom(students)
});

slytherinBtn.addEventListener("click" , () =>{
  studentsOnDom(students);
});

hufflepuffBtn.addEventListener("click", () => {
 studentsOnDom(students);
});

ravenclawBtn.addEventListener("click" , () => {
  studentsOnDom(students);
});

//TODO - add an event for my filter function
gryffindorBtn.addEventListener("click", () => {
  const gryffindorHouse = filter(students, "Gryffindor");
  studentsOnDom(gryffindorHouse);
});

slytherinBtn.addEventListener("click", () => {
  const slytherinHouse = filter(students, "Slytherin");
  studentsOnDom(slytherinHouse);
});

hufflepuffBtn.addEventListener("click", () => {
  const hufflepuffHouse = filter(students, "Hufflepuff");
  studentsOnDom(hufflepuffHouse);
});

ravenclawBtn.addEventListener("click", () => {
  const ravenclawHouse = filter(students, "Ravenclaw");
  studentsOnDom(ravenclawHouse);
});


//TODO - button click event to take me to the form!
const formBtn = document.querySelector("#submitBtn");

formBtn.addEventListener("click", () =>{
  formOnDom()
  console.log("you there?");
});






//TODO - figure out why my cards are duplicating 

//TODO - add start app function
//const startSort = () => {
 //studentsOnDom(students);
//}

//startSort();
