var john = {
    bills : [124, 48, 268, 180, 42],
    calcTips : function(bills){
        tips = [];
        for(var i=0; i<bills.length; i++){
            if(bills[i] < 50){
                tips[i] = bills[i] * 0.2;
            }
            else if(bills[i] >= 50 && bills[i] <200){
                tips[i] = bills[i] * 0.15;
            }
            else{
                tips[i] = bills[i] * 0.1;
            }
        }
        return tips;
    }

}
var johnTip = john.calcTips(john.bills);
var paidAmount = [];
for(var i=0; i<john.bills.length; i++){
    paidAmount[i] = johnTip[i] + john.bills[i];
}    

console.log(paidAmount);