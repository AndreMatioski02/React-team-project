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

const ValidateSocial = (form) => {
    let inputGit = form.querySelector('#github');
    let inputLinkedin = form.querySelector('#linkedin')

    let gitResults = ValidateUrl(inputGit.value);
    let linkedinResults = ValidateUrl(inputLinkedin.value);

    if (!gitResults) {
        inputGit.classList.add('input-error')
        inputGit.value = ''
        inputGit.placeholder = 'link invalido'
        inputGit.focus()
    } else if (!linkedinResults) {
        inputLinkedin.classList.add('input-error')
        inputLinkedin.value = ''
        inputLinkedin.placeholder = 'link invalido'
        inputLinkedin.focus()
    }

    let result = gitResults && linkedinResults
    return result
}

const ValidateCertificate = (form) => {
    //faltou implementar ########
    let inputLinkedin = form.querySelector('#linkedin')

    let gitResults = ValidateUrl(inputGit.value);
    let linkedinResults = ValidateUrl(inputLinkedin.value);

    if (!gitResults) {
        inputGit.classList.add('input-error')
        inputGit.value = ''
        inputGit.placeholder = 'link invalido'
        inputGit.focus()
    } else if (!linkedinResults) {
        inputLinkedin.classList.add('input-error')
        inputLinkedin.value = ''
        inputLinkedin.placeholder = 'link invalido'
        inputLinkedin.focus()
    }

    let result = gitResults && linkedinResults
    return result
}