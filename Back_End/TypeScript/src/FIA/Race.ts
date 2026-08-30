import { Driver } from "./Driver";
import { RaceEngineer } from "./RaceEngineer";
import { TeamMember } from "./TeamMember";

export class RaceTelemetry{

    public startrace(teamMembers : TeamMember[]){
        for(const tm of teamMembers){
            console.log(`${tm.getName()} from The Team ${tm.getTeamName()}`);
            tm.performDuty();
        }
    }
    public startRaceWeekend() : void{
        const max = new Driver("1", "Max Verstappen", "Red Bull");
        const gp = new RaceEngineer("RE1", "Gianpiero Lambiase", "Red Bull");

        const charles = new Driver("16", "Charles Leclerc", "Ferrari");
        const bryan = new RaceEngineer("RE16", "Bryan Bozzi", "Ferrari");

        max.driveRace("rain", 60, "Intermediate");
        gp.giveStrategy("no rain", "Aggressive");

        charles.driveRace("dry", 39, "Soft");
        bryan.giveStrategy("dry", "Plan C");

        max.changeTeam("Mercedes AMG");

        const teamMembers: TeamMember[] = [max, charles, gp, bryan];
        this.startrace(teamMembers);
    }
}