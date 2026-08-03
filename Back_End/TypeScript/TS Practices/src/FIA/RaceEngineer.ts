import { TeamMember } from "./TeamMember";

export class RaceEngineer extends TeamMember{
    private static readonly communicationSkill : string;

    constructor(memberId: string, name: string, teamName: string){
        super(memberId, name, teamName);
    }

    public giveStrategy(weather : string, strategyType : string){
        if (weather == "rain"){
            console.log("Intermediate Tyres. Box.Box..");
        }
        else if(strategyType == "Aggressive"){
            console.log(`${this.getName()} Push flat out. Pit later.`);
        }
        else{
            console.log(`${this.getName()} Keep tyres safe.`);
        }
    }

    public override performDuty(): void {
        console.log(`${this.getName()}📡 Monitoring live telemetry.`);
    }

}