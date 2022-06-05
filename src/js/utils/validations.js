function ValidateEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
}

function ValidateUrl(url) {
    return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/ig.test(url)
}

function ValidatePhone(phone) {
    return /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(phone)
}

function ValidateString(string) {
    return /\D+/.test(string)
}