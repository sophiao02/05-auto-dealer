// inject current year in footer
const numberOne = new Date();
document.querySelector("#year").textContent = numberOne.getFullYear();

// toggle button switch from X to =
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// grab reviews data from the file
import { reviews } from "../data/reviews.js";
console.log(reviews);

// create an empty card
const myTarget = document.querySelector("#rcards");

for (let x = 0; x < reviews.length; x++) {

  //create a section
  const mySection = document.createElement('section')
  const myName = document.createElement('h3')
  myName.textContent = reviews[x].name
  const myReview = document.createElement('p')
  myReview.textContent = reviews[x].text

  const myRating = document.createElement('div')

  //stars amount
  
  for (let step = 0; step<reviews[x].stars; step++) {
    const revIndicator = document.createElement('img')
    revIndicator.src = "./images/star.svg" 
    myRating.appendChild(revIndicator)
  }
  
  //build the figure with child elements
  mySection.appendChild(myName);
  mySection.appendChild(myRating);
  mySection.appendChild(myReview);

  //add a new card to a page
  myTarget.appendChild(mySection);

} // end for loop