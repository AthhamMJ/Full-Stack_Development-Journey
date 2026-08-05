export class LibraryMember{
    protected memberID : string;
    protected name : string;
    private booksBorrowedCount : number;

    constructor(memberID : string, name : string, bookBorrowedCount : number){
        this.memberID = memberID;
        this.name = name;
        this.booksBorrowedCount = bookBorrowedCount;
    }

    public getMemberID(){
        return this.memberID;
    }
    public getName(){
        return this.name;
    }
    public getBooksBorrowedCount(){
        return this.booksBorrowedCount;
    }

    public calculateFine(overdueDays : number){
        console.log("No Fine");
    }

    public borrowBook(booksLimit : number){
        this.booksBorrowedCount++;
    }

    public returnBooks(){
        this.booksBorrowedCount--;
    }
}