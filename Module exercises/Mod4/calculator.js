let user=prompt("Enter a number");
 let  new_user=Number(user)
let user1=prompt("Enter another number");
 let new_user1=Number(user1)
let equation=prompt("ENter a mathematcial equation(+,-,/,*)")
var asnw;

if (!Number.isNaN(new_user) && !Number.isNaN(new_user1))
{
switch (equation)                                                                             
{
    case "+":
         answ=new_user+new_user1;
        alert(answ);
        break;

        case "-":
         answ=new_user-new_user1;
        alert(answ);
        break;

        case "/":
         answ=new_user/new_user1;
        alert(answ);
        break;

        case "*":
         answ=new_user*new_user1;
        alert(answ);
        break;
}
}
else{
    answ="One of the numbers was not a number";
    alert(answ)
};


