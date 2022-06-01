class userController {


    constructor() {

    }

    addToTemp(event, tempDataName) {

        let tempData = JSON.parse(localStorage.getItem(tempDataName))
        if (!tempData) tempData = {}

        if (event.target.type == "checkbox") {
            tempData[event.target] = event.target.checked
        } else
            tempData[event.target.name] = event.target.value

        localStorage.setItem(tempDataName, JSON.stringify(tempData))
    }


    /*
    let user = new User()
    if (this.userExists(this.fullName.value)) {
        user.update(this.fullName.value)
    } else {
        user.create()
    }*/

    changeForm(target) {
        //Pega qual tab foi clicada
        let newTab = document.querySelector(`#${target}`)

        //Desativa a classe active de todas as tabs
        document.querySelectorAll('.list-item').forEach((element) => {
            element.classList.remove('active')
        })

        //Coloca a classe active na tab clicada
        newTab.classList.add(`active`)
        dynamicContent.classList.add('invisible')
        setTimeout(() => {
            //Faz o conteúdo aparecer na div dynamicContent
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
                user.fullName = document.querySelector('#fullName').value
                user.nickname = document.querySelector('#nickname').value
                user.email = document.querySelector('#email').value
                user.phone = document.querySelector('#phone').value
                user.day = document.querySelector('#day').value
                user.month = document.querySelector('#month').value
                user.year = document.querySelector('#year').value
                user.terms = document.querySelector('#terms').checked

                this.addOrUpdateUser(user)
                break;
        }



    }

    addOrUpdateUser(user) {
        //Varrendo o localStorage pra ver se o user ja existe
        let user_exists = false

        let data = JSON.parse(localStorage.getItem('users'))
        data.map((e, i) => {

            //Se já existir, substitui o indice atual do objeto do localStorage
            if (e.fullName == user.fullName) {
                user_exists = true
                data[i] = user
            }
        })

        if (!user_exists) {
            data.push(user)
        }

        localStorage.setItem('users', JSON.stringify(data))

    }
}