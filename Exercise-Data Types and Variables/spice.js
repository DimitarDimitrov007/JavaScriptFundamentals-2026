function spice(start) {
    let days = 0;
    let totalAmountMined = 0;

    while (start >= 100) {
        days++;
        totalAmountMined += start;

        if (totalAmountMined >= 26) {
            totalAmountMined -= 26;
        }

        start -= 10;

    }

    if (totalAmountMined >= 26) {
        totalAmountMined -= 26;
    }



    console.log(days);
    console.log(totalAmountMined);

}
spice(111);