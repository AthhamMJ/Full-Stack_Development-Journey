"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPassenger = void 0;
const Passenger_1 = require("./Passenger");
class BusinessPassenger extends Passenger_1.Passenger {
    // private loungeAccess : boolean;
    // private baggageWeight : number;
    constructor(passportNo, Name, Nationality) {
        super(passportNo, Name, Nationality);
    }
    boardFlight() {
    }
}
exports.BusinessPassenger = BusinessPassenger;
//# sourceMappingURL=BusinessPassenger.js.map