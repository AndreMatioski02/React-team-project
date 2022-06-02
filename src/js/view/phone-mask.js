function addPhoneMask(){
    const inputPhone = document.querySelector('#phone')

    inputPhone.addEventListener('keypress', () => {
        let inputLength = inputPhone.value.length

        if(inputLength === 0) {
            inputPhone.value += '('
        } else if (inputLength === 3){
            inputPhone.value += ') '
        } else if (inputLength === 10){
            inputPhone.value += '-'
        }
    });

    inputPhone.addEventListener('keypress', (event) => {
        let keyCode = (event.keyCode ? event.keyCode : event.wich);

        if(keyCode < 47 || keyCode > 58){
            event.preventDefault();
        }
    });
}
    

