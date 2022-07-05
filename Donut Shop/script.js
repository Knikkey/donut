"use strict";

const allNavLinks = document.querySelectorAll(".nav-link");
const pageLogo = document.querySelectorAll(".logo-link");
const heroTextBox = document.querySelector(".hero-text-box");
const nav = document.querySelector(".nav-container");
const hero = document.querySelector(".hero-container");
const logoBox = document.querySelector(".logo-box");
const logos = document.querySelectorAll(".logos");

////////////////////////////////////////////////////////////////////////////
// Smooth scrolling
pageLogo.forEach((logo) =>
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
);

allNavLinks.forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    e.preventDefault();

    const href = navLink.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  })
);

////////////////////////////////////////////////////////////////////////////
// tabs
const aboutUsText = document.querySelector(".about-us-text");
const aboutUsTitle = document.querySelector(".about-us-title");
const aboutUsPic = document.querySelector(".about-us-picture");
const aboutUsContent = document.querySelector(".about-us-content");
const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");
const testBox = document.querySelector(".testimonial-box");

///////////////
//functions
const removeReveal = function (el) {
  setTimeout(() => {
    el.classList.remove("reveal");
  }, 300);
};

const changeText = function (title, text, imgSrc, imgAlt) {
  aboutUsContent.classList.add("hide");
  aboutUsTitle.innerText = title;
  aboutUsText.innerText = text;
  aboutUsPic.src = imgSrc;
  aboutUsPic.alt = imgAlt;
  aboutUsContent.classList.remove("hide");

  aboutUsContent.classList.add("reveal");
};

///////////////
//Tab 1
tab1.addEventListener("click", function (e) {
  e.preventDefault;

  testBox.classList.add("hidden");
  aboutUsContent.classList.remove("transp");

  changeText(
    "Changing fitness 1 \n donut at a time",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda illo reprehenderit suscipit dolores sapiente voluptas consequuntur velit inventore quas ratione impedit voluptate ea, sunt nesciunt corporis fugit dolor, non, aspernatur ipsam ex? Aspernatur quia voluptatem ex labore tenetur voluptas porro expedita sapiente quo nostrum fugit quasi eligendi aperiam, sequi reprehenderit excepturi",
    "img/Pink donut girl.webp",
    "picture of girl eating donut"
  );

  tab2.classList.remove("active-tab");
  tab3.classList.remove("active-tab");
  tab1.classList.add("active-tab");
  removeReveal(aboutUsContent);
});

///////////////
//Tab 2
tab2.addEventListener("click", function (e) {
  e.preventDefault;

  testBox.classList.add("hidden");
  aboutUsContent.classList.remove("transp");

  changeText(
    "Diet on donuts",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda illo reprehenderit suscipit dolores sapiente voluptas consequuntur velit inventore quas ratione impedit voluptate ea, sunt nesciunt corporis fugit dolor, non, aspernatur ipsam ex?",
    "img/no shirt.webp",
    "shirtless guy"
  );

  tab1.classList.remove("active-tab");
  tab3.classList.remove("active-tab");
  tab2.classList.add("active-tab");
  removeReveal(aboutUsContent);
});

///////////////
//Tab 3
tab3.addEventListener("click", function (e) {
  e.preventDefault();

  aboutUsContent.classList.add("transp");

  tab1.classList.remove("active-tab");
  tab2.classList.remove("active-tab");
  tab3.classList.add("active-tab");

  testBox.classList.remove("hidden");
  testBox.classList.add("reveal");
  removeReveal(testBox);
});

///////////////
//Testimonials slider

const leftArr = document.querySelector(".arrow-left");
const rightArr = document.querySelector(".arrow-right");
const testimonials = document.querySelectorAll(".testimonials");

let curSlide = 1;

const closeSlide = function () {
  document
    .querySelector(`.test--${curSlide}`)
    .classList.toggle("testimonials--closed");
};

const openSlide = function () {
  document
    .querySelector(`.test--${curSlide}`)
    .classList.toggle("testimonials--closed");
};

rightArr.addEventListener("click", function () {
  if (curSlide < 3) {
    closeSlide();
    curSlide++;
    openSlide();
  }
});

leftArr.addEventListener("click", function () {
  if (curSlide > 1) {
    closeSlide();
    curSlide--;
    openSlide();
  }
});

////////////////////////////////////////////////////////////////////////////
// shop buttons
const optionBtns = document.querySelectorAll(".option-btn");
const drpMenu = document.querySelectorAll(".dropdown-menu");

///////////////
//dropdown
optionBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.nextElementSibling.classList.toggle("hidden");
  })
);

///////////////
//pagination
const pageBtns = document.querySelectorAll(".page-btn");

pageBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    pageBtns.forEach((btn) => btn.classList.remove("active-page"));
    btn.classList.add("active-page");
  })
);

////////////////////////////////////////////////////////////////////////////
// cta modal

const ctaBtn = document.querySelector(".submit-btn");
const ctaModal = document.querySelector(".cta-modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector(".overlay");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const formInputs = [fname, lname, email];

const openModal = function (modal) {
  modal.classList.remove("hidden");
  overlay.classList.remove("transp");
  overlay.classList.remove("overlay--hidden");
  overlay.classList.add("modal--active");
};

const closeModal = function (modal) {
  modal.classList.add("hidden");
  overlay.classList.add("transp");
  overlay.classList.add("overlay--hidden");
  overlay.classList.remove("modal--active");
};

const closeModalFull = function (modal) {
  modalBtn.forEach((btn) =>
    btn.addEventListener("click", function () {
      closeModal(modal);
    })
  );

  overlay.addEventListener("click", function () {
    closeModal(modal);
  });
};

ctaBtn.addEventListener("click", function (e) {
  if (fname.validity.valid && lname.validity.valid && email.validity.valid) {
    e.preventDefault();
    openModal(ctaModal);
  }
});

closeModalFull(ctaModal);

////////////////////////////////////////////////////////////////////////////
// FAQ Modal

const faqModal = document.querySelector(".faq-modal");
const items = document.querySelectorAll(".item");
const faq = document.querySelector("#faq");

items.forEach((item) =>
  item.addEventListener("click", function (e) {
    item.lastElementChild.classList.toggle("open");
  })
);

faq.addEventListener("click", function () {
  openModal(faqModal);
});

closeModalFull(faqModal);

////////////////////////////////////////////////////////////////////////////
// sticky nav

/////
//Note, I don't like the sticky, but keeping the code just in case I change my mind later
/////

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (!ent.isIntersecting) nav.classList.add("sticky");

//     if (ent.isIntersecting) nav.classList.remove("sticky");
//   },
//   {
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );

// obs.observe(hero);
