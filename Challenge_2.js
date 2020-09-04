var johnTeam, mikeTeam;
johnTeam = (89+120+103)/3;
mikeTeam = (116+94+123)/3; 

if(johnTeam > mikeTeam){
    console.log("John's team win!!!");
}
else{
    console.log("Mike's team win!!!");
}

var maryTeam = (97+134+105)/3;

if(johnTeam > mikeTeam && johnTeam > maryTeam){
    console.log("John's team win!!!");
}
else if(mikeTeam > johnTeam && mikeTeam > maryTeam){
    console.log("Mike's team win!!!");
}
else{
    console.log("Mary's team win!!!");
}