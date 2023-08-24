"use strict";

const lists = document.querySelectorAll(".navbar-toggle li a");

lists.forEach((list, i) => {
    list.addEventListener("click", function () {
        document.querySelector(".active")?.classList.remove("active");
        lists[i].classList.add("active");
    });
});

const submenu = document.querySelector(".navbar-toggle");
const submenuBtn = document.querySelector(".navbar-toggler");

submenuBtn.addEventListener("click", () => {
    submenu.classList.toggle("open");
    submenu.classList.contains("open")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "scroll");
});
