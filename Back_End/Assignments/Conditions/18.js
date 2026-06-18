function scoreswap(s1, s2){
    let temp = s1; 
    s2 = s1;
    s1 = temp;

    console.log("Score of Player one is " + s2 + " Score of Player two is "+s1);
}
scoreswap(23, 45);