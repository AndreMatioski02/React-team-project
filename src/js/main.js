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
    if (tempDataName == 'basic') {
        let inputName = document.querySelector('#fullName');
        let inputEmail = document.querySelector('#email');
        if (inputName.value !== '' && inputEmail.value !== '') {
            validation = 'ok';
        }
    } else if (tempDataName == 'social') {
        let inputGit = document.querySelector('#github');
        if (inputGit.value !== '') {
            validation = 'ok';
        }
    } else if (tempDataName == 'certificates') {
        let inputTeam = document.querySelector('#teamName');
        let inputInstitution = document.querySelector('#institution');
        let inputGraduation = document.querySelector('#graduation');
        if (inputTeam.value !== '' && inputInstitution !== '' && inputGraduation !== '') {
            validation = 'ok';
        }
    }

    if (validation == 'ok') {
        controller.save(tempDataName, true)
        changeDiv(event)
            /*
        document.querySelectorAll('.list-item').forEach((element) => {
            element.classList.remove('active')
        })
        event.target.classList.add(`active`)
        dynamicContent.classList.add('invisible')
        setTimeout(() => {
            dynamicContent.innerHTML = TemplateManager.getTemplate(event.target.dataset.page);
            tempDataName = event.target.dataset.page
            dynamicContent.classList.remove('invisible')
        }, 200);
        */
    } else if (validation == 'no') {
        return;
    }
})

//Ao clicar no botão enviar (realizar validações e trocar de tela)
//para funcionar é necessario que exista um formulário na tela com um data-page='id_da_pg_seguinte'
dynamicContent.addEventListener('submit', (event) => {
    event.preventDefault()

    //Validações

    //Salvar no banco e trocar de tela
    controller.save(tempDataName, false)

    if(event.target.dataset.page == "report"){
        //escreve a lógica para mostrar o report pós cadastro aqui
        return
    }
    changeDiv(event)

})

//Evento FocusOut recebido por bubbling
dynamicContent.addEventListener('focusout', (event) => {
    if (tempDataName == 'basic') {
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
        tempDataName = event.target.dataset.page
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

