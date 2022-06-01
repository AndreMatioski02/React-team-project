const dynamicContent = document.querySelector(`.dynamic-content`)
const form = document.querySelector('.form')
const controller = new userController()
var tempDataName = 'basic'

//Se não existir o item 'users' no localStorage, ele cria
let users = localStorage.getItem('users')
    if(!users)
        localStorage.setItem('users', JSON.stringify([]))

//Trocar de tela sem sair da pagina + animações
document.querySelector('.steps').addEventListener('click', (event) => {
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

})

//Ao clicar no botão enviar (realizar validações e trocar de tela)
document.querySelector('#submit-form').addEventListener('click', (event) => {
    event.preventDefault()

    //Validações

})

//Evento FocusOut recebido por bubbling
dynamicContent.addEventListener('focusout', (event)=>{
    //Valida se o campo digitado nao está em branco
    if(event.target.value != "")
        controller.AddToTemp(tempDataName)
})

