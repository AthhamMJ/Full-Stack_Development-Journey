function week(number){
    let n = number;
    

    switch(n){
        case 1 :
            day = "Monday"
            break
        case 2 :
            day = "Tuesday"
            break
        case 3 :
            day = "wednesday"
            break
        case 4 :
            day = "Thursday"
            break
        case 5 :
            day = "Friday"
            break
        case 6 :
            day = "Saturday"
            break
        case 7 :
            day = "Sunday"
            break
    }
    console.log("Today is a "+day);
}
week(7);