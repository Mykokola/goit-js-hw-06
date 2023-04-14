const fontSizeControl = document.querySelector('#font-size-control')
const txt = document.querySelector('#text');
fontSizeControl.addEventListener('change', e => {
    txt.style.fontSize = fontSizeControl.value + 'px'
})