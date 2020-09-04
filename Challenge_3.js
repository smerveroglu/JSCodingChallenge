
var calcTips = function(bill){
    if(bill < 50){
        return bill * 0.2;
    }
    else if(bill >= 50 && bill <200){
        return bill * 0.15;
    }
    else{
        return bill * 0.1;
    }
}


var bills = [124, 48, 268];
var tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
var paidAmaounts = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];

console.log(tips);
console.log(paidAmaounts);
