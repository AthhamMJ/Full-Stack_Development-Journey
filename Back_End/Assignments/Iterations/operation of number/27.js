function reverse(n){
    for(let digit; n > 0;){
        digit = n % 10;
        n = Math.floor(n / 10);
        console.log(digit)
    }
}
reverse(1245);