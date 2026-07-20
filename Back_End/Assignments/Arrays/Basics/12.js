//Check whether an array contains a specific value. 
function Array(){
    let fruits = ['Tangerine', 'Lemon', 'Mango', 'Apple', 'Pine-Apple', 'Avacado', 'Jack', 'Mangustine', 'Dragon'];
    for(const i of fruits){
        if(fruits[i] = 'Lemon'){
            console.log(fruits[i] + " found !")
            break;
        }
        else{
            continue;
        }
    }
}
Array();