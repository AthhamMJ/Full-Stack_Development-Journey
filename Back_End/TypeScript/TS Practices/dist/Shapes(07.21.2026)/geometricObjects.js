"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometricObjects = void 0;
class GeometricObjects {
    color;
    filled;
    dateCreated;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    toString() {
        return `Color ${this.color}, Filled ${this.filled}, DateCreated ${this.dateCreated}`;
    }
}
exports.GeometricObjects = GeometricObjects;
