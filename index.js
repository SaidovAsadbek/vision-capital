"use strict";

const lists = document.querySelectorAll(".navbar-toggle li a");

lists.forEach((list, i) => {
    list.addEventListener("click", function () {
        document.querySelector(".active")?.classList.remove("active");
        lists[i].classList.add("active");
    });
});

// for (let i = 0; i < lists.length; i++) {
//     lists[i].addEventListener("click", function () {
//         lists[i].classList.remove("active");
//     });
// }
