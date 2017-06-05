
function vehicle(name, numOfWheels, numOfPassengers){
    var car ={};
    
        car.name = name;
        car.wheels = numOfWheels;
        car.passengers = numOfPassengers;
        car.makeNoise = function(){
            console.log("hello")
        }

    return car;
    }

var bike = vehicle('bicycle', 2, 2);
bike.makeNoise = function(){
    console.log("ring ring!");
}

var sedan = vehicle('car',2,4);
sedan.makeNoise = function(){
    console.log("honk honk!");
}

var bus = vehicle('bus',8,50);
bus.pickupPassengers=function(number){
    bus.passengers += number;
};

bus.pickupPassengers(8);
console.log(bus)