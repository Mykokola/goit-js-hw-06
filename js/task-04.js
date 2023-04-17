const counterValue = document.querySelector("#value");
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", (e) => {
    counterValue.textContent--;
  });
document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", (e) => {
    counterValue.textContent++;
  });
