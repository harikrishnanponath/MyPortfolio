const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const reviewProjectBtn1 = document.querySelector("#review-movieq-btn");
const reviewProjectBtn2 = document.querySelector("#review-newsing-btn");
const reviewProjectBtn3 = document.querySelector("#review-booksify-btn");


menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Open GitHub on Review Project button click
reviewProjectBtn1.onclick = () => {
  window.open('https://github.com/harikrishnanponath/movieQ', '_blank');  
};

reviewProjectBtn2.onclick = () => {
  window.open('https://github.com/harikrishnanponath/newsing', '_blank');  
};

reviewProjectBtn3.onclick = () => {
  window.open('https://github.com/harikrishnanponath/booksify', '_blank');  
};