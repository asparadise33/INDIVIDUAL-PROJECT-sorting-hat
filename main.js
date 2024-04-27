console.log("here we go");
//add our array of students - start small then add to see if functions are working
const students = [
{
  id: 1,
  imageUrl:"https://preview.redd.it/1sfkwpojame71.jpg?width=640&crop=smart&auto=webp&s=e5462c12b4a0aa551cc2f0a27587523731623980",
  name:"Harry Potter",
  trait: "Sacrificial Lamb",
  house: "gryffindor",
},

{id: 2,
  imageUrl:"https://i.pinimg.com/236x/a8/4f/fa/a84ffab3f5c4b135167b0b6710deb51f.jpg",
  name:"Draco Malfoy",
  trait: "Clever boy",
  house: "Slytherin",
},

{
  id: 3,
  imageUrl:"https://64.media.tumblr.com/9f65a2e708cd999f8c16b77dcba2e2c7/df3ed2a8819eef35-ba/s1280x1920/6322de1df614f52550ff6f3b56b5f3feb9c8a38e.png",
  name:"Cedric Diggory",
  trait: "Brave, died young",
  house: "Hufflepuff",
},

{
  id: 4,
  imageUrl:"https://i.pinimg.com/736x/72/f2/b3/72f2b32d597729a9fb4eb2c79c7e2c93.jpg",
  name:"Luna Lovegood",
  trait: "Wistful",
  house: "Ravenclaw",
}
];

//utility funtion to get cards on the DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
//iterate through array and get those cards on the DOM
//const studentsOnDom = (students) => {
let studentString = ""; //empty string that pulls our info from the array
 students.forEach((student) => { 
 studentString+= `<div class="card" style="width: 18rem;">
  <img src="${student.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-name">${student.name}</p>
    <p class="card-trait">${student.trait}</p>
    <p class="card-house">${student.house}</p>
  </div>
</div>`;
});
renderToDom("#hat", studentString);

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
};
//TODO - add start app function
//const startSort = () =>{
 //studentsOnDom(students);
//}

//startSort();
