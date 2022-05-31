class userController {


    constructor() {

    }

    addToTemp(tempDataName) {

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

    changeForm(target) {
        let newTab = document.querySelector(`#${target}`)
        document.querySelectorAll('.list-item').forEach((element) => {
            element.classList.remove('active')
        })
        newTab.classList.add(`active`)
        dynamicContent.classList.add('invisible')
        setTimeout(() => {
            dynamicContent.innerHTML = TemplateManager.getTemplate(newTab.dataset.page);
            tempDataName = newTab.dataset.page
            dynamicContent.classList.remove('invisible')
        }, 200);
    }

    save() {

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