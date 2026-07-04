function main(){
    let studentMarks = [
        ["paul", 75, 80, 85, 90, 95],
        ["Thanushika", 70, 85, 65, 95, 100],
        ["Abigail", 85, 83, 62, 67, 40],
        ["pujithran", 85, 80, 75, 35, 69],
        ["ashthaaf", 95, 85, 88, 90, 100],
        ["nusrath", 100, 100, 88, 50, 60],
        ["Athham Stark", 95, 85, 88, 72, 78],
        ["kavishanjali", 88, 78, 79, 39, 64],
        ["thaksha", 20, 30, 18, 70, 24],
        ["mathushika", 80, 70, 90, 100, 95],
        ["Abiyuth", 86, 79, 43, 65, 90]
    ]
    console.table(Average(studentMarks));
    console.log(highest(avgFinal))
    
}

function Average(x){
    let avgFinal = new Array();
    for(let i = 0; i < x.length; i++){
        let avg = 0;
        for(let j = 1; j < x[i].length; j++){
            avg = avg + (x[i][j] / ((x[i].length)-1));
        }
        // console.log(x[i][0]+ ":" + avg);
        avgFinal[i]=[x[i][0],+avg]
    }
    return avgFinal;
}
function highest(avgFinal){
    for(let i = 1; i < avgFinal.length; i++){
        let max = avgFinal[i];
        if(avgFinal > max){
            max = avgFinal;
        }
    }
    return max;
}
main();