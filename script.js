let link = document.querySelector('.header-btn');
let popup = document.querySelector(".modal-content");
let close = document.querySelector(".modal-content-close");
let login = popup.querySelector("[name=login]");
let form = popup.querySelector("form");
let password = popup.querySelector("[name=password]");
let storage = localStorage.getItem("header-btn");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
    console.log("Клік по силці");
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
    console.log("Нажали хрестик");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error")
    } else {
        localStorage.setItem("login", login.value);
    }
    console.log("нажавши Війти Перевірили чи заповнені значення форми");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
    console.log("??????????");
})
