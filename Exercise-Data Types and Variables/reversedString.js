function reversedString(string) {

    let result = "";

    for (let i = string.length - 1; i >= 0; i--) {
        let currentChar = string[i];
        result += currentChar;

    }

    console.log(result);

}
reversedString('Information');