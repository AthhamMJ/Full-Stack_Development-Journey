function amstrong(number){
    let n = number;
    let count = 0;
    const numarray = []
    for(let digit;number > 0;){
        digit = number % 10;
        count++;
        number = Math.floor(number / 10);
        numarray.push(digit);
    }
    let sum = 0;
    for(let i = 0; i < numarray.length; i++){
        sum +=Math.pow( numarray[i], count)
    }
    if(sum == n){
        console.log(sum+" : This is an Amstrong Number");
    }
    else{
        console.log(sum+" : This is Not an Amstrong Number");
    }
}
amstrong(153);

// This program is originally created by Athham by research and own creativity. All rights reserved for attham.uki@dreamspace.academy //