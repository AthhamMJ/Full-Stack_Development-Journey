function fact(number){
    let n = number;
    let factorial = 1;
    do{
      if(n % 2 == 0){
        factorial += n;
        n--;
      }
      else{
        n--;
      }
    }
    while(n > 0){
        console.log(factorial)
    }
}
fact(100);