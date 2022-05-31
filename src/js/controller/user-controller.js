class userController {

    fullName = form.querySelector('#fullName')
    nickname = form.querySelector('#nickname')
    email = form.querySelector('#email')

    constructor() {

    }

    AddToTemp(tempDataName) {

        let user = new User()
        user.addTemp(tempDataName)

        /*
        let user = new User()
        if (this.userExists(this.fullName.value)) {
            user.update(this.fullName.value)
        } else {
            user.create()
        }*/
    }

    validateNotNull() {

    }

    userExists(name) {
        let data = JSON.parse(localStorage.getItem('users'))
        let result = false
        if (data.length > 0)
            data.forEach(e => {
                result = e.fullName == name
            })
        return result
    }
}