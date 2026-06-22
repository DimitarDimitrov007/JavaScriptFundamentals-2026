function maxSequence(array) {

    let max = [];

    for (let i = 0; i < array.length; i++) {

        let currentSequence = [];
        currentSequence.push(array[i]);

        for (let x = i + 1; x < array.length; x++) {

            let currentElement = array[x];

            if (currentSequence[0] === currentElement) {
                currentSequence.push(currentElement);

            } else {
                break;

            }
        }

        if(currentSequence.length > max.length){
            max = currentSequence;

        }
    }

    console.log(max.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);