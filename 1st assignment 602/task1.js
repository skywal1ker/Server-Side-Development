currentTime = new Date().getHours()
currentTime2 = new Date().getMinutes()

function timeGreetings()
{
    if(currentTime < 12)
    {console.log("Good Morning my neighbors!");} 

    else if(currentTime > 12 && currentTime<18)
    {console.log("Good Afternoon")}

    else if(currentTime > 18) 
    {console.log("Good Evening!")}

    else 
    {console.log("Error")}
}


console.log(`The time is now ${currentTime}:${currentTime2}`)
timeGreetings()


