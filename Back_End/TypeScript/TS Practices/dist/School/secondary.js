"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = void 0;
const Student_1 = require("./Student");
class Secondary extends Student_1.Student {
    secondaryLeaveTime = 13;
    constructor(time, secondaryLeaveTime) {
        super(time);
        this.secondaryLeaveTime = secondaryLeaveTime;
    }
    getDetailSecondary() {
        console.log(`The Secondary Students Leave School at ${this.secondaryLeaveTime} PM`);
    }
}
exports.Secondary = Secondary;
