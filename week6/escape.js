var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');

const strWelcome = `Welcome ${userName} to the Escape Room Simulation!`;
console.log(strWelcome);

let isPlayerAlive = true;
let hasKey = false;

while(isPlayerAlive === true)
{
    const myGameMenuOptions = readlineSync.keyIn("Enter 1 to Put hand in hole \nEnter 2 to Find the  key \nEnter 3 to Open the door:", {limit: '$<1-3>'});

if (myGameMenuOptions == 1)
{
     console.log(`Sorry ${userName}! You are now SmOkEd, game is over!`);
    isPlayerAlive = false;
}
else if (myGameMenuOptions == 2 && hasKey == false)
{
    console.log(`${userName}, you found the key with ease!`);
    hasKey = true;
}
else if (myGameMenuOptions == 2 && hasKey == true)
{
    console.log(`${userName}, you already had the key from earlier selection foolio!`);
}
else if (myGameMenuOptions == 3 && hasKey == false)
{
    console.log(`${userName} - you need to find the key first!`);
    hasKey = true;
}
else if (myGameMenuOptions == 3 && hasKey == true)
{
    console.log(`${userName}, you already have the key, and you opened the door, HURRAY!!! You're free! Game Over!`);
    isPlayerAlive = false;  
}
}
























