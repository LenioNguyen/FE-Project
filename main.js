document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("modal");
    const formContainer = document.querySelector(".modal-container");

    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        formContainer.classList.add("active");
    });

    const formClose = document.querySelector(".close");
    formClose.addEventListener("click", function (event) {
        event.preventDefault();
        formContainer.classList.remove("active");
        console.log("close",    `1` formClose)
    });
});
