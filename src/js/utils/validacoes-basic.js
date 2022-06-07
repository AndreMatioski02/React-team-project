const validateField = (target) => {
    switch (target.id) {
        case 'fullName':
            validateInputFullName(target, true)
            break;
        case 'email':
            validateInputEmail(target, true)
            break;

        case 'phone':
            validateInputPhone(target, true)
            break;
        case 'day':
            validateInputDay(target, true)
            break;
        case 'month':
            validateInputMonth(target, true)
            break;
        case 'year':
            validateInputYear(target, true)
            break;

    }
}

const validateBasic = (form, format) => {

    let fullName = validateInputFullName(form.querySelector('#fullName'), format)
    let email = validateInputEmail(form.querySelector('#email'), format)
    let day = validateInputDay(form.querySelector('#day'), format)
    let month = validateInputMonth(form.querySelector('#month'), format)
    let year = validateInputYear(form.querySelector('#year'), format)
    let terms = validateTermsAndPrivacy(form.querySelector('.terms-group'), format)

    let phoneInput = form.querySelector('#phone', format)
    let phone = phoneInput.value != '' ? validateInputPhone(phoneInput) : true

    //Sequencia de validações
    var result = fullName && email && phone && day && month && year && terms
    if (!result)
        form.querySelector('.submit-form-button').classList.add('disabled')
    else
        form.querySelector('.submit-form-button').classList.remove('disabled')

    return result
}

//Validar nome completo
function validateInputFullName(name, format) {

    //Validar apenas letras
    let regexResult = ValidateString(name.value)

    //Validar no minimo duas palavras
    let wordCountResult = name.value.split(' ').length > 1 ? true : false

    if (format) {
        if (!(regexResult & wordCountResult)) {
            name.classList.add('input-error')
        } else {
            name.classList.remove('input-error')
        }
    }
    return regexResult & wordCountResult
}

//Validar email
function validateInputEmail(email, format) {
    let emailResult = ValidateEmail(email.value)
    if (format) {
        if (!emailResult) {
            email.classList.add('input-error')
        } else {
            email.classList.remove('input-error')
        }
    }
    return emailResult
}

//Validar phone
function validateInputPhone(phone, format) {
    let phoneResult = ValidatePhone(phone.value)
    if (phone.value.length > 0 && format) {
        if (!phoneResult) {
            phone.classList.add('input-error')
        } else {
            phone.classList.remove('input-error')
        }
    } else {
        phone.classList.remove('input-error')
    }

    return phoneResult
}

//Validar data de aniversario
function validateInputDay(day, format) {
    let dayResult = (day.value > 0 && day.value <= 31)

    if (format) {
        if (!dayResult) {
            day.classList.add('input-error')
        } else {
            day.classList.remove('input-error')
        }
    }

    return dayResult
}

function validateInputMonth(month, format) {
    let monthResult = (month.value > 0 && month.value <= 12)

    if (format) {
        if (!monthResult) {
            month.classList.add('input-error')
        } else {
            month.classList.remove('input-error')
        }
    }

    return monthResult
}

function validateInputYear(year, format) {
    let yearResult = (year.value > 1900 && year.value <= 2022)

    if (format) {
        if (!yearResult) {
            year.classList.add('input-error')
        } else {
            year.classList.remove('input-error')
        }
    }

    return yearResult
}

function validateTermsAndPrivacy(terms, format) {
    let termsResult = terms.querySelector(`#terms`).checked

    if (format) {
        if (!termsResult) {
            terms.parentNode.querySelector('.checkbox-error').classList.remove(`invisible`)
        } else {
            terms.parentNode.querySelector('.checkbox-error').classList.add(`invisible`)
        }
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
    let teamName    = form.querySelector('#teamName');
    let institution = form.querySelector('#institution');
    let graduation  = form.querySelector('#graduation');

    let teamNameResult    = ValidateInputCertificate(teamName.value);
    let institutionResult = ValidateInputCertificate(institution.value);
    let graduationResult  = ValidateInputCertificate(graduation.value);


    if (!teamNameResult) {
       teamName.classList.add('input-error')
       teamName.parentNode.querySelector('.team-error').classList.remove(`invisible`);

    }else if (teamNameResult) {
        teamName.classList.remove('input-error');
        teamName.parentNode.querySelector('.team-error').classList.add(`invisible`);
    }

    if (!institutionResult) {
        institution.classList.add('input-error');
        institution.parentNode.querySelector('.institution-error').classList.remove(`invisible`);

    }else if (institutionResult) {
        institution.classList.remove('input-error');
        institution.parentNode.querySelector('.institution-error').classList.add(`invisible`);
    }

    if (!graduationResult) {
        graduation.classList.add('input-error');
        graduation.parentNode.querySelector('.graduation-error').classList.remove(`invisible`);
    }else if (graduationResult) {
        graduation.classList.remove('input-error');
        graduation.parentNode.querySelector('.graduation-error').classList.add(`invisible`)
    }

    let result = teamNameResult && institutionResult && graduationResult;
    return result;

}

function ValidateInputCertificate(value) {
    if (value.length > 2) {
        return true;
    }else {
        return false;
    }
    
}


