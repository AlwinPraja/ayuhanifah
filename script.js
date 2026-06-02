const openBtn = document.getElementById("openBtn");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const toGallery = document.getElementById("toGallery");

const music = document.getElementById("bgMusic");

// OPEN
openBtn.addEventListener("click", () => {

  slide1.classList.add("hidden");
  slide2.classList.remove("hidden");

  music.play();

});

// TO GALLERY
toGallery.addEventListener("click", () => {

  slide2.classList.add("hidden");
  slide3.classList.remove("hidden");

});