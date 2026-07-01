function charsInRange(firstChar,secondChar) {
    let firstCharToNum = firstChar.charCodeAt(0);
    let secondCharToNum = secondChar.charCodeAt(0);

    
    let end = 0;
    let start = 0;

    if(firstCharToNum < secondCharToNum){
        start = firstCharToNum;
        end = secondCharToNum;

    }else{
        start = secondCharToNum;
        end = firstCharToNum;
    }



    function printSymbols(start,end){
        let result = "";

        for(let i = start + 1; i < end ; i ++){
          
            result += String.fromCharCode(i) + " ";

        }

        return result;

    }

    return printSymbols(start,end);

}
console.log(charsInRange('a','d'));