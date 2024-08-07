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


function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "95vw") {
      sidebar.style.width = "0";
  } else {
      sidebar.style.width = "95vw";
  }
}



// Scroll reveal animations
ScrollReveal({
  // reset: true,
  distance: '60px',
  duration: 2500,
  delay: 100
});


// Top

ScrollReveal().reveal('.nav-bar , .header , .card-form', { delay: 200, origin: 'top',});
ScrollReveal().reveal('.main ,.center , .end', { delay: 500, origin: 'top', interval: 200 });


// Right 

ScrollReveal().reveal('.about-info', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.servicesbg-img ,.aboutbg-img', { delay: 500, origin: 'right', interval: 200 });

// Bottom 
ScrollReveal().reveal('.about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.content', { delay: 500, origin: 'bottom', interval: 200 });

// Left

ScrollReveal().reveal('.home-HP , .slogan , .contact-card , .card-content', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.workbg-img', { delay: 500, origin: 'left', interval: 200 });
