const validateBasic = (form) => {

    //Validar email
    let email = form.querySelector('#email')
    let emailResult = ValidateEmail(email.value)

    if (!emailResult) {
        email.classList.add('input-error')
        email.value = ''
        email.placeholder = ''
        email.focus()
    }

    let result = emailResult

    return result
}

const VaidateUrl = (form) => {
        let inputGit = form.querySelector('#github');
        let inputLinkedin = form.querySelector('#linkedin')

        gitResults = ValidateUrl(inputGit.value);
        linkedinResults = ValidateUrl(inputLinkedin.value);

        if (!gitResult) {
            inputGit.classList.add('input-error')
            inputGit.value = ''
            inputGit.placeholder = 'Email invalido'
            inputGit.focus()
        }else if (!inputLinkedin) {
            inputLinkedin.classList.add('input-error')
            inputLinkedin.value = ''
            inputLinkedin.placeholder = 'Email invalido'
            inputLinkedin.focus()
        }
    
        let result = gitResults && linkedinResults
        return result
}