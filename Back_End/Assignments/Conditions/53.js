function ticket(age){
    let a = age;
    let ticket;
    if (age < 18){
        ticket = 10;
        console.log(`You are only` ,age, `You cannot have driving licence`);
    }
    else{
        console.log(`You can have a Driving lisence Because you're`, age);
    }
}
ticket(18);