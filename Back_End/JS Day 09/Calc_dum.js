function calc(num1, num2, arith){
    let n1 = num1;
    let n2 = num2;
    let sum;

    switch(arith){
        case "+":
            sum = n1 + n2;
            break;

        case "-":
            sum = n1 - n2;
            break;

        case "*":

            sum = n1 * n2;
            break;
        case "/":

            sum = n1 / n2;
            break;
    }
    console.log("The Answer of " + n1 + " " + arith+ " " + n2 + " " +"is = " + sum);
}
calc(12, 23, "*")