"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceEngineer = void 0;
const TeamMember_1 = require("./TeamMember");
class RaceEngineer extends TeamMember_1.TeamMember {
    static communicationSkill;
    constructor(memberId, name, teamName) {
        super(memberId, name, teamName);
    }
    giveStrategy(weather, strategyType) {
        if (weather == "rain") {
            console.log("Intermediate Tyres. Box.Box..");
        }
        else if (strategyType == "Aggressive") {
            console.log(`${this.getName()} Push flat out. Pit later.`);
        }
        else {
            console.log(`${this.getName()} Keep tyres safe.`);
        }
    }
    performDuty() {
        console.log(`${this.getName()}📡 Monitoring live telemetry.`);
    }
}
exports.RaceEngineer = RaceEngineer;
