function hectoooor(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let currentFight = 1;
    let totalCost = 0;
    let shieldCounter = 0;

    while (currentFight <= lostFights) {

        if (currentFight % 2 === 0) {
            totalCost += helmetPrice;
        }

        if (currentFight % 3 === 0) {
            totalCost += swordPrice;

        }

        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            totalCost += shieldPrice;
            shieldCounter++;

            if (shieldCounter === 2) {
                totalCost += armorPrice;
                shieldCounter = 0;
            }
        }

        currentFight++;


    }

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);

}
hectoooor(7,
    2,
    3,
    4,
    5
);