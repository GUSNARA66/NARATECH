// ANIMASI SECTION
function showOnLoad() {
  let sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.classList.add("show");
  });
}

showOnLoad();

window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");

  sections.forEach(sec => {
    let position = sec.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(position < screen - 100) {
      sec.classList.add("show");
    }
  });
});


// 🔥 TYPING EFFECT (PISAH DARI SCROLL)
const text = "Jasa Instalasi Jaringan & Service Komputer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

// jalan sekali aja
window.addEventListener("load", typing);
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
