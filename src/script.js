const form = document.getElementById("form");
const email = document.getElementById("email");
const errorText = document.getElementById("error-text");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailRegex.test(email.value)) {
    errorText.classList.remove("hidden");
    errorText.classList.add("block");
  }
});

email.addEventListener("focus", (event) => {
  errorText.classList.remove("block");
  errorText.classList.add("hidden");
});
