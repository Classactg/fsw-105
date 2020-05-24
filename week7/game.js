const readlineSync = require('readline-sync');

const name = readlineSync.question('Who is your Super Hero of choice? Wolverine, Psylock, Nightcrawler, Beast, Rogue ');

readlineSync.question('Greetings ' + name +', X-Men, this is your chance to save the world from peril. Press Enter to Begin. ')

const evilDoers = ['Sentinel', 'Morlock', 'Reptilian', 'Assemble Bot', 'Elemental Monster'];
const lootBox = ['Ration', 'Super Boost', 'Money', 'Ultra Pack Food & Boost'];
var prize = [];
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = lootBox[Math.floor(Math.random()*lootBox.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const evilDoer = evilDoers[Math.floor(Math.random() * evilDoers.length)];
    let evilDoersHealth = 40;
    const evilDoersPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, `What would you like to do next?`);

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nLootBox: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking....');
        } else if (key >= .3) {
            console.log(evilDoer + ' showed up.');

            while(evilDoersHealth > 0 && userHealth > 0) {
                const user = readlineSync.question(`What do you want to do? enter "r" to run or "a" to attack:`);

                switch (user){
                    case 'r':
                        const run = Math.random();
                        console.log(run)
                        if(run < .5) {
                            console.log('Before you can run away ' + evilDoer + ' attacks you with:' + evilDoersPower);
                        }else if(run > .6) {
                           return console.log('You Ran Away!!');
                            
                        }
                    
                    case 'a':
                        evilDoersHealth -= attackPower;
                        console.log('You attacked ' + evilDoer + ' with ' + attackPower + ' attack power');

                        userHealth -= evilDoersPower;
                        console.log('Enemy just attacked you with: ' + evilDoersPower + ' attack power');

                        if (evilDoersHealth <= 0){
                             console.log('You killed ' + evilDoer + '.\n' + evilDoer + ' left: ' + pickUp);
                            let loot = Math.random();
                            if(loot <= .3){
                                prize.push(pickUp);
                            }
                            } else if(userHealth <= 0){
                                console.log(evilDoer + ' has defeated you. GAME OVER.');
                            }
                            
                            
                            
                    }
                }
            }
        }
}

while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}
