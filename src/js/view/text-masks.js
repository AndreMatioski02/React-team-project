function addTextMask() {
    const inputName = document.querySelector('#fullName');

    inputName.addEventListener('keypress', (event) => {
        let keyCode = (event.keyCode ? event.keyCode : event.wich);

        if(keyCode < 65){
            event.preventDefault();
        }
    });

    const inputNickName = document.querySelector('#nickname');

    inputNickName.addEventListener('keypress', (event) => {
        let keyCode = (event.keyCode ? event.keyCode : event.wich);

        if(keyCode < 65){
            event.preventDefault();
        }
    });
}