function onetofive(digit){
    let number = 1;
    for(let lastnum = 1; digit > 0; digit--){
        number*= 10;
        lastnum++;
        number+=lastnum;
    }
    for(;number > 0; number = Math.floor(number / 10)){
        console.log(number);
    }
    
}
onetofive(5);