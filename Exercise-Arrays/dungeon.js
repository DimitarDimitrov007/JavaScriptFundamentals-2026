function dungeon(input) {
    let health = 100;
    let coins = 0;
    let roomCounter = 0;

    input = input.split("|");

    for (let i = 0; i < input.length; i++) {
        roomCounter++;

        let currentElement = input[i];
        currentElement = currentElement.split(" ");

        let firstPart = currentElement[0];
        let secondPart = Number(currentElement[1]);

        if (firstPart === "potion") {
            if (health + secondPart <= 100) {
                health += secondPart;
                console.log(`You healed for ${secondPart} hp.`);
                console.log(`Current health: ${health} hp.`);

            }else if(health + secondPart > 100){
                let amountToHeal = 100 - health;
                health += amountToHeal;
                console.log(`You healed for ${amountToHeal} hp.`);
                console.log(`Current health: ${health} hp.`);

            }


        } else if (firstPart === "chest") {
            coins += secondPart;
            console.log(`You found ${secondPart} coins.`);

        } else {
            health -= secondPart;

            if (health > 0) {
                console.log(`You slayed ${firstPart}.`);

            } else {
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${roomCounter}`);
                return;

            }

        }

    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);


}
 //dungeon("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeon("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");