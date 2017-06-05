function balancePoint(array){
    let sum1 = array.reduce(function(accum, val){
        return accum + val;
    })
let sum2 = 0;

for (let i = 0; i = array.length; i+=1){
    if(sum1 == sum2){return true}
    let current = array[i];
    sum2 += current;
    sum1 -= current;
}
    return false
}
console.log(balancePoint([1,2,3,4,10]))