function main(){
    const m1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let digit = 2;
    console.table(Matrix(m1, digit, '+'));
}

function Matrix(m1, digit, button){
    let m2 = [];
    for(let i = 0; i < m1.length; i++){
        m2[i] = [];
        
        for(let j = 0; j < m1[i].length; j++){
            // calc = m1[i][j] * digit;
            let calc = Button(m1, i, j, digit, button);
            m2[i].push(calc);
        }
    }
    return m2;
}
function Button(m1, i, j, digit, button){
    switch (button){
        case '+':
            calc = m1[i][j] + digit;
            break;
        case '-':
            calc = m1[i][j] - digit;
            break;
        case '*':
            calc = m1[i][j] * digit;
            break;
        case '/':
            calc = m1[i][j] / digit;
            break;
    }
    return calc
}

main();
