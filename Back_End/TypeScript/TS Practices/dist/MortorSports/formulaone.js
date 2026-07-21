"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaOne = void 0;
const motorsport_1 = require("./motorsport");
class FormulaOne extends motorsport_1.Motorsport {
    team;
    driver;
    age;
    constructor(genre, team, driver, age) {
        super(genre);
        this.team = team;
        this.driver = driver;
        this.age = age;
    }
    getTeam() {
        return this.team;
    }
    getdriver() {
        return this.driver;
    }
    getAge() {
        return this.age;
    }
    getDetails() {
        console.log(`${this.driver} is ${this.age} years old. He Drives for Team ${this.team}`);
    }
}
exports.FormulaOne = FormulaOne;
