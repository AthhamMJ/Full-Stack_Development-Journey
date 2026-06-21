function main(){
    factorial(5)
}

function factorial(n){
    let fact = 1
    for(; n > 0; n--){
        fact *= n;
    }
    console.log("The Factorial of the number is : " + fact);
}
main();