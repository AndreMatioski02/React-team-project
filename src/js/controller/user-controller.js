class userController {


    constructor() {

    }

    addToTemp(event, tempDataName) {

        //não salva nada caso o evento tenha vindo do botão next
        if (event.target.classList.contains('.submit-form-button')) return

        let tempData = JSON.parse(localStorage.getItem(tempDataName))
        if (!tempData) tempData = {}

        if (event.target.classList.contains('certificate')) {
            //Cria o objeto se não existir
            if (!tempData['certificates']) {
                tempData['certificates'] = []
                tempData['favorites'] = []

            }

            //Atribui no array no ID definido no input
            tempData['certificates'][event.target.dataset.id] = event.target.value;
            event.target.setAttribute('disabled', 'disabled')
        } else if (event.target.classList.contains('favorite')) {
            //Cria o objeto se não existir
            if (!tempData['favorites']) tempData['favorites'] = []

            //Atribui no array no ID definido no input
            tempData['favorites'][event.target.dataset.id] = event.target.dataset.favorite;

        } else {
            if (event.target.type == "checkbox")
                tempData[event.target.name] = event.target.checked
            else
                tempData[event.target.name] = event.target.value
        }

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


            if (target == 'basic') {
                addPhoneMask()
                validateBasic(dynamicContent.querySelector('.form'), false)
            }

            //Tratamento diferenciado para tela de certificados
            if (target == 'certificates') {

                dynamicContent.querySelector('#addCertificate').addEventListener('click', (event) => {
                    event.preventDefault() //para nao enviar o form
                    let certificateList = dynamicContent.querySelector('#certificateList')
                    let count = certificateList.querySelectorAll('.certificate').length
                    if (count < 5) {
                        if (this.inputsNotNull('.certificate'))
                            certificateList.insertAdjacentHTML('beforeend', TemplateManager.getCertificateTemplate(count))
                    } else {
                        event.target.setAttribute('disabled', 'disabled')
                    }

                })

                dynamicContent.querySelector('#certificateList').addEventListener('click', (event) => {
                    if (event.target.classList.contains('favorite')) {
                        event.target.dataset.favorite = event.target.dataset.favorite == `true` ? false : true
                        event.target.src = event.target.dataset.favorite == `true` ? 'images/favorite-filled.png' : 'images/favorite.png'
                        this.addToTemp(event, 'certificates')

                    }

                    if (event.target.classList.contains('edit')) {
                        let input = event.target.parentNode.parentNode.querySelector('input')
                        input.disabled = false
                        input.focus()


                    }

                    if (event.target.classList.contains('trash')) {
                        let answer = confirm("Do you really want to remove the selected certificate?");
                        if (answer) {
                            //Remove certificate

                            let input = event.target.parentNode.parentNode.querySelector('input')
                            let tempData = JSON.parse(localStorage.getItem('certificates'))
                            tempData['certificates'].splice([input.dataset.id], 1)
                            tempData['favorites'][input.dataset.id] = false
                            if (event.target.parentNode.parentNode.parentNode.childElementCount > 1)
                                event.target.parentNode.parentNode.remove()
                            else {
                                input.value = ''
                                input.disabled = false
                            }
                            localStorage.setItem('certificates', JSON.stringify(tempData))

                        }
                    }
                })

                dynamicContent.querySelector('.certificate-actions').addEventListener('click', (event) => {


                })
            }
        }, 200);


    }

    inputsNotNull(query) {
        let elements = [...document.querySelectorAll(query)]
        let result = true
        elements.map(e => {
            if (e.value == '') {
                result = false
                return
            }
        })
        return result
    }

    save(page, isTab) {
        if (page == 'basic') {

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
        }

        if (page == 'social') {
            let databasic = JSON.parse(localStorage.getItem('basic'))
            let users = JSON.parse(localStorage.getItem('users'))
            users.map(e => {
                if (e.fullName == databasic.fullName) {
                    e.linkedin = document.querySelector('#linkedin').value
                    e.github = document.querySelector('#github').value
                    return
                }
            })
            localStorage.setItem('users', JSON.stringify(users))

        }


        if (page == 'certificates') {

            let databasic = JSON.parse(localStorage.getItem('basic'))
            let datacertificate = JSON.parse(localStorage.getItem('certificates'))
            let users = JSON.parse(localStorage.getItem('users'))
            let newUsers = [...users.map(e => {
                if (e.fullName == databasic.fullName) {
                    //Atualiza JSON com os dados de certificados
                    e = {
                        ...e,
                        ...datacertificate
                    };
                }
                return e
            })]
            localStorage.setItem('users', JSON.stringify(newUsers))

            if (!isTab) {
                localStorage.removeItem('basic')
                localStorage.removeItem('social')
                localStorage.removeItem('certificates')
            }



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