function DtoB(num){
    let binary = new Array(); 
    for(let div = 2; num > 0; num = Math.floor(num / div)){
        binary.push(num % div)
    }
    console.log(binary.reverse())
    let convert = new Array();
    // for(let count = 0; count < binary.length; count+=4){
    //     console.log((binary.slice(count, count + 4));
    // }
}
DtoB(8);