// var total = 0;
// var numbers = [1, 5, 7, 3, 8, 9];
// for ( var i = 0; i < numbers.length; i++ ){
//     total += numbers[i];
// }
// console.log(total)

Array.prototype.reduce = function(cb, val){
    var sum;
    var x;
    if(typeof val !='undefined'){
        sum=val;
        x=0;
    } else{
        sum = this[0];
        x=1;
    }
    console.log(val);

    for(var i = x; i<this.length; i++){
        console.log(sum);
        sum = cb(sum,this[i]);
    }
    return sum;
    
}

const array = [1,2,3,4];

const sum = array.reduce((currentSum, currentVal) => {
    return currentSum * currentVal;
});

console.log(sum);
