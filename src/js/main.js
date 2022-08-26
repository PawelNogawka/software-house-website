const burgerBtn = document.querySelector(".nav__burger-btn");

burgerBtn.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");

  const links = document.querySelectorAll(".nav__link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 0) {
    header.classList.add("change");
  } else {
    header.classList.remove("change");
  }
});

//filterbale gallery

const btns = document.querySelectorAll(".portfolio__btn");

const imgs = document.querySelectorAll(".portfolio__img");

btns.forEach((btn) => {
  btn.addEventListener("click", handleGallery);
});

function handleGallery(e) {
  changeActiveBtn(e);

  let data = e.target.getAttribute("data-filter");

  changeGallery(data);
}

function changeGallery(data) {
  imgs.forEach((img) => {
    let imgValue = img.parentNode.getAttribute("data-item");

    if (imgValue == data || data == "all") {
      img.parentNode.style.display = "block";
    } else {
      img.parentNode.style.display = "none";
    }
  });
}

function changeActiveBtn(e) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
}

const contactBtn = document.querySelector(".contact__btn");

contactBtn.addEventListener("click", function () {
  document.querySelector(".contact__container").classList.toggle("change");
});

// slideshow
const slider = document.querySelector(".contact__slideshow");

function playSlider() {
  setInterval(() => {
    let firstIcon = slider.firstElementChild;
    let thirdIcon = slider.children[3];

    firstIcon.classList.add("fade-out");

    thirdIcon.previousElementSibling.classList.remove("light");
    thirdIcon.classList.add("light");

    setTimeout(() => {
      slider.removeChild(firstIcon);

      slider.appendChild(firstIcon);

      setTimeout(() => {
        firstIcon.classList.remove("fade-out");
      }, 500);
    }, 500);
  }, 3000);
}

playSlider();
