function getKgfromClerk(){
    return 31;
}

let day = 6;
let ratePerkg = 45
let totalWeeklyWage;
dailyWage = 0
while(day > 0){
    dailyWage = getKgfromClerk() * ratePerkg;
    totalWeeklyWage +=dailyWage
    day--;
}
console.log(totalWeeklyWage);