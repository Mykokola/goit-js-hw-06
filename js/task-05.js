const nameInputEl = document.querySelector("#name-input")
const nameOutputEl =  document.querySelector("#name-output")
nameInputEl.addEventListener("input", (e) => {
  nameOutputEl.textContent =nameInputEl.value
  if (nameInputEl.value === "") {
    nameOutputEl.textContent = "Anonymous";
  }
});
