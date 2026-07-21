"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const geometricObjects_1 = require("./geometricObjects");
class Rectangle extends geometricObjects_1.GeometricObjects {
    width;
    height;
    constructor(width, height, color, filled) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return (this.width * this.height);
    }
    getPerimeter() {
        return (2 * (this.width + this.height));
    }
}
exports.Rectangle = Rectangle;
