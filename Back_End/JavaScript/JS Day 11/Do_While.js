function fact(number){
    let i = number;
    let factorial = 1;
    do{
      factorial*=i;
      i--;  
    }
    while(i > 0 );
    console.log("The Factorial of "+ i + " is "+ factorial);
}
fact(10);