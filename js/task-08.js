const emailForm = document.querySelector('[type="email"]')
const passwordForm = document.querySelector('[type="password"]')
const buttonSubmit = document.querySelector('.login-form')
buttonSubmit.addEventListener('submit', e => {
    e.preventDefault()
    if (emailForm.value == '' || passwordForm.value == '') {
        alert('всі поля повинні бути заповнені')
    } else {
        let resultEmail = emailForm.attributes.name.value
        let resultpassword = passwordForm.attributes.name.value
        let result = {}
        result[resultEmail] = emailForm.value
        result[resultpassword] = passwordForm.value
        console.log(result)
        buttonSubmit.reset()
    }
})