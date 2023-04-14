const emailForm = document.querySelector('[type="email"]')
const passwordForm = document.querySelector('[type="password"]')
const buttonSubmit = document.querySelector('[ type="submit"]')
buttonSubmit.addEventListener('click',e => {
    e.preventDefault()
    if(emailForm.value == '' || passwordForm.value == '') {
    alert('всі поля повинні бути заповнені')
}else{
    let resultEmail = emailForm.attributes.name.value
    let resultpassword = passwordForm.attributes.name.value
    console.log({resultEmail: emailForm.value,resultpassword:passwordForm.value})
 document.querySelector('.login-form').reset()
}
})