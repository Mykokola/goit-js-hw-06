document.querySelector("#name-input").addEventListener("input", (e) => {
  document.querySelector("#name-output").textContent =
    document.querySelector("#name-input").value;
  if (document.querySelector("#name-input").value == "") {
    document.querySelector("#name-output").textContent = "Anonymous";
  }
});
