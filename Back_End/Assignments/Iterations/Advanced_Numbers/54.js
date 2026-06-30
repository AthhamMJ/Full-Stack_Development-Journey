function main(){
    perfect(18);
}

function perfect(n){
    for(let count = 0; count < n; count++){
        let sum = 0;
        for(let div = 1; div < n; div++){
            if(n % div == 0){
                sum += div;
            }
            else{
                continue;
            }
        }
        if (sum == n){
            console.log(sum);
        }
        else{
            continue;
        }
    }

}
main();