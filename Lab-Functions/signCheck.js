function signCheck(numOne,numTwo,numThree){

    let sign = "Positive";
    let shouldChange = numOne < 0;
    sign = signChange(sign,shouldChange);
    shouldChange = numTwo < 0;
    sign = signChange(sign,shouldChange);
    shouldChange = numThree < 0;
    sign = signChange(sign,shouldChange);
    return sign;

    function signChange(sign , shouldChange){

        if(shouldChange){
            if(sign === "Positive"){
                sign = "Negative";

            }else{
                sign = "Positive";
            }

            return sign;
        }

        return sign;
    }

}
console.log(signCheck( 5,
 12,
-15
));