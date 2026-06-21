function digit_product(n){
    let product = 1;
    for(let digit; n > 0;){
        digit = n % 10;
        product*= digit;
        console.log(product);
        n = Math.floor(n / 10); 
    }
    console.log(product)
}

digit_product(123);