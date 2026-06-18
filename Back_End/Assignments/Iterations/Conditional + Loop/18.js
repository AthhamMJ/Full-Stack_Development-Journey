function positive(n){
    let count = 0;
    for( n > 0; n--;){
        if(n > 0){
            count++;
        }
    }
    console.log(count)
}
positive(50)