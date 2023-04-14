function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const numberInput = document.querySelector('[type="number"]')
createBtn.addEventListener('click',e => {
  let wDiv = 30;
  let hDiv = 30;
  for(let i = 0; i < +numberInput.value; i++){
    let newElem = document.createElement('div')
    newElem.style.width = wDiv + 'px'
    newElem.style.height = hDiv + 'px'
    newElem.style.backgroundColor = getRandomHexColor()
    newElem.classList.add('boxesChild')
    document.querySelector('#boxes').append(newElem)
    wDiv += 10
    hDiv += 10
  }
})
destroyBtn.addEventListener('click',e => {
  document.querySelectorAll('.boxesChild').forEach(g => g.remove())
})