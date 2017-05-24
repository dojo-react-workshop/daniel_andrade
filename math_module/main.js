
const mathwork = require('./math.js')

var math = new mathwork.myMathService(); // 

console.log(math.add(2,3));
console.log(math.multiply(2,20));
console.log(math.square(8));
console.log(math.getrandom(100,10));



// fs = require('fs');

// fs.readFile('./node.txt','utf8', (err, data) => {
            
//             console.log(data.toUpperCase());
//             // if (err) reject(err);
//         })
        
// console.log('do unrelated work');

