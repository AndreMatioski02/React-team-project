function starModalOnClick(){
    function modalStart(modalID) {
        const modal = document.getElementById(modalID);
        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            if(event.target.id == modalID || event.target.className == 'close-button') {
                modal.classList.remove('show');
                window.location.href = './list.html';
            }
        });
    }

    const finishButton = document.querySelector('.finish-form-button');
    finishButton.addEventListener('click', () => modalStart('confirmation-modal')
    )
}
    
