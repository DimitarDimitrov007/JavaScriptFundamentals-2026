function repeatString(text,count) {

    return repeatingTheString(text,count) ;

    function repeatingTheString(text, count) {
        let result = "";

        for (let i = 0; i < count; i++) {
            result += text;

        }

        return result;

    }

}
console.log(repeatString("abc", 3));