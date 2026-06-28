function square(digit){
    let d = digit;
    for(let star ="*"; digit > 0; digit--){
        console.log(star.repeat(d));
    }
}
square(15);