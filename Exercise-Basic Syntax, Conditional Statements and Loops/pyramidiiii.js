function pyramidiii(base, increment) {
    let stone = 0;
    let lapiz = 0;
    let gold = 0;
    let marble = 0;
    let floor = 0;
    let height = 0;
    


    while (base > 0) {
        height += increment;
        floor++;

        if (base - 2 <= 0) {
            gold += base * base * increment;
            break;
        }

        if (floor % 5 === 0) {
            stone += ((base - 2) * (base - 2)) * increment;
            lapiz += ((4 * base) - 4) * increment;

        } else {
            stone += ((base - 2) * (base - 2)) * increment;
            marble += ((4 * base) - 4) * increment;

        }

        base -= 2;

    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
pyramidiii(11,
    1
);