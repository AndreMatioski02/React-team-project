function toggleFinishButton() {
    const teamName = document.querySelector('#teamName').value;
    const institution = document.querySelector('#institution').value;
    const graduation = document.querySelector('#graduation').value;

    if(!teamName && !institution && !graduation){
        document.querySelector('#finishButton').disabled = true;
        return
    }else {
        document.querySelector('#finishButton').disabled = false;
    }
}

toggleFinishButton();