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