'use strict';

Array.prototype.filter = function(cb){

    var newArr = [];

    this.forEach(function(val) {
        var returnVal = cb(val);
        if (returnVal){
        newArr.push(val);
    }
    });
    return newArr;
}

const a = [1,2,3]

const filteredArr = a.filter(function(value){
    return value % 2 === 0;
});

console.log(filteredArr);