import { TeamMember } from "./TeamMember";

export class Driver extends TeamMember{
    private static readonly experienceLevel : string;

    constructor(memberId: string, name: string, teamName: string){
        super(memberId, name, teamName);
    }

    public driveRace(weather : string, carCondition : number, tyreCompound : string){
        if (carCondition < 40){
            console.log(`⚠️${this.getName()} Car is too damaged to continue. Your Car Condition is ${carCondition}%`);
        }
        else if(weather == "rain" && tyreCompound == "soft"){
            console.log(`❌${tyreCompound} is Wrong tyre choice. Driver loses grip and spins.`);
        }
        else{
            console.log("🏎️ Driver finishes the race successfully.");
        }
        carCondition -= 20
    }

    public override performDuty(): void {
        console.log(`${this.getName()}🏎️ Driving at maximum pace.`)
    }
}