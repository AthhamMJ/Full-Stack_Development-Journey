function digit_sum(n){
    let sum = 0
    for(let digit; n > 0;){
        digit = n % 10;
        sum+= digit;
        n = Math.floor(n / 10);
    }
    console.log(sum)
}

digit_sum(234)