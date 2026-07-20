"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const Student_1 = require("./Student");
class Primary extends Student_1.Student {
    primaryLeaveTime = 12;
    constructor(time, primaryLeaveTime) {
        super(time);
        this.primaryLeaveTime = primaryLeaveTime;
    }
    getDetailPrimary() {
        console.log(`Primary Students Leave School at ${this.primaryLeaveTime} PM`);
    }
}
exports.Primary = Primary;
