function calc(num1, num2, arith){
    let n1 = num2;
    let n2 = num2;

    
    switch(arith){
        case "+":
            sum = n1 + n2
            break
    }
    switch(arith){
        case "-":
            sum = n1 - n2
            break
    }
    switch(arith){
        case "*":
            sum = n1 * n2
            break
    }
    switch(arith){
        case "/":
            sum = n1 / n2
            break
    }
    console.log("The Answer is "+sum);
}
calc(12, 12, "+");