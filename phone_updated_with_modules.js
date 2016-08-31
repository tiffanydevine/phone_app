(function(exports) {
    var taxRate = 0.06; 
    var phonePrice = 600.00; 
    var bankBalance = 2600.00; 
    var mentalThreshold = 200.00; 
    
    exports.phoneCount = function phoneCount() {
        // takes no arguements 
        // calls balanceAfterAllPurchases() and divides it by addTax() 
        // returns the number of phones purchased.
        return (bankBalance - exports.balanceAfterAllPurchases(mentalThreshold))/exports.addTax(phonePrice, taxRate); 
    }; 
    
    exports.balanceAfterAllPurchases = function balanceAfterAllPurchases(mentalThreshold){
        // takes a mentalThreshold
        // will buy phones until you hit a point where buying another phone would send you below your mental threshold. 
        // returns bank balance after all purchases are made. 
        // called inside formatBankBalance()
        var tempBankBal = bankBalance; 
    
        do {
            if (mentalThreshold >=  exports.balanceAfterPurchase(tempBankBal)) {
                return tempBankBal; 
            } else {
            tempBankBal = exports.balanceAfterPurchase(tempBankBal); 
            }
        } 
        while (mentalThreshold <  tempBankBal); 
        return tempBankBal;
    }; 
    
    exports.balanceAfterPurchase = function balanceAfterPurchase(bankBalance){
        // WORKS CORRECTLY
        // takes a bank balance.
        // returns bank balance - phone + tax.
        // called inside : balanceAfterAllPurhcases 
        bankBalance -= exports.addTax(phonePrice, taxRate); 
        return bankBalance; 
    }; 
    
    exports.formatBankBalance = function formatBankBalance() {
        // WORKS CORRECTLY
        // Takes nothing adds a $ to the final balance. also transforms the final balance to a string. 
        // called inside : outputBalance()
        return ("$" + exports.balanceAfterAllPurchases(mentalThreshold).toFixed(2).toString()); 
    }; 
    
    exports.addTax = function addTax(price, taxrate, isExempt) {
        // WORKS CORRECTLY
        // Takes a price, a tax-rate, and isExempt.  
        // returns either the price without tax or with tax. 
        // called inside : 
        isExempt = typeof isExempt != 'undefined' ? isExempt : false; 
        return isExempt? price: price + price * taxrate; 
    }; 
    
    exports.outputBalance = function outputBalance(){
        // takes nothing, just calls formatBankBalance(bankBalance)
        // calls formatBankBalance(bankBalance)
        // logs a formatted statement about bank balance 
        console.log("Your bank balance is: " + exports.formatBankBalance(bankBalance));
    }; 
    
    exports.outputPhones = function outputPhones(){
        // takes nothing 
        // logs formatted statement indicating number of phones purchased. 
        console.log("You bought "+ exports.phoneCount().toString() + " phones");
    }; 
})(global.phoneApp = {}); 

phoneApp.outputBalance(); 

/*
function outputAccessories(accessories){
    console.log("You bought "+ (accessories) + " accessories"); 
}
*/
