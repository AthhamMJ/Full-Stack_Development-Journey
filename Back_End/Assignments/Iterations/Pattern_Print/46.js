function onetofive(digit){
    let number = 1;
    for(let lastnum = 1; digit > 0; digit--){
        console.log(number);
        number*= 10;
        lastnum++;
        number+=lastnum
    }
}
onetofive(5);