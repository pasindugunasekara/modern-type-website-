const signin_btn = document.querySelector("#signin-btn");
const signup_btn = document.querySelector("#signup-btn");
const container = document.querySelector(".container");


signup_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

signin_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
