class userController {


    constructor() {

    }

    addToTemp(tempDataName) {

        let user = new User()
        let arr = [...document.querySelector('.form').elements]
        arr.map(e => {
            if (e.type == "checkbox") {
                user[e.name] = e.checked
            } else
                user[e.name] = e.value
        })

        localStorage.setItem(tempDataName, JSON.stringify(user))

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

    save(page) {
        switch (page) {
            case 'basic':

                //buscando no DOM e atribuindo variaveis
                let user = new User()
                let fullName = document.querySelector('#fullName').value
                let nickname = document.querySelector('#nickname').value
                let email = document.querySelector('#email').value
                let phone = document.querySelector('#phone').value
                let day = document.querySelector('#day').value
                let month = document.querySelector('#month').value
                let year = document.querySelector('#year').value
                let terms = document.querySelector('#terms').checked
                user.fullName = fullName
                user.nickname = nickname
                user.email = email
                user.phone = phone
                user.day = day
                user.month = month
                user.year = year
                user.terms = terms


                this.addOrUpdateUser(user)
                break;
        }



    }

    addOrUpdateUser(user) {
        //Varrendo o localStorage pra ver se o user ja existe
        let user_exists = false

        let data = JSON.parse(localStorage.getItem('users'))
        data.map((e, i) => {
            if (e.fullName == user.fullName) {
                user_exists = true
                console.log(data);
                data[i] = user
                console.log(data);
            }
        })

        if (!user_exists) {
            console.log('n existe');
            data.push(user);
            // para testar com mais de 1 usuario
            // data.push(user);
            // data.push(user);
            // data.push(user);
            // data.push(user);
            // data.push(user);
        }
        localStorage.setItem('users', JSON.stringify(data))

    }
}