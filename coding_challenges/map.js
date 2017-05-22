'use strict';

Array.prototype.map = function(cb){

    const newArr = [];

    if (!cb) {
            newArr = Array;
        }
        else 
        {

            this.forEach(function(value, index, array){
            
            newArr.push(cb(value));

            });
        };

    return newArr;
}

const a = [1,2,3]

const mappedArr = a.map(function(val){
    return val * val;
});

console.log(mappedArr);
