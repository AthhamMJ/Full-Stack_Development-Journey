import { Motorsport } from "./motorsport";
export declare class FormulaOne extends Motorsport {
    private team;
    private driver;
    private age;
    constructor(genre: String, team: String, driver: String, age: number);
    getTeam(): String;
    getdriver(): String;
    getAge(): number;
    getDetails(): void;
}
//# sourceMappingURL=formulaone.d.ts.map