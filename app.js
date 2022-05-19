var total = 0;
let comments = [
  "Wonderful Choice.",
  "OH... My Favorite Dish!",
  "MMMmm..SO GOOD, YA BETTER SLAP YA MAMA!",
  "Simply Perfect.",
  "Delectably Divine.",
  "Exquisite Taste.",
  "FLAWLESS VICTORY!",
];
let any = [
  "PAY ME NOW!",
  "Give me my Money!",
  "HURRY UP AND BUY!",
  "Can you afford this???",
  "Declined Call the POLICE!!",
  "You know Damn well you can pay for this SHIT!",
  "Someone GETTING LUCKY TONIGHT!",
];
var populateDiv = document.querySelector(".selected-population");

function waitressAlert() {
  var randomComment = comments[Math.floor(Math.random() * comments.length)];

  alert(randomComment);
}

function casherAlert() {
  var anyComment = any[Math.floor(Math.random() * any.length)];

  alert(anyComment);
}

function addedToCart(className) {
  var selectedClass = document.querySelector(`.${className}`);
  console.log(selectedClass.childNodes);
  var selectedText = selectedClass.childNodes[3].innerHTML;
  var selectedPrice = selectedClass.childNodes[7].innerHTML;
  var selectedButton = selectedClass.childNodes[9];
  console.log(selectedButton);
  selectedButton.classList.add("highlight");

  total = total + Number(selectedPrice);

  waitressAlert();
}

function showTotal() {
  var totalDiv = document.querySelector(".total");
  totalDiv.innerHTML = total.toFixed(2);
  casherAlert();
}
