"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    time = 8;
    constructor(time) {
        this.time = time;
    }
    getSchoolData() {
        console.log(`All Students Come to School morning at : ${this.time} AM`);
    }
}
exports.Student = Student;
