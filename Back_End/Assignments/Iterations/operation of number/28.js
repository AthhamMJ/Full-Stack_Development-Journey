function digit_count(n){
    let count = 0;
    for(let digit ; n > 0;){
        digit = n % 10;
        count++;
        n = Math.floor(n / 10); 
    }
    console.log(count);
}
digit_count(1234534323243554);