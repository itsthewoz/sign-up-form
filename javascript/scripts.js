const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirm");
  const errormsg = document.querySelector(".errormsg");
  if (password !== confirm) {
    e.preventDefault();
    password.classList.add("errorinput");
    confirm.classList.add("errorinput");
    errormsg.style.display = "block";
  }
});
