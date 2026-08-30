import { Passenger } from "./Passenger";

export class BusinessPassenger extends Passenger{
    // private loungeAccess : boolean;
    // private baggageWeight : number;

    constructor(passportNo : string, Name : string, Nationality : string){
        super(passportNo, Name, Nationality);
    }

    public override boardFlight(): void {
        
    }
}