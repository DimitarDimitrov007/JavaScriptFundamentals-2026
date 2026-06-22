function commonElements(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        for (let x = 0; x < array2.length; x++) {

            let currentElement = array1[i];
            let elementToCompare = array2[x];

            if (currentElement === elementToCompare) {
                console.log(currentElement);
            }
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);