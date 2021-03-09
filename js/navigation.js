const buttonNavigationMobile = document.querySelector(".navigationMobile__button");
const navigationMobile = document.querySelector(".navigationMobile");
const wrapper = document.querySelector(".wrapper")
const linksNavigationMobile = document.querySelectorAll(".navigationMobile__link")

buttonNavigationMobile.addEventListener("click", () => {
    navigationMobile.classList.toggle("navigationMobileActive");
    buttonNavigationMobile.classList.toggle("navigationMobileButtonActive");
});

linksNavigationMobile.forEach(element => {
    element.addEventListener("click", () => {
        navigationMobile.classList.remove("navigationMobileActive");
    });
});
