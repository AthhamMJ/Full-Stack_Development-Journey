"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endurance = void 0;
const motorsport_1 = require("./motorsport");
class Endurance extends motorsport_1.Motorsport {
    team;
    driver;
    age;
    constructor(genre, team, driver, age) {
        super(genre);
        this.team = team;
        this.driver = driver;
        this.age = age;
    }
    getDetails() {
        console.log(`${this.getGenre()} is a tough sport. ${this.driver} Drives for ${this.team}. He's ${this.age} years old`);
    }
}
exports.Endurance = Endurance;
