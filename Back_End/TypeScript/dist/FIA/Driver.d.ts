import { TeamMember } from "./TeamMember";
export declare class Driver extends TeamMember {
    private static readonly experienceLevel;
    constructor(memberId: string, name: string, teamName: string);
    driveRace(weather: string, carCondition: number, tyreCompound: string): void;
    performDuty(): void;
}
//# sourceMappingURL=Driver.d.ts.map