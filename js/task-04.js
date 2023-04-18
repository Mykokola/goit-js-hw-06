const counterValue = document.querySelector("#value");
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let numb = 0;
decrementEl.addEventListener("click", (e) => {
  numb++
  counterValue.textContent = numb;
});

incrementEl.addEventListener("click", (e) => {
  numb--
  counterValue.textContent = numb;
});
