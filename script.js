const form = document.querySelector("form")
const password = document.getElementById("password")
const confirmed_password = document.getElementById("confirm-password")
const password_error = document.querySelector("p.invalid-password")
let error = false

form.addEventListener("submit", event => {
    if (password.value !== confirmed_password.value) {
        event.preventDefault();
        if (!error){
            password.classList.add("error")
            confirmed_password.classList.add("error")
            password_error.textContent = "*Passwords do not match"
            error = true
        }
    } else {
        if (error){
            password.classList.remove("error")
            confirmed_password.classList.remove("error")
            password_error.textContent = ""
            error = false
        }
    }
})
