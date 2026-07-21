"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricle = void 0;
const geometricObjects_1 = require("./geometricObjects");
class Cricle extends geometricObjects_1.GeometricObjects {
    radius;
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
    getPerimeter() {
        return (Math.PI * 2 * this.radius);
    }
    getDiameter() {
        return (this.radius * 2);
    }
    getCircle() {
        console.log(`Radius : ${this.radius}, Area : ${this.getArea()}, Perimeter : ${this.getPerimeter()}, Color : ${this.getColor()}, Diameter : ${this.getDiameter()}`);
    }
}
exports.Cricle = Cricle;
