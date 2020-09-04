var Mark ={
    fullName = 'Mark', 
    mass = 97,
    height = 1.82
};

var John ={
    fullName = 'John', 
    mass = 83,
    height = 1.95
};

var calcBMI = function (mass, height){
    return mass /(height*height);
}

var markBMI = calcBMI(Mark.mass, Mark.height);
var johnBMI = calcBMI(John.mass, John.height);

if(markBMI > johnBMI){
    console.log(mark.fullName + ' ' + markBMI);
}
else if(markBMI == johnBMI){
    console.log(Mark.fullName + ' ' + markBMI);
    console.log(John.fullName + ' ' + johnBMI);

}
else{
    console.log(John.fullName + ' ' + johnBMI);
}
