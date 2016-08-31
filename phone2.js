var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 29.99;
var TAX_RATE = .09;
/*
function addTax(price, taxrate, isExempt) {
    var isPurchaseTaxed;
    var finalPrice;
    
    if (typeof isExempt !== undefined) {
        isPurchaseTaxed = isExempt;
    } else {
        isPurchaseTaxed = false;
    }
    
    if (isExempt) {
        finalPrice = price;
    } else {
        finalPrice = price + price * taxrate;
    }
    return finalPrice;
}

console.log(addTax((PHONE_PRICE + ACCESSORY_PRICE), TAX_RATE) + "\nThis should still return '250.6782'.");
*/

function addTaxy(price, taxrate, isExempt) {
    isExempt = typeof isExempt != 'undefined' ? isExempt : false; 
    return isExempt? price: price + price * taxrate; 
}

console.log(addTaxy((PHONE_PRICE + ACCESSORY_PRICE), TAX_RATE, false) + "\nThis should still return '250.6782'.");