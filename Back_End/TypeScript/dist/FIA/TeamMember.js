"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMember = void 0;
class TeamMember {
    memberId;
    name;
    teamName;
    constructor(memberId, name, teamName) {
        this.memberId = memberId;
        this.name = name;
        this.teamName = teamName;
    }
    getMemberId() {
        return this.memberId;
    }
    getName() {
        return this.name;
    }
    getTeamName() {
        return this.teamName;
    }
    changeTeam(newTeam) {
        this.teamName = newTeam;
        console.log(`${this.name} is changed to team ${newTeam}`);
    }
    performDuty() {
        console.log(`No PerForm Duty Now`);
    }
}
exports.TeamMember = TeamMember;
//# sourceMappingURL=TeamMember.js.map