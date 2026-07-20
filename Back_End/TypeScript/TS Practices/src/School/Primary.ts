import { Student } from "./Student";

export class Primary extends Student{
    private primaryLeaveTime : number = 12;

    constructor(time : number, primaryLeaveTime : number){
        super(time);
        this.primaryLeaveTime = primaryLeaveTime;
    }

    public getDetailPrimary():void{
        console.log(`Primary Students Leave School at ${this.primaryLeaveTime} PM`)
    }
}