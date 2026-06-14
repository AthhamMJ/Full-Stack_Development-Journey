function tax(salary){
    let s = salary;
    let tax;

    if(s >= 30000){
        tax = salary * 0.01
        salary += tax
    }
    else if(s >= 50000){
        tax = salary * 0.01
        salary += tax
    }
    else if(s >= 75000){
        tax = salary * 0.02
        salary += tax
    }
    else if(s >= 99000){
        tax = salary * 0.05
        salary += tax
    }
    else if(s >= 125000){
        tax = salary * 0.075
        salary += tax
    }
    else{
        console.log("No tax Go home")
    }
    console.log("Your Tax is: "+tax)
    console.log("Your Tax + Salary is: "+salary)
}
tax(99900);