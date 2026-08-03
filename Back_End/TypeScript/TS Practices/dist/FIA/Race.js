"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceTelemetry = void 0;
const Driver_1 = require("./Driver");
const RaceEngineer_1 = require("./RaceEngineer");
class RaceTelemetry {
    startrace(teamMembers) {
        for (const tm of teamMembers) {
            console.log(`${tm.getName()} from The Team ${tm.getTeamName()}`);
            tm.performDuty();
        }
    }
    startRaceWeekend() {
        const max = new Driver_1.Driver("1", "Max Verstappen", "Red Bull");
        const gp = new RaceEngineer_1.RaceEngineer("RE1", "Gianpiero Lambiase", "Red Bull");
        const charles = new Driver_1.Driver("16", "Charles Leclerc", "Ferrari");
        const bryan = new RaceEngineer_1.RaceEngineer("RE16", "Bryan Bozzi", "Ferrari");
        max.driveRace("rain", 60, "Intermediate");
        gp.giveStrategy("no rain", "Aggressive");
        charles.driveRace("dry", 39, "Soft");
        bryan.giveStrategy("dry", "Plan C");
        max.changeTeam("Mercedes AMG");
        const teamMembers = [max, charles, gp, bryan];
        this.startrace(teamMembers);
    }
}
exports.RaceTelemetry = RaceTelemetry;
