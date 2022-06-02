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
    controller.save(tempDataName)
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
})

// Listando os anos do Select 


/*
let listAge = [];
for(let i = 1903; i < 2023; i++) {
    listAge[i] = i;
}  
listAge.sort((a, b) => b - a);

const yearId = document.getElementById("year");
const years = listAge;
years.forEach((age) => {
    option = new Option(age);
    yearId.options[yearId.options.length] = option;
});*/

//Ao clicar no botão enviar (realizar validações e trocar de tela)
//para funcionar é necessario que exista um formulário na tela com um data-page='id_da_pg_seguinte'
dynamicContent.addEventListener('submit', (event) => {
    event.preventDefault()

    //Validações

    //Salvar no banco e trocar de tela
    controller.save(tempDataName)
    changeDiv(event)
})

//Evento FocusOut recebido por bubbling
dynamicContent.addEventListener('focusout', (event) => {
    //Valida se o campo digitado nao está em branco
    if(event.target.classList.contains('certificate')){
        
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