// 'use strict'
// //APPLE
// // Can't buy and sell in same time slots
// //return best profit could have made from one purchase and one sale
// //for this one, buy low at 5 and sell high at 11


// function maxProfit(arr) {
//     var buyIndex = 0;
//     var sellIndex = 1;
//     var maxProfit = arr[sellIndex] - arr[buyIndex];

//    for(let i=0; i<arr.length; i++) {
//         for(let x=i+1; x<arr.length; x++) {
          
//             if((arr[x]-arr[i]) > maxProfit) {
//                 buyIndex = i;
//                 sellIndex = x;
//                 maxProfit = arr[x]-arr[i];
//             }
//         }
//     }

//    return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit});

// }
//    console.log(maxProfit([5,4,6,2,1,1]));

function maxProfit(arr){
    var buy_price = arr[0];
    var profit = arr[1]-arr[0];
    var purchase_price = 0;
    var sell_price = 0;

    for (var i=1; i<arr.length-1; i++){
        if(buy_price > arr[i]){
            buy_price =arr[i];
        }
        
        if(profit < (arr[i+1] - buy_price)){
            profit = (arr[i+1] - buy_price);
            purchase_price = arr[i];
            sell_price = arr[i+1];
        }
        console.log("best buy price was " + purchase_price + " which returned max profit of " + profit + " when the price was at " + sell_price)
    }
    return profit;
}
console.log(maxProfit([5,4,6,2,1,1]));

