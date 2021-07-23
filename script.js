//Function to calculate amount and simple interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = +principal + +interest;
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+",</mark><br> at an interest rate of <mark>"+rate+"%</mark><br>You will receive an amount of <mark>"+amount+"</mark><br>in the year <mark>"+year+"</mark>";
    
}
//Function to only accept positive values as principal input
function negativepric(){
        var p = document.getElementById("principal").value
        if(p<=0){
            alert("Value should be positive")
            document.getElementById("principal").focus();
        }
    }
//Function to update the rate scrollbar
function updateRate(rateval)
{
    
    document.getElementById("rate_val").innerHTML=rateval;
    
}
