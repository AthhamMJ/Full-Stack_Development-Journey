function Odd(n){
  let odd = 0
  for(;n > 0; n--){
      if(n % 2 ==1){
        odd+=n;
      }
  }
    console.log("The sumation of odd number is: "+ odd)
}
Odd(100);