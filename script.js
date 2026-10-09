// console.log("Hello, World!");

// for(let i = 0; i < 5; i++) {
//     console.log (`Hello ${i}`);
// }

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Switch to light mode";
    } else {
        themeToggle.textContent = "Switch to dark mode";
    }
});