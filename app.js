const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI();

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);

    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.displayFirstSelect();
        exchangeCurrency();

    }
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.displaySecondSelect();
        exchangeCurrency();
        
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(response => ui.displayResult(response))
    .catch(err => console.log(err));
    
}