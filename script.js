// smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
// smooth scrolling END

// Parallax effet jumbotron
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".jumbotron");
  let scrollPosition = window.pageYOffset;

  // Adjust the background position based on the scroll position
  parallax.style.backgroundPosition = "center " + scrollPosition * 0.7 + "px";
});

// NEW PALARAX
// JavaScript to handle the parallax effect for the image profile
window.addEventListener("scroll", function () {
  const image = document.querySelector(".jumbotron img.shadow");
  let scrollPosition = window.pageYOffset;

  // Adjust the image position based on the scroll position
  image.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
});
// JavaScript to handle the parallax effect for h1 and p in the jumbotron
window.addEventListener("scroll", function () {
  const header = document.querySelector(".jumbotron h1");
  const paragraph = document.querySelector(".jumbotron p");
  let scrollPosition = window.pageYOffset;

  // Adjust the text content position based on the scroll position
  header.style.transform = "translateY(" + -scrollPosition * 0.2 + "px)";
  paragraph.style.transform = "translateY(" + -scrollPosition * 0.2 + "px)";
});

// PROJECTS
// Add this code to your script.js file
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-20px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
