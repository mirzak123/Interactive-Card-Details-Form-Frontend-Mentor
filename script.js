const cvcInput = document.querySelector('[name="cvc_number"]');
const cardNumberInput = document.querySelector('[name="card_number"]');
const cardholderNameInput = document.querySelector('[name="cardholder_name"]');
const expMonthInput = document.querySelector('[name=month]');
const expYearInput = document.querySelector('[name=year]');
const cvc = document.querySelector(".card-img-wrapper__cvc");
const cardNumber = document.querySelector('.front-details__card-number');
const cardholderName = document.querySelector(".front-details__cardholder-name");
const expDate = document.querySelector(".front-details__exp-date");

function handleDateInput () {
    let month = expMonthInput.value;
    let year = expYearInput.value.substr(-2);
    month = month ? month : '00';
    year = year ? year : '00';
    expDate.textContent = `${month}/${year}`;
}

cvcInput.addEventListener("input", () => {
    cvc.textContent = cvcInput.value;
});

cardNumberInput.addEventListener("input", () => {
    let rawCardNumberValue = cardNumberInput.value;
    let cardNumberValue = '';
    let formatedNumber = '';
    
    for (char of rawCardNumberValue) {
        if (char.match(/\d/)){
            cardNumberValue += char;
        }
    }
    
    for (index in cardNumberValue) {
        if (index % 4 === 0 && index != 0) {
            formatedNumber += ' ';
        }
        formatedNumber += cardNumberValue[index];
    }
    cardNumber.textContent = formatedNumber;
    cardNumberInput.value = formatedNumber;
    
});

cardholderNameInput.addEventListener("input", () => {
    cardholderName.textContent = cardholderNameInput.value;
});

expMonthInput.addEventListener("input", handleDateInput);
expYearInput.addEventListener("input", handleDateInput);