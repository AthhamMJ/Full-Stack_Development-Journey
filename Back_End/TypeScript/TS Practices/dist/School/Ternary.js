"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ternary = void 0;
const Student_1 = require("./Student");
class Ternary extends Student_1.Student {
    ternaryLeaveTime = 15;
    constructor(time, ternaryLeaveTime) {
        super(time);
        this.ternaryLeaveTime = ternaryLeaveTime;
    }
    getDetailTernary() {
        console.log(`Thirdinary Students Leave School at ${this.ternaryLeaveTime} PM`);
    }
}
exports.Ternary = Ternary;
