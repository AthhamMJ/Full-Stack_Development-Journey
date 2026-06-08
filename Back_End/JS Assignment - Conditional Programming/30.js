function factory(number){
    let n = number;
    
    if (n % 3 == 0){
        if (n % 5 == 0){
            console.log("You can work Today");
        }
        else{
            console.og("You can't work Today");
        }
    }
}
factory(45)