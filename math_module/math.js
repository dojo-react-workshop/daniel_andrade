// math.js
// ========
module.exports = {
  myMathService: function (){

    this.add = function(x,y){
        var sum = x+y;
        return sum;
        }; // Return the sum from two numbers
    this.multiply = function(x,y){
        var prod = x*y;
        return prod;
        };// Return the product of two numbers
    this.square = function(x){
        var square = x*x;
        return square;
        };// Return the square of a number
    this.random = function(x,y){
        return random = Math.floor(Math.random()*(y-x))+x;
        }// Return a random value between two numbers

    }
  }
