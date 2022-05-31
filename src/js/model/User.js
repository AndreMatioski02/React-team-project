class User {

    constructor() {
    }


    addTemp(tempDataName) {
        let user = new User()
        let arr = [...document.querySelector('.form').elements]
        arr.map(e => {
            if (e.type == "checkbox"){
                user[e.name] = e.checked
            } else 
                user[e.name] = e.value
        })

        localStorage.setItem(tempDataName, JSON.stringify(user))
    }

    //localStorage.setItem(users, this.update)

    update(name) {
        let data = JSON.parse(localStorage.getItem('users'))
        data.map(e => {
            if (e.fullName == name) {
                let arr = [...document.querySelector('.form').elements]
                arr.map(attr => {
                    if (attr.type == "CHECKBOX")
                        e[attr.name] = attr.checked

                    e[attr.name] = attr.value
                })
                console.log(e);
            }
        })
        localStorage.setItem('users', JSON.stringify(data))
    }

    ToString() {
        return `
        ${this.fullName}
        ${this.nickname}
        ${this.email}
        ${this.phone}
        `
    }

}