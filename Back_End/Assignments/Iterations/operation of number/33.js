function main(){
    prime();
}
function prime(){

    for(let n = 2; n <= 100; n++){
        let prime = true;
        for(let div = 2; div <= Math.sqrt(n); div++){
            if(n % div == 0){
                prime = false;
                break;
            }
        }
        if (prime == true){
            console.log(n)
        }
    }
}
main();
