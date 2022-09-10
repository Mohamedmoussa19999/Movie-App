const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  if (username.value != "" && password.value != "") {
    submit.setAttribute("href", "./index.html");
  }
});
