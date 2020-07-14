const form = document.querySelector(".login-form");
const loginInput = document.querySelector("#login-login");
const loginPassword = document.querySelector("#login-password");
const entryBtn = document.querySelector("#entry-btn")

form.addEventListener("submit", function (evt) {
    if (!loginInput.value || !loginPassword.value) {
        evt.preventDefault();
        document.location.href = "password-recovery.html";
    }
});

entryBtn.addEventListener("click", function (evt) {
    evt.preventDefault()
})