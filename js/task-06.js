const inputValid = document.querySelector('#validation-input')
inputValid.addEventListener('blur', e => {
    if (inputValid.value.length == 6) {
        inputValid.classList.remove('invalid')
        inputValid.classList.add('valid')
    } else {
        inputValid.classList.remove('valid')
        inputValid.classList.add('invalid')
    }
})