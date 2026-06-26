function main(){
    let n = 9;
    if (isPrime(n)){
        console.log("This is a Prime Number")
    }
    else{
        console.log("This is Not a Prime Number")
    }
}
main();
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    else{
        for (let div = 2; div <= Math.sqrt(n); div++) {
        if (n % div === 0) {
            return false;
        }
    }
    return true;
    }
    
}