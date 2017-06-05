function Vehicle(name, numOfWheels, numOfPassengers, speed){
    //var self = this;
    var distance_traveled = 0;
    function updateDistanceTraveled(){
        distance_traveled += speed;
        //console.log(distance_traveled);
    }

    this.name = name;
    this.wheels = numOfWheels;
    this.passengers = numOfPassengers;
    this.speed = speed;
    this.makeNoise = function(){console.log("noise")};
    this.move = function(){
        updateDistanceTraveled();
        this.makeNoise();
    };
    this.checkMiles = function(){
        console.log(`Distance Traveled: ${distance_traveled}`);
    };



}

var bike = new Vehicle('bicycle', 2, 2, 15);
bike.makeNoise=function(){
    console.log("ring ring!");
}

var sedan = new Vehicle('car',4,4, 80);
sedan.makeNoise = function(){
    console.log("honk honk!");
}

var bus = new Vehicle('bus',6,60,65);
bus.makeNoise = function(){
    console.log("beep beep!");
}
bus.pickupPassengers=function(number){
    bus.passengers += number;
};


bike.move();
bike.move();
bike.checkMiles();
sedan.move()
sedan.checkMiles()
bus.move();
bus.checkMiles()