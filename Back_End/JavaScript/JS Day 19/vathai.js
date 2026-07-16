function main(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let twodnumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
    let repeat = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 8];

    print(numbers);
    twoDArray(twodnumbers);
    noRepeat(repeat);
}


function print(numbers){
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log("The sumation of Array is : " +sum);
    max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(max < numbers[i]){
            max = numbers[i];
        }
        else{
            continue;
        }
    }
    console.log("The largest number is : " + max);
}


function twoDArray(twodnumbers){
    let number = 3;
    let answer = []
    for(let i = 0; i < twodnumbers.length; i++){
        max = [0][0]; 
        answer[i] = []
        for(let j = 0; j < twodnumbers[i].length; j++){
            answer[i].push(twodnumbers[i][j] * number);
            if(max < twodnumbers[i][j]){
                max = twodnumbers[i][j]
            }
            if(twodnumbers[i][j] % 2 != 0){
                console.log(twodnumbers[i][j]);
            }
            else{
                continue;
            }
        }
    }
    console.table(answer);
    console.log("The Largest number is : " + max);
}


function noRepeat(repeat){
    let num;
    for(let i = 0; i < repeat.length; i++){
        num = repeat[i];
        if(repeat[i] != repeat[i+1]){
            console.log(repeat[i]);
            continue;
        }
    }
}

main();



