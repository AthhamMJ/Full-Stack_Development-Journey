function main(){
    let n = 1000
    for(let i = 1; i <= n; i++){
        if(isPalindrome(i)){
            console.log(i)
        }
    }
}

function isPalindrome(n){
    let reverse = 0;
    let number = n;
    for(; n > 0; n = Math.floor(n / 10)){
        reverse = reverse * 10 + (n % 10);
    }
    return reverse === number;
}

main();