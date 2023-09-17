let input = document.querySelector(".field__input");
let btn = document.querySelector(".field__btn");
let check = document.querySelector(".reselt__check__out");
let help = document.querySelector(".reselt__help__out");
let count = document.querySelector(".reselt__count__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);

btn.onclick = function (evt) {
    evt.preventDefult();
    userNum = input.Value;
    if ( userNum > randNum ) {
        check.textContent = "Пока что не угадали . . .";
        help.textContent = "Многовато будет";
        item++;
        count.textContent = item
    } else if ( userNum < randNum ) {
        check.textContent = "Пока что не угадали . . .";
        help.textContent = "Маловато будет";
        item++;
        count.textContent = item
    } else{
        check.textContent = "Поздравляем! Вы угадали.";
        help.textContent = "В самы раз";
        item++;
        count.textContent = item
    }
}