function townInfo(name, population, area) {

    if (name.length < 3) {
        console.log("Town name must be at least 3 characters!");
    }

    if (population <= 0) {
        console.log("Population must be a positive number!");
    }

    if (area <= 0) {
        console.log("Area must be a positive number!");
    }

    if (name.length >= 3 && population >= 1 && area >= 1) {
        console.log(`Town ${name} has population of ${population} and area ${area} square km.`);
    }

}
townInfo('Sofia',
    1286383,
    492
);