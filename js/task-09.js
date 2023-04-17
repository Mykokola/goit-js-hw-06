function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color')
const colortxt = document.querySelector('.color')
changeColorBtn.addEventListener('click',e => {
  let nowColor = getRandomHexColor()
  colortxt.textContent = nowColor
  document.body.style.backgroundColor = nowColor
})