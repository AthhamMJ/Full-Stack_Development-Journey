function main(){
    find(-1);
    evenodd(34345434221);
    five(2527235)
    tempcenvert(100)
    grade(34)
}

function find(number){
    let n = number;
    if (n >= 0)
        console.log(+n+" is a Positive Number");
    else
        console.log(+n+" is a Negative number");
}

function evenodd(number){
    let n = number;
    if (n % 2 == 0){
        console.log(n+" is an EVEN Number");
    }
    else{
        console.log(n+" is an ODD Number");
    }
}

function five(number){
    let n = number;
    if (n % 5 == 0)
        console.log(n+" Can be dividend by 5");
    else
        console.log(n+" Cannot be divided by '5'");
}
function tempcenvert(celcius){
    let c = celcius;
    let f;
    let k;
    k = c+273;
    f = 9*c/5+32;
    console.log(c+" degree celcius");
    console.log(f+" degree fahrenheid");
    console.log(k+" degree Kelvin");
}

function grade(marks){
    let m = marks;
    if (m >= 0 && m <= 100){
        if (m >=80)
            console.log("The Grade is 'A'");
        else if (m >=70)
            console.log("The Grade is 'B'");
        else if (m >=60)
            console.log("The Grade is 'C'");
        else if (m >=50)
            console.log("The Grade is 'D'");
        else{
            console.log("Fail");
        }
    }
    else{
        console.log("Invalid Value")
    }    

}
main();