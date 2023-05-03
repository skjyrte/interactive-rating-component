
let rating = undefined;

const container = document.querySelector(".rank");
container.addEventListener('click', (event) => {
    if (event.target.value!==undefined) {rating = event.target.value}});

submit = document.querySelector(".submitButton");

submit.addEventListener('click', () => {
   if (rating!==undefined) return change()});

function change() {

const imageNode = document.querySelector(".image > img"); //child combinator
imageNode.src = "./images/illustration-thank-you.svg"


const headerNode = document.querySelector("h1");
headerNode.innerHTML = "Thank you!";
const paragraph = document.querySelector(".para");
paragraph.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";


const ratingNode = document.createElement("p");
const textNode = document.createTextNode(`You selected ${rating} out of 5`)
ratingNode.appendChild(textNode);
parentNode = document.querySelector(".frame");
parentNode.insertBefore(ratingNode, headerNode);


const rank = document.querySelector(".rank");//removal of unnecessary elements
rank.remove();
const submit = document.querySelector(".submitButton")
submit.remove();

}


