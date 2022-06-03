function CalculateAge() {
    let date = new Date();
    let day  = date.getDate().padStart(2, '0');
    let month = (date.getMonth() + 1).padStart(2, '0');
    let year  = date.getFullYear();

    console.log(`hj é ${day} de ${month} de ${year}`);
}