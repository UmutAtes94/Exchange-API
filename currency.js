class Currency{

    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;

    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url+this.firstCurrency)
            .then(response => response.json())
            .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);

            let total = amount2*parity;
            console.log(total);
            resolve(total);
            
            })
            .catch(err => reject(err));

        });
        
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency; 
        //console.log(this.firstCurrency);

    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;

    }
    changeAmount(amount){
        this.amount = amount;
        //console.log(this.amount);

    }
}