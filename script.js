let image_first = document.getElementById("gif-first");
let image_request = document.getElementById("gif_request");
let image_accept = document.getElementById("gif_accept");

let button_request = document.getElementById("button_request");
let button_accept = document.getElementById("button_accept");
let button_call = document.getElementById("button_call");
let question = document.getElementById("question");

button_request.addEventListener("click", function () {
  image_request.style.display = "block";
  image_first.style.display = "none";
  image_accept.style.display = "none";
  button_call.style.display = "none";
  question.innerText = "Please....";
});

button_accept.addEventListener("click", function () {
  image_accept.style.display = "block";
  button_call.style.display = "block";
  button_accept.style.display = "none";
  button_request.style.display = "none";
  image_first.style.display = "none";
  image_request.style.display = "none";
  question.innerText = "Calll fast :)";
});

button_call.addEventListener("click", function (e) {
  window.open("tel:+918757059888");
});
