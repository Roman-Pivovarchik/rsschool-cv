"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  let navArroys = document.querySelectorAll(".nav_arrow");
  if (navArroys.length > 0) {
    for (let index = 0; index < navArroys.length; index++) {
      const navArroy = navArroys[index];
      navArroy.addEventListener("click", function (e) {
        navArroy.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

const navLinks = document.querySelectorAll(".nav_link[data-goto]");

if (navLinks.length > 0) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", onNavLinkClick);
  });

  function onNavLinkClick(e) {
    const navLink = e.target;
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });

      e.preventDefault();
    }
  }
}