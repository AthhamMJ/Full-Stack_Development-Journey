function strong(n){
    let number = n;
    let sum = 0;
    for(; n > 0; n = Math.floor(n / 10)){
        let fact = 1;
        for(let lastNum = n % 10; lastNum > 1; lastNum--){
            fact *= lastNum;
        }
        sum += fact;
    }
    if(sum == number){
        console.log( number + " is a Strong number")
    }
    else
        console.log( number + " is a Weak number")
}
strong(40585);