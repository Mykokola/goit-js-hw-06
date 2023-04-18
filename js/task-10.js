function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const numberInput = document.querySelector('[type="number"]');
const boxesEl =   document.querySelector("#boxes");

createBtn.addEventListener("click", (e) => {
  if(+numberInput.min < +numberInput.value && +numberInput.value > +numberInput.max){
    return
  }
  let size = 30;
  for (let i = 0; i < +numberInput.value; i += +numberInput.step) {
    let newElem = document.createElement("div");
    newElem.style.width = size + "px";
    newElem.style.height = size + "px";
    newElem.style.backgroundColor = getRandomHexColor();
    newElem.classList.add("boxesChild");
    boxesEl.append(newElem);
    size += 10;
  }
});
destroyBtn.addEventListener("click", (e) => {
  boxesEl.innerHTML = ''
});
