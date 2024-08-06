document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  const navbar = document.querySelector("header");
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll(".section");
  const navItem = document.getElementsByClassName("nav-item");
  const round = document.getElementById("round");
  const contactusbtn = document.getElementById("contactusbtn");
  const arrowRight = document.getElementsByClassName("arrow-btn-right");
  console.log(arrowRight);
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    // Scroll nav bar and change design

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (section.id == "home") {
          for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.color = "white";
          }
          round.style.backgroundColor = "white";
          arrowRight[0].style.color = "black";
          contactusbtn.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
          nav.style.backgroundColor = "transparent";
        } else {
          for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.color = "black";
          }
          nav.style.backgroundColor = "rgba(119, 119, 119, 0.26)";
          round.style.backgroundColor = "black";
          arrowRight[0].style.color = "white";
          contactusbtn.style.backgroundColor = "rgba(68, 68, 68,0.26)";
        }
      }
    });
  });
});
