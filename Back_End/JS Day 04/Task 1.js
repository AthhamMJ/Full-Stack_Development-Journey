console.log("Running...");

function main(){
    circle(15);
    square(20, 25)
    average(12, 23, 54)
    numswap(12, 23)
    age(2006)
}

function circle(raduis){
    let r = raduis;
    const pi = Math.PI;
    area = pi*r*r;
    circum = 2*pi*r;

    console.log("Area of Circle : " + area);
    console.log("Area of Circle : " + circum);
}
function square(length ,width){
    let l = length;
    let w = width;
    area = l * w;
    circum = 2*l+w
    
    console.log("Area of Square : " + area);
    console.log("Area of Square : " + circum);
}

function average(num1, num2, num3){
    let n1 = num1;
    let n2 = num2;
    let n3 = num3;
    avg = n1+n2+n3/3;
    
    console.log("Average is : "+avg);
}
function numswap(num1, num2){
    let n1 = num1;
    let n2 = num2;
    let temp;

    temp = num1;
    num1 = num2;
    num2 = temp;

    console.log("The Values are Swapped : "+"Num1 = "+num1+" "+"Num2 = "+num2);
}

function age(year){
    let year = y;
    let a;
    a = 2026 - y;

    console.log("Your Age is : "+a);
}
main();