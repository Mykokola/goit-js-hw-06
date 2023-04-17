const fontSizeControlEl = document.querySelector("#font-size-control");
const txtEl = document.querySelector("#text");
fontSizeControlEl.addEventListener("input", (e) => {
  txtEl.style.fontSize = fontSizeControlEl.value + "px";
});
