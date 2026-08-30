"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
class Passenger {
    passportNo;
    Name;
    Nationality;
    constructor(passportNo, Name, Nationality) {
        this.passportNo = passportNo;
        this.Name = Name;
        this.Nationality = Nationality;
    }
    getPassportNo() {
        return this.passportNo;
    }
    getName() {
        return this.Name;
    }
    getNationality() {
        return this.Nationality;
    }
    updateNationality(newNationality) {
        this.Nationality = newNationality;
    }
    boardFlight() {
        console.log(`No special things`);
    }
}
exports.Passenger = Passenger;
//# sourceMappingURL=Passenger.js.map