function leap(year){
    let y = year;
    if (y % 100 == 0){
        if (y % 400 == 0){
            console.log("This is Centuary Leap Year");
        }
    }
    else if(y % 4 == 0){
        console.log("This is Leap Year");
    }
    else{
        console.log("This is not Leap Year");
    }
} 
leap(2028);