const validateBasic = (form) => {

    //Validar email
    let email = form.querySelector('#email')
    let emailResult = ValidateEmail(email.value)

    if (!emailResult) {
        email.classList.add('input-error')
        email.value = ''

        email.placeholder = 'Invalid email, try this format: email@test.com'

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
        inputGit.placeholder = 'invalid link'
        inputGit.focus()
    } else if (!linkedinResults) {
        inputLinkedin.classList.add('input-error')
        inputLinkedin.value = ''
        inputLinkedin.placeholder = 'invalid link'
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
        inputGit.placeholder = 'invalid link'
        inputGit.focus()
    } else if (!linkedinResults) {
        inputLinkedin.classList.add('input-error')
        inputLinkedin.value = ''
        inputLinkedin.placeholder = 'invalid link'
        inputLinkedin.focus()
    }

    let result = gitResults && linkedinResults
    return result
}