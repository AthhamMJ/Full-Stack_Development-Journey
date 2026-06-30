function score(s1, s2, s3, s4){
    if (s1 >= s2 & s1 >= s3 & s1 >= s4){
        console.log("Team 1 Wins the Monacco Granprix");
    }
    if (s2 >= s1 & s2 >= s3 & s2 >= s4){
        console.log("Team 2 Wins the Monacco Granprix");
    }
    if (s3 >= s2 & s3 >= s1 & s3 >= s4){
        console.log("Team 3 Wins the Monacco Granprix");
    }
    if (s4 >= s2 & s4 >= s3 & s4 >= s1){
        console.log("Team 4 Wins the Monacco Granprix");
    }
}
score(12, 100, 43, 100);