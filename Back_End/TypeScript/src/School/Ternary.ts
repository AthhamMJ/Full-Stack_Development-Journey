import { Student } from "./Student";

export class Ternary extends Student{
    private ternaryLeaveTime : number = 15;

    constructor(time : number, ternaryLeaveTime : number){
        super(time);
        this.ternaryLeaveTime = ternaryLeaveTime;
    }

    public getDetailTernary():void{
        console.log(`Thirdinary Students Leave School at ${this.ternaryLeaveTime} PM`)
    }
}