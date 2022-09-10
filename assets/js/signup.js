const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  if (
    firstname.value != "" &&
    lastname.value != "" &&
    age.value != "" &&
    email.value != "" &&
    password.value != ""
  ) {
    submit.setAttribute("href", "./index.html");
  }
});
