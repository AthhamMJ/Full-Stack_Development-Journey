function main(){
    perfect(18);
}

function perfect(n){
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
        console.log("Perfect");
    }
    else{
        console.log("Not Perfect");
    }

}
main();