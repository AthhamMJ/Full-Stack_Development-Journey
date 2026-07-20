"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicle = void 0;
class vehicle {
    speed = 50;
    constructor(speed) {
        this.speed = speed;
    }
    getspeedfThevehicle() {
        console.log(`The speed of the vehicle is ${this.speed} km/hr`);
    }
}
exports.vehicle = vehicle;
