import { LibraryMember } from "./LibraryMember";

export class RegularMember extends LibraryMember{
    private static readonly fine : number = 10;

    constructor(memberID : string, name : string, bookBorrowedCount : number){
        super(memberID, name, bookBorrowedCount);
    }

    public override calculateFine(overdueDays: number): void {
        const pay = overdueDays * RegularMember.fine
        console.log(`You're ${overdueDays} Days late. Your fine is Rs. ${overdueDays * RegularMember.fine}`)
    }

    public override borrowBook(booksLimit : number){
        if(booksLimit == 1){
            console.log(`${this.memberID} : ${this.name} Borrowed ${this.getBooksBorrowedCount()} Book`);
        }
        else if(booksLimit <= 3){
            console.log(`${this.memberID} : ${this.name} Borrowed ${this.getBooksBorrowedCount()} Books`);
        }
        else{
            console.log(`${this.name} You Can't Take much than 3 Books`);
            return
        }
    }

    public override returnBooks(){
        if(this.getBooksBorrowedCount() == 0){
            console.log(`this ${this.name} Returned the Book`)
        }
        else{
            console.log(`${this.name} Please Return All books`)
        }
    }
}