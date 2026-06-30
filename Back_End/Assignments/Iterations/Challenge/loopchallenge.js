function main(){
    onetotwenty(20);
    sumfifty(5);
    multable(10);
    factorial(5);
    reverse(23547);
    sumofdigit(12345);
    let n = 100; 
    for (let i = 1; i <= n; i++) {
        if (palindrome(i)) {
            console.log(i);
        }
    }
}
function onetotwenty(n){
    for(let count = 1; count <= n; count++){
        console.log(count);
    }
    console.log("");
}
function sumfifty(n){
    let sum = 0;
    for(let count = 1; count <= n; count++){
        sum+=count;
    }
    console.log(sum);
    console.log("");
}
function multable(n){
    for(let count = 1; count <= n; count++){
        console.log(count+ " X " +n+ " = " + (count * n));
    }
    console.log("");
}
function factorial(n){
    let fact = 1
    for(; n > 0; n--){
        fact *= n
    }
    console.log(fact)
    console.log("");
}
function reverse(n){
    let reverse = 0;
    //reversing the number
    for(let digit; n > 0;){
        digit = n % 10;
        console.log(digit);
        n = Math.floor(n / 10);
        reverse = reverse * 10 + digit
    }
    console.log(reverse);
    console.log("");
}
function sumofdigit(n){
    let sum = 0;
    for(; n > 0; n = Math.floor(n / 10)){
        sum += (n % 10);
    }
    console.log(sum);
    console.log("");
}
function palindrome(n) {
    let number = n;
    let reverse = 0;
    for (;n > 0; n = Math.floor(n / 10)) {
        reverse = reverse * 10 + (n % 10);
    }
    return reverse === number;
    console.log("");
}


main();