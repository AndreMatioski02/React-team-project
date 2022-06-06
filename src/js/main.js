const dynamicContent = document.querySelector(`.dynamic-content`)
const form = document.querySelector('.form')
const controller = new userController()
var tempDataName = 'basic'

//Se não existir o item 'users' no localStorage, ele cria
let users = localStorage.getItem('users')
if (!users)
    localStorage.setItem('users', JSON.stringify([]))

//Trocar de tela sem sair da pagina + animações
document.querySelector('.steps').addEventListener('click', (event) => {
    //If para verificar se os compos obrigatorios possuem value
    let validation = 'no';
    let form = dynamicContent.querySelector(`.form`)

    if (form.dataset.page == 'basic')
        if (validateBasic(form, true)) validation = `ok`


    if (tempDataName == 'certificates') {
        let inputTeam = document.querySelector('#teamName');
        let inputInstitution = document.querySelector('#institution');
        let inputGraduation = document.querySelector('#graduation');
        if (inputTeam.value !== '' && inputInstitution !== '' && inputGraduation !== '') {
            validation = 'ok';
        } else {
            validation = 'ok';
        }
    }

    if (validation == 'ok') {
        controller.save(form.dataset.page, true)
        controller.changeForm(event.target.dataset.page)

        //changeDiv(event)
    }
    /*
    document.querySelectorAll('.list-item').forEach((element) => {
        element.classList.remove('active')
    })
    event.target.classList.add(`active`)
    dynamicContent.classList.add('invisible')
    setTimeout(() => {
        dynamicContent.innerHTML = TemplateManager.getTemplate(event.target.dataset.next);
        tempDataName = event.target.dataset.next
        dynamicContent.classList.remove('invisible')
    }, 200);
    */
})

document.querySelector('#certificates').addEventListener('click', (event) => {
    if (tempDataName == 'social') {
        let inputGit = document.querySelector('#github');
        if (inputGit.value !== '') {
            validation = 'ok';
        }
    }

    if (validation == 'ok') {
        controller.save(tempDataName, true)
        changeDiv(event)
    } else if (validation == 'no') {
        return;
    }
});
document.querySelector('#basic').addEventListener('click', (event) => {
    validation = 'ok';
    if (validation == 'ok') {
        controller.save(tempDataName, true)
        changeDiv(event)
    }
});



//Ao clicar no botão enviar (realizar validações e trocar de tela)
//para funcionar é necessario que exista um formulário na tela com um data-next='id_da_pg_seguinte'
dynamicContent.addEventListener('submit', (event) => {
        event.preventDefault()


        //Validações
        let formName = event.target.dataset.page
            //Validações da tela basic
        if (formName == 'basic')
            if (!validateBasic(event.target, true)) return

        if (formName == 'social')
            if (!ValidateSocial(event.target)) return

            // if (tempDataName == 'certificates')
            //     if (!ValidateSocial(event.target, tempDataName)) return

            //Salvar no banco e trocar de tela
        controller.save(formName, false)

        if (event.target.dataset.next == "report") {
            //escreve a lógica para mostrar o report pós cadastro aqui
            return
        }

        controller.changeForm(event.target.dataset.next)

        //talvez sumir com esse changeDiv
        //changeDiv(event)

    })
    //Evento FocusOut recebido por bubbling
dynamicContent.addEventListener('focusout', (event) => {

    //Valida o campo referido atraves do método do arquivo validacoes-basic
    validateField(event.target)
    
    if (dynamicContent.querySelector('.form').dataset.page == 'basic') {
        validateBasic(dynamicContent.querySelector('.form'), false)

        // calculo da idade
        let age = document.querySelector('#age');
        let day = document.querySelector('#day');
        let month = document.querySelector('#month')
        let year = document.querySelector('#year')
        let newAge = CalculateAge(day.value, month.value, year.value);
        age.placeholder = newAge;
    }

    if (event.target.value != "")
        controller.addToTemp(event, tempDataName)
})


function changeDiv(event) {
    controller.changeForm(event.target.dataset.page)

    //Precisei fazer ele esperar para que nao gerasse um cadastro de temp na proxima tela
    //ele ativa o evento focusout quando some com a div anterior
    setTimeout(() => {
        tempDataName = event.target.dataset.next
    }, 250);
}

window.addEventListener('load', () => {
    controller.changeForm('basic')

    //Precisei fazer ele esperar para que nao gerasse um cadastro de temp na proxima tela
    //ele ativa o evento focusout quando some com a div anterior
    setTimeout(() => {
        tempDataName = 'basic'
    }, 250);
})