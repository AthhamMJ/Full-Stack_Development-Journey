export class TeamMember{
    private memberId : string;
    private name: string;
    
    protected teamName : string;

    constructor(memberId: string, name: string, teamName: string){
        this.memberId = memberId;
        this.name = name;
        this.teamName = teamName;
    }

    public getMemberId(): string{
        return this.memberId;
    }
    public getName(): string{
        return this.name;
    }
    public getTeamName(): string {
        return this.teamName;
    }
    
    public changeTeam(newTeam: string){
        this.teamName = newTeam;
        console.log(`${this.name} is changed to team ${newTeam}`);
    }
    public performDuty(){
        console.log(`No PerForm Duty Now`)
    }
}