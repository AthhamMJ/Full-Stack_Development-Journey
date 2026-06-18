function cat(age){
    if (age < 13){
        console.log("The Student is a Child. He is " + age + " years old");
    }
    else if(age < 20){
        console.log("The Student is a Teenager. He is " + age + " years old");
    } 
    else{
        console.log("The Student is an Adult. He is " + age + " years old");
    }
}
cat(21);