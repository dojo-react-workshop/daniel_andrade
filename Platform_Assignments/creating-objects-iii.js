'use strict';


// function VehicleConstructor(name, numOfWheels, numOfPassengers, speed=0){
//     var distance_travelled =0;
//     const vehiclePrototype = {
//         accelerate: function(){this.speed++;return this.speed}
//     }

//     const vehicle = Object.create(vehiclePrototype);
//         vehicle.name = name;
//         vehicle.speed = speed;
//         vehicle.numOfPassengers =numOfPassengers;
//         vehicle.makeNoise = () => {
//             console.log('make noise')
//         }
//     return vehicle;
//     }

// const v1 = Vehicle("sedan", 4, 5);
// v1.makeNoise()
// console.log(v1.accelerate());

// const v2 = Vehicle("suv", 4);
// const v3 = Vehicle("bus", 6,0);

function VehicleConstructor(name, numOfWheels, numOfPassengers, speed=0){
    // const vehicle = {};

    this.name = name;
    this.speed = speed;

    // return vehicle;
}

VehicleConstructor.prototype.accelerate = function(){
    this.speed++;
    return this.speed;
    }

const v1 = new VehicleConstructor('bus');