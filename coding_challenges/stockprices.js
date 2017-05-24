'use strict'
//APPLE
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11
const applePricesYesterday = [5,4,6,2,1,1]; //different trades at these prices

function getMaxProfit(applePricesYesterday, ind){
    if (ind+1 >= applePricesYesterday.length){
       return;
    }
    let maxDiff = applePricesYesterday[ind+1] - applePricesYesterday[ind];
    for (let i = ind+2; i < applePricesYesterday.length; i++){
        let diff = applePricesYesterday[i] - applePricesYesterday[ind];
        if (diff > maxDiff){
            maxDiff = diff;
        }
    }
    let nextMax = getMaxProfit(applePricesYesterday, ind+1);
    if (nextMax === undefined){
        return maxDiff;
    } else if (maxDiff > nextMax){
        return maxDiff;
    } else {
        return nextMax;
    }
}
console.log(getMaxProfit(applePricesYesterday, 3)); 