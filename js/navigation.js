const buttonNavigationMobile = document.querySelector(".navigationMobile__button");
const navigationMobile = document.querySelector(".navigationMobile");
const linksNavigationMobile = document.querySelectorAll(".navigationMobile__link")
const line = document.querySelector(".navigationMobile__divLine");

buttonNavigationMobile.addEventListener("click", () => {
    navigationMobile.classList.toggle("navigationMobileActive");
    buttonNavigationMobile.classList.toggle("navigationMobileButtonActive");
    buttonNavigationMobile.classList.toggle("open")
});

linksNavigationMobile.forEach(element => {
    element.addEventListener("click", () => {
        navigationMobile.classList.remove("navigationMobileActive");
        buttonNavigationMobile.classList.toggle("navigationMobileButtonActive");
        buttonNavigationMobile.classList.toggle("open")
    });
});

