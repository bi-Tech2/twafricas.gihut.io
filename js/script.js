"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100
    ? header.classList.add("active")
    : header.classList.remove("active");
};

addEventOnElem(window, "scroll", headerActive);

/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () {
  this.classList.toggle("active");
};

addEventOnElem(accordionAction, "click", toggleAccordion);

$(document).ready(function () {
  $(".testimonial-slider").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabContentId = button.getAttribute("data-tab");

    // Remove active class from all buttons and contents
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button and corresponding content
    button.classList.add("active");
    document.getElementById(tabContentId).classList.add("active");
  });
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides[currentSlide].classList.remove("active"); // Hide current slide
  currentSlide = (index + totalSlides) % totalSlides; // Update current slide index
  slides[currentSlide].classList.add("active"); // Show new slide
}

setInterval(() => {
  showSlide(currentSlide + 1); // Show the next slide every 5 seconds
}, 5000); // Change duration as needed

//

//

// form data from html inputs (Major starts from here)

/* 
form-group-container
name
email
phone
message
newsletter-email
email-newsletter
*/

// function to POST data to Email for forms (incase you won change anything)

// Loading variable bro
let isLoading = false;

// Get In Touch
const handleSubmit = async (e) => {
  e.preventDefault();

  isLoading = true;
  let username = document.getElementById("name-input").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  console.log(username, email, phone, message);
  console.log(isLoading);

  try {
    const response = await axios.post(
      "http://localhost:4444/info-tnas/contact",
      { name: username, email, phone, message }
    );

    alert("You won’t miss an update✅");
  } catch (error) {
    isLoading = false;
    console.log(error);
    alert(error.message);
  } finally {
    isLoading = false;
  }
};

const form_datas = document
  .getElementById("form-datas")
  .addEventListener("submit", handleSubmit);

//

// newsletter

//

const handleEmailSubmit = async (e) => {
  e.preventDefault();
  isLoading = true;
  let emailFromNews = document.getElementById("newsletter-email").value;

  console.log(emailFromNews);
  console.log(isLoading);
  try {
    const response = await axios.post(
      "http://localhost:4444/info-tnas/newsletter",
      { email: emailFromNews }
    );

    alert("You won’t miss an update✅");
  } catch (error) {
    isLoading = false;
    console.log(error);
    alert(error.message);
  } finally {
    isLoading = false;
    console.log(isLoading);
  }
};

if (isLoading === true) {
  alert(isLoading);
}

const email_newsletter = document
  .getElementById("email-newsletter")
  .addEventListener("submit", handleEmailSubmit);
