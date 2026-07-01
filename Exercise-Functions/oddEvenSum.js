function oddEvenSum(num) {
    let numAsText = String(num);
    let odd = oddSum(numAsText);
    let even = evenSum(numAsText);


    function oddSum(text) {
        let sum = 0;


        for (let i = 0; i < text.length; i++) {
            let currentChar = Number(text[i]);


            if (currentChar % 2 !== 0) {
                sum += currentChar;
            }
        }

        return sum;

    }

    function evenSum(text) {
        let sum = 0;


        for (let i = 0; i < text.length; i++) {
            let currentChar = Number(text[i]);


            if (currentChar % 2 === 0) {
                sum += currentChar;
            }
        }

        return sum;

    }

    return `Odd sum = ${odd}, Even sum = ${even}`;

}
console.log(oddEvenSum(1000435));