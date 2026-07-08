function main(){
    const marks = [85, 92, 49, 34, 98, 55, 98, 100];
    console.log("The Maximum is"+ Max(marks))
}

function Max(marks){
    let max = marks[0];
    let min = marks[1];
    for(let i = 0; i < marks.length; i++){
        if(marks[i] > max){
            max = marks[i];
        }
        else{
            min = marks[i]
        }
    }
    return[max,min];
}
main();