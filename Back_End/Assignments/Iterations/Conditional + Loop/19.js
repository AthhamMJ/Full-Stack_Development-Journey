function odd_and_even(n){
    let odd = 0;
    let even = 0;
    for(n > 0; n--;){
        if (n % 2 == 0){
            odd++;
        }
        else{
            even++;
        }
    }
    console.log("The Count Of Even Numbers Are ; "+ even);
    console.log("The Count Of Odd Numbers Are ; "+ odd);

}
odd_and_even(100);
