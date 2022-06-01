// GERANDO ANOS PARA O SELECT
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
});