"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const TeamMember_1 = require("./TeamMember");
class Driver extends TeamMember_1.TeamMember {
    static experienceLevel;
    constructor(memberId, name, teamName) {
        super(memberId, name, teamName);
    }
    driveRace(weather, carCondition, tyreCompound) {
        if (carCondition < 40) {
            console.log(`⚠️${this.getName()} Car is too damaged to continue. Your Car Condition is ${carCondition}%`);
        }
        else if (weather == "rain" && tyreCompound == "soft") {
            console.log(`❌${tyreCompound} is Wrong tyre choice. Driver loses grip and spins.`);
        }
        else {
            console.log("🏎️ Driver finishes the race successfully.");
        }
        carCondition -= 20;
    }
    performDuty() {
        console.log(`${this.getName()}🏎️ Driving at maximum pace.`);
    }
}
exports.Driver = Driver;
