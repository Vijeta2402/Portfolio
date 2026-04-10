// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Frontend Developer','Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });

function toggleText() {
  let moreText = document.getElementById("more-text");             
  let btn = document.querySelector(".about-content .btn");

  if (moreText.style.display === "none") {                                                      
    moreText.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}


function toggleServiceText(btn) {
  let moreText = btn.parentElement.querySelector(".more-text");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}