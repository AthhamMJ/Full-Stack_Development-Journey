function palindrome(n){
    if (n > 0){
        let temp = n;
        let rev = 0;
        for(let digit; n > 0; n--){
            digit = n % 10;
            rev = rev * 10 + digit;
            n = Math.floor(n / 10);
        }
        if(temp == rev){
                console.log("Same "+temp+" = "+rev);
            }
            else{
                console.log("Not same "+temp+" <> "+rev);
            }
    }
}
palindrome(1111);