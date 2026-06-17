function factorial(number){
    let n = number
    let sum = 0;
    let count = 0; 
    
    while(count <= number){
        sum += count;
        count++;
    }
    console.log("The Factorial of "+ number + " is: "+ sum);
}

factorial(50);