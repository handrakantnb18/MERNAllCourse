/* switch statement */

let day = 5;

switch(day)
{
    case 1 :
        console.log("today is sunday..");
        break;
    case 2:
        console.log("today is monday");
        break;
    case 3 :
        console.log("today is tuesday");
        break;
    case 4:
        console.log("today is wednsday");
        break;
    case 5 :
        console.log("today is thrasday..");
        break;
    case 6:
        console.log("today is friday");
        break;
    case 7 :
        console.log("today is saturday..");
        break;
    default :
        console.log("invalid day")
}

/* turnery operator */
let age = 15;

let eligibility = (age  >= 18) ? "Eligible" : "Not eligible";
{
    console.log (eligibility);
}
