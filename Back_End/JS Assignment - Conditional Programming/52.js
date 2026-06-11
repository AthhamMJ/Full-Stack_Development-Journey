function ticket(age){
    let a = age;
    let ticket;
    if (age < 18){
        ticket = 10;
        console.log("Children's Ticket Ammount is $" + ticket);
    }
    else if (age < 50){
        ticket = 15;
        console.log("Adlut's Ticket Ammount is $" + ticket);
    }
    else if (age >=  50){
        ticket = 12;
        console.log("Senior Citizen Ticket Ammount is $" + ticket);
    }
    else{
        console.log("You're Not able to buy Tickets");
    }
}
ticket(54);