function main(){
    console.log(prime(100));
}
function prime(number){
    let count = 0;
    for(let n = 2; n <= number; n++){
        let prime = true;
        for(let div = 2; div <= Math.sqrt(n); div++){
            if(n % div == 0){
                prime = false;
                break;
            }
        }
        if (prime == true){
            count+=1;
        }
    }
    return count;
}
main();