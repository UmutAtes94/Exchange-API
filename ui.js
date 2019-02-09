class UI{
    constructor(){
        this.firstSelect = document.getElementById("firstCurrency");
        this.secondSelect = document.getElementById("secondCurrency");

        this.outputResult = document.getElementById("outputResult");
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");

    }

    displayResult(amount){
        this.outputResult.value = amount; 

    }
    displayFirstSelect(){
        this.outputFirst.textContent = firstSelect.options[firstSelect.selectedIndex].textContent;

    }
    displaySecondSelect(){
        this.outputSecond.textContent = secondSelect.options[secondSelect.selectedIndex].textContent;

    }
}