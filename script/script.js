//rating button listener
let rating = undefined;
const container = document.querySelector(".rank");
container.addEventListener('click', (event) => {if (event.target.value!==undefined) {rating = event.target.value}});

//submit button listener
const submit = document.querySelector(".submitButton");
submit.addEventListener('click', () => {if (rating!==undefined) return change()});

function change() {
    //picture replacement
    document.querySelector(".image > img").src = "./images/illustration-thank-you.svg" //child combinator

    //text replacement
    const headerNode = document.querySelector("h1");
    headerNode.innerHTML = "Thank you!";
    document.querySelector(".para").innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

    //rating element
    const ratingNode = document.createElement("p");
    const textNode = document.createTextNode(`You selected ${rating} out of 5`)
    ratingNode.appendChild(textNode);
    const parentNode = document.querySelector(".frame");
    parentNode.insertBefore(ratingNode, headerNode);

    //removal of unnecessary elements
    container.remove();
    submit.remove();
}


