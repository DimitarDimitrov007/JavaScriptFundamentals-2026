function distance(meters) {
    let km = meters / 1000;
    let miles = (km * 0.621371).toFixed(2);

    console.log(`${meters} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles} miles.`);

}
distance(1852);