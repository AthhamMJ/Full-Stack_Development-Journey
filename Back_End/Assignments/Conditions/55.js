function price(mark){
    if (mark >= 90){
        console.log(`Your marks is A+ `+ mark);
    }
    else if (mark >= 75){
        console.log(`Your marks is A `+ mark);
    }
    else if (mark >= 70){
        console.log(`Your marks is B+ `+ mark);
    }
    else if (mark >= 65){
        console.log(`Your marks is B `+ mark);
    }
    else if (mark >= 60){
        console.log(`Your marks is C+ `+ mark);
    }
    else if (mark >= 55){
        console.log(`Your marks is C `+ mark);
    }
    else{
        console.log("Try Again You Failed It Bro, Better luck next time " +mark)
    }
}

price(97);