//Modal
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


// Swap image on mobile
window.addEventListener("resize", function () {
  var imageElement = document.getElementById("image-element");
  if (window.innerWidth <= 540) {
    imageElement.src = "images/image-01-mobile.png";
  } else {
    imageElement.src = "images/image-01-desktop.png";
  }
});