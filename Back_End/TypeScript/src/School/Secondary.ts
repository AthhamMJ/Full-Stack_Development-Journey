import { Student } from "./Student";

export class Secondary extends Student{
    private secondaryLeaveTime : number = 13;

    constructor(time : number, secondaryLeaveTime : number){
        super(time);
        this.secondaryLeaveTime = secondaryLeaveTime;
    }

    public getDetailSecondary():void{
        console.log(`The Secondary Students Leave School at ${this.secondaryLeaveTime} PM`);
    }
}