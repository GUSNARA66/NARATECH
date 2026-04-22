// ANIMASI MUNCUL SAAT SCROLL
let elements = document.querySelectorAll(".fade-up");

function showOnScroll() {
  let screen = window.innerHeight;

  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;

    if (position < screen - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();


// TYPEWRITER (JALAN SEKALI)
const text = "Jasa Instalasi Jaringan & Service Komputer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

window.onload = typing;
