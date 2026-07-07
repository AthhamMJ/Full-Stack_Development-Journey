function Array(){
    let fruits = ['Tangerine', 'Lemon', 'Mango', 'Apple', 'Pine-Apple', 'Avacado', 'Jack', 'Mangustine', 'Dragon'];
    fruits[0] = 'Banana';
    fruits.splice(0, 0, 'orange');
    console.log(fruits)
}
Array();