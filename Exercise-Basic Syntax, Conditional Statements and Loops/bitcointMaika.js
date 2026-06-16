function bitcoin(input) {
    let money = 0;
    let dayCounter = 0;
    let bitcoins = 0;
    let dayOfPurchase = 0;
    let bitcoinPrice = 11949.16;
    let isPurchased = false;

    for (let i = 0; i < input.length; i++) {
        dayCounter++;
        let currentShiftGold = 0;

        if(dayCounter % 3 === 0){
            currentShiftGold = Number(input[i]) * 0.7;

        }else{
            currentShiftGold = Number(input[i]);

        }
        
        money += currentShiftGold * 67.51;

        if (money >= bitcoinPrice) {
            bitcoins++
            money -= bitcoinPrice;

            if(bitcoins === 1 && isPurchased === false){
                dayOfPurchase = dayCounter;
                isPurchased = true;
            }
        }


    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);


}
bitcoin([100, 200, 300]);