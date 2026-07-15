function main(){
    let msg = "staff";
    let day = 15;
    entryMsg(msg);
    console.log(days(day));
}
function entryMsg(msg){
    if(msg == "staff" | "student" | "teacher"){
        console.log("Vanakamuda Maupla");
    }
    else{
        console.log("Aal marra");
    }
}


function days(day){
    switch(day){
        case 1 | 8 | 15 :
            return "Monday"
            break;
        case 2 | 9 | 16:
            return "Tuesday"
            break;
        case  3 | 10 | 17:
            return "Wednesday"
            break;
        case 4 | 11 | 18:
            return "Thursday"
            break;
        case 5 | 12 | 19:
            return "Friday"
            break;
        case 6 | 13 | 20:
            return "Saturday"
            break;
        case 7 | 14 | 21:
            return "Sunday"
            break;
    }

}
function reverseSum(n){
        let number = n;
        let sum = 0;
        for(; number > 0; number--){
            console.log(number);
            sum += number
        }
        console.log(sum)
    }
reverseSum(20);

main();



let n= 0;
do{
    n++;
    console.log(n)
}
while(n < 6);