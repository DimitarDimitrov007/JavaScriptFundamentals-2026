function orders(product,quantity){

    return doingTheMath(product,quantity);

    function doingTheMath(product,quantity){

        switch(product){
            case "water" :
                return (1.00 * quantity).toFixed(2);

            case "coffee" :
                return (1.50 * quantity).toFixed(2);

            case "coke" :
                return (1.40 * quantity).toFixed(2);

            case "snacks" :
                return (2.00 * quantity).toFixed(2);
        }
    }

}
console.log(orders("water", 5));