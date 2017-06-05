
// function runningLogger(){
//   console.log("I am running");
// }
// runningLogger()

// function mutliplybyTen(num){
//     return num*10;
// }
// console.log(mutliplybyTen(5))

// function stringReturnOne(){
//   return "america!";
// }

// function stringReturnTwo(){
//   return "chivas";
// }

// function caller(arg){
//   if (typeof(arg)=='function'){
//     arg();
//   }
// }
// caller(5);

// function caller(arg1, arg2){
//   if (typeof(arg1)=='function' && typeof(arg2) == 'function'){
//     console.log(arg1(), arg2());
//   }
// }
// caller(5, 2);

function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      param(thing1, thing2);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(5);