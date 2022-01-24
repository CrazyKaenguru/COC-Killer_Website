function getRandomNumber(min,max)
{
    document.getElementById("output").innerHTML=Math.floor(Math.random()*(max - min))+min;
}
function logwhenword()
{
   var val = document.getElementById("password").value;
  alert(val);
}
function CheckCheckbox()
{
  var checkbox = document.getElementById("checkbox");
  
}

function GetTime()
{
   
    
    
    let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
ReportTimeStamp=("<b>" + cDay + "/" + cMonth + "/" + cYear + "/" + time+"</b>");
console.info(document.getElementById("timestamp").value)
document.getElementById("timestamp").value =  cDay + "/"+ cMonth + "/" + cYear + "  Time:  "+time


}
