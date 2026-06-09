function triangle(side1, side2, side3){
    s1 = side1;
    s2 = side2;
    s3 = side3;

    if (s1 === s2 & s2 === s3){
        console.log("This is a Equilateral triangle");
    }
    else if (s1 === s2 || s2 === s3 || s1 === s3){
        console.log("This is a Isosless triangle");
    }
    else{
        console.log("This is a Irregualar triangle");
    }
}
triangle(12, 13, 15);