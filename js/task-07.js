const fontSizeControlEl = document.querySelector("#font-size-control");
const txtEl = document.querySelector("#text");
txtEl.style.fontSize = fontSizeControlEl.value + "px";
fontSizeControlEl.addEventListener("input", (e) => {
  txtEl.style.fontSize = fontSizeControlEl.value + "px";
});
