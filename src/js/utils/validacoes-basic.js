const validateBasic = (form) => {

    //Validar email
    let email = form.querySelector('#email')
    let emailResult = ValidateEmail(email.value)

    if (!emailResult) {
        email.classList.add('input-error')
        email.value = ''
        email.placeholder = 'Email invalido'
        email.focus()
    }

    let result = emailResult

    return result
}