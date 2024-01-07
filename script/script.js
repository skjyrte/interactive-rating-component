let rating;
const container = document.querySelector(".rank");
let previousTarget;

container.addEventListener("click", (event) => {
  if (event.target.value !== undefined) {
    rating = event.target.value;
    if (previousTarget !== undefined) {
      previousTarget.classList.remove("active");
    }
    event.target.classList.add("active");
    previousTarget = event.target;
  }
});

const submit = document.querySelector(".submitButton");
submit.addEventListener("click", () => {
  if (rating !== undefined) return change();
});

function change() {
  document.querySelector(".image > img").src = "./images/illustration-thank-you.svg";

  const headerNode = document.querySelector("h1");
  headerNode.innerHTML = "Thank you!";
  document.querySelector(".para").innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

  const ratingNode = document.createElement("p");
  const textNode = document.createTextNode(`You selected ${rating} out of 5`);
  ratingNode.appendChild(textNode);
  const parentNode = document.querySelector(".frame");
  parentNode.insertBefore(ratingNode, headerNode);
  ratingNode.classList.add("ratingResult");

  container.remove();
  submit.remove();

  parentNode.classList.add("frameFinal");
}
