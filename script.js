const menuContainer = document.querySelector(".menu-container");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const wrappers = document.querySelectorAll(".wrapper");
const videos = document.querySelector(".videos");

menuContainer.addEventListener("click", () => {
  navbar.classList.toggle("active");

  sections.forEach((section) => {
    section.classList.toggle("active");
  });

  if (navbar.classList.contains("active")) {
    menuContainer.classList.add("active");
  } else {
    menuContainer.classList.remove("active");
  }
});

wrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuContainer.classList.remove("active");

    sections.forEach((section) => {
      section.classList.remove("active");
    });
  });
});

/* -------------------Section 3------------------*/

//Videos section

//* event listener that plays video on hover

videos.addEventListener("mouseover", (e) => {
  const vid = e.target;
  if (vid.tagName !== "VIDEO") return;
  vid.play();
});

//* event listener that pauses video when unhovered

videos.addEventListener("mouseout", (e) => {
  const vid = e.target;
  if (vid.tagName !== "VIDEO") return;
  vid.pause();
});
