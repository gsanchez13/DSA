var ParkingSystem = function (big, medium, small) {
    this.bigCars = big;
    this.mediumCars = medium;
    this.smallCars = small;
};
//creates the parking system class. 
//The first input will decide how many big cars can fit.
//second input will decide how many medium cars can fit
//third input will decide how many small cars can fit
/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === 3) {
        if (this.bigCars > 0) {
            this.bigCars--;
            return true
        }
    }
    if (carType === 2) {
        if (this.mediumCars > 0) {
            this.mediumCars--;
            return true
        }
    }
    if (carType === 1) {
        if (this.smallCars > 0) {
            this.smallCars--
            return true
        }
    }
    else {
        return false
    }
};

let myTest = new ParkingSystem(3, 2, 1)
console.log([myTest.addCar(3), myTest.addCar(3), myTest.addCar(3), myTest.addCar(3), myTest.addCar(1)])

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.


// Example 1:

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.