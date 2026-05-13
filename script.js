// RESPONSIVE NAVBAR

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// LOGIN MODAL

const loginOpen = document.getElementById("loginOpen");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeBtn");

loginOpen.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// TYPING EFFECT

const text = [
  "Web Developer",
  "HTML CSS JavaScript Tutor",
  "AI Animation Creator"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect() {

  if(charIndex < text[textIndex].length){

    typingText.textContent += text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, speed);

  }

  else{

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(typingText.textContent.length > 0){

    typingText.textContent =
    typingText.textContent.slice(0, -1);

    setTimeout(eraseEffect, 50);

  }

  else{

    textIndex++;

    if(textIndex >= text.length){

      textIndex = 0;

    }

    charIndex = 0;

    setTimeout(typeEffect, 500);

  }

}

window.onload = typeEffect;
