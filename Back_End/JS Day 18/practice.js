function main(){
    let m1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    let digit = 2;
    let id = '/'
    console.table(matrix(m1, digit, id));
}
function matrix(m1, digit, id){
    let m2 = [];
    for(let i = 0; i < m1.length; i++){
        m2[i] = [];
        for(j = 0; j < m1[i].length; j++){
            // value = m1[i][j] * digit;
            let value = Identity( id, m1, i , j, digit);
            m2[i].push(value);
        }
    }
    return m2;
}

function Identity(id, m1, i , j, digit){
    switch(id){
        case '+':
            value = m1[i][j] + digit;
            break;
        case '-':
            value = m1[i][j] - digit;
            break;
        case '*':
            value = m1[i][j] * digit;
            break;
        case '/':
            value = m1[i][j] / digit;
            break;
    }
    return value;
}
main();

// This program was totally created by me with my own efford with somw referances.