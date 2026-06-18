function triangle(side1, side2, side3){
    s1 = side1;
    s2 = side2;
    s3 = side3;

    if ( s1 >= s2 + s3 || s2 >= s1 + s3 || s3 >= s1 + s2 ){
        console.log("This Might Be a 'Triangle'");
    }
    
    else{
        console.log("This Might not Be a 'Triangle'");
    }
}
triangle(12, 13, 25);