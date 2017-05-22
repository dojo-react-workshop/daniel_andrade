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