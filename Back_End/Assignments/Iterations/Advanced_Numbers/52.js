function main(){
    Amstrong(10000)
}

function Amstrong(n){
    for(let i = 0; i <= n; i++){
        let temp = i;
        let count = 0;
        for(;temp > 0; temp = Math.floor(temp / 10)){
            count++;
        }
        temp = i;
        let sum = 0
        for(;temp > 0; temp = Math.floor( temp / 10)){
            sum += Math.pow(temp % 10, count);
        }
        if(sum === i){
            console.log(i);
        }
    }
}
main();