const emailForm = document.querySelector('[type="email"]');
const passwordForm = document.querySelector('[type="password"]');
const buttonSubmit = document.querySelector(".login-form");
buttonSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailForm.value == "" || passwordForm.value == "") {
    alert("всі поля повинні бути заповнені");
  } else {
    const resultEmail = emailForm.attributes.name.value;
    const resultpassword = passwordForm.attributes.name.value;
    const result = {};
    result[resultEmail] = emailForm.value;
    result[resultpassword] = passwordForm.value;
    console.log(result);
    buttonSubmit.reset();
  }
});
