function isPalindrome(n){
    let reverse = 0;
    let number = n;
    for(; n > 0; n = Math.floor(n / 10)){
        reverse = reverse * 10 + (n % 10);
    }
    if(reverse == number){
        console.log(number+ " Is Palindrome Bro");
    }
    else{
        console.log(number+ " Is Not swPalindrome Bro");
    }
}
isPalindrome(12321);