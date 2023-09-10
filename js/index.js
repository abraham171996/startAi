const hamburger = document.querySelector("#hamburger");
const mobil_navbar = document.querySelector(".mobil-navbar");
const header = document.querySelector("header");
const header_group = document.querySelector(".header-group");
const header_container = document.querySelector("#header-container");
const products = document.querySelector(".works-boxes");


const BASE_URL = "https://dummyjson.com/products";



function getProduct(){
    fetch(BASE_URL)
  .then((res) => res.json())
  .then(async (data) =>
   await data.products.map((product) => {
      products.innerHTML += `
    <div class="works-boxes--box">
    <figure>
      <img src=${product.thumbnail} alt="">
    </figure>
    <div class="title">
      <h2 calss="title-h2">${product.title}</h2>
    </div>
    <div class="description">
      <h3>${product.description}</h3>
    </div>
    <div class="bottom">
      <span>${product.price}$</span>
      <span>${product.brand}</span>
      
    </div>
  </div>
    `;
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
    const search_inpt = document.querySelector(".search-inpt");

    if (search_inpt) {
      search_inpt.addEventListener("input", () => {
        const searchText = search_inpt.value.toLowerCase();
        const allCards = document.querySelectorAll(".works-boxes--box");

        allCards.forEach((box) => {
          const titleElement = box.querySelector(" h2"); // Select the correct element
          if (titleElement) {
            const title = titleElement.textContent.toLowerCase(); // Use titleElement.textContent directly
            if (title.includes(searchText)) {
              box.classList.remove("hide");
              box.classList.add("show");
            } else {
              box.classList.remove("show");
              box.classList.add("hide");
            }
          } else {
            console.error("title-h2 element not found in box");
          }
        });
      });
    } else {
      console.error("search_inpt element not found");
    }

    // Rest of your code
});



function mobilMenu() {
  if (hamburger.textContent === "menu") {
    mobil_navbar.style.top = "100%";
    hamburger.textContent = "close";
  } else {
    mobil_navbar.style.top = "-600%";
    hamburger.textContent = "menu";
  }
}
function headerChangeBg() {
  if (window.scrollY >= 500) {
    header.style.backgroundColor = "#4B19E6";
    header.style.position = "fixed";
    header_group.style.backgroundColor = "#4B19E6";
    header_container.style.backgroundColor = "#4B19E6";
  } else {
    header.style.backgroundColor = "#fff";
    header.style.position = "relative";
    header_group.style.backgroundColor = "#fff";
    header_container.style.backgroundColor = "#fff";
  }
}
window.addEventListener("DOMContentLoaded",getProduct)
window.addEventListener("scroll", headerChangeBg);
hamburger.addEventListener("click", mobilMenu);


const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');
  
  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}