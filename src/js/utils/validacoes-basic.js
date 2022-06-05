const validateField = (target) => {
    switch (target.id) {
        case 'fullName':
            validateInputFullName(target)
            break;
        case 'email':
            validateInputEmail(target)
            break;

        case 'phone':
            validateInputPhone(target)
            break;
        case 'day':
            validateInputDay(target)
            break;
        case 'month':
            validateInputMonth(target)
            break;
        case 'year':
            validateInputYear(target)
            break;

    }
}

const validateBasic = (form) => {

    let fullName = validateInputFullName(form.querySelector('#fullName'))
    let email = validateInputEmail(form.querySelector('#email'))
    let day = validateInputDay(form.querySelector('#day'))
    let month = validateInputMonth(form.querySelector('#month'))
    let year = validateInputYear(form.querySelector('#year'))
    let terms = validateTermsAndPrivacy(form.querySelector('.terms-group'))

    let phoneInput = form.querySelector('#phone')
    let phone = phoneInput.value != '' ? validateInputPhone(phoneInput) : true

    //Sequencia de validações
    let result = fullName && email && phone && day && month && year && terms

    return result
}

//Validar nome completo
function validateInputFullName(name) {

    //Validar apenas letras
    let regexResult = ValidateString(name.value)

    //Validar no minimo duas palavras
    let wordCountResult = name.value.split(' ').length > 1 ? true : false


    if (!(regexResult & wordCountResult)) {
        name.classList.add('input-error')
    } else {
        name.classList.remove('input-error')
    }
    return regexResult & wordCountResult
}

//Validar email
function validateInputEmail(email) {
    let emailResult = ValidateEmail(email.value)
    if (!emailResult) {
        email.classList.add('input-error')
    } else {
        email.classList.remove('input-error')
    }
    return emailResult
}

//Validar phone
function validateInputPhone(phone) {
    let phoneResult = ValidatePhone(phone.value)
    if (!phoneResult) {
        phone.classList.add('input-error')
    } else {
        phone.classList.remove('input-error')
    }
    return phoneResult
}

//Validar data de aniversario
function validateInputDay(day) {
    let dayResult = (day.value > 0 && day.value <= 31)
    if (!dayResult) {
        day.classList.add('input-error')
    } else {
        day.classList.remove('input-error')
    }
    return dayResult
}

function validateInputMonth(day) {
    let monthResult = (month.value > 0 && month.value <= 12)
    if (!monthResult) {
        month.classList.add('input-error')
    } else {
        month.classList.remove('input-error')
    }
    return monthResult
}

function validateInputYear(day) {
    let yearResult = (year.value > 1900 && year.value <= 2022)
    if (!yearResult) {
        year.classList.add('input-error')
    } else {
        year.classList.remove('input-error')
    }
    return yearResult
}

function validateTermsAndPrivacy(terms) {
    let termsResult = terms.querySelector(`#terms`).checked
    if (!termsResult) {
        terms.parentNode.querySelector('.checkbox-error').classList.remove(`invisible`)
    } else {
        terms.parentNode.querySelector('.checkbox-error').classList.add(`invisible`)
    }
    return termsResult
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