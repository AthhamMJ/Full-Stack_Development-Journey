"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorBike = void 0;
const vehicle_1 = require("./vehicle");
class MotorBike extends vehicle_1.vehicle {
    speedofTheMotorBike = 100;
    constructor(speed, speedofTheMotorBike) {
        super(speed);
        this.speedofTheMotorBike = speedofTheMotorBike;
    }
    getSpeedOfTheMotorBike() {
        console.log(`The speed of the MotorBike is ${this.speedofTheMotorBike} km/hr`);
    }
}
exports.MotorBike = MotorBike;
