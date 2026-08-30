export declare class TeamMember {
    private memberId;
    private name;
    protected teamName: string;
    constructor(memberId: string, name: string, teamName: string);
    getMemberId(): string;
    getName(): string;
    getTeamName(): string;
    changeTeam(newTeam: string): void;
    performDuty(): void;
}
//# sourceMappingURL=TeamMember.d.ts.map