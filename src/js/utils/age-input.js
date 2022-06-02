// CALCULANDO O A IDADE DO USUARIO
function CalculateAge(day, month, year) {
    let date = new Date();
    let currentDay  = date.getDate();
    let currentMonth = (date.getMonth() + 1);
    let currentYear = date.getFullYear();

    let age = currentYear - year;

    if (currentMonth < month && currentDay < day) {
        age = age - 1;
    }

    return age;
}
