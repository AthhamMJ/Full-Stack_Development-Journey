function main(){
    onetotwenty(20);
    sumfifty(5);
    multable(10);
    factorial(5);
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
main();