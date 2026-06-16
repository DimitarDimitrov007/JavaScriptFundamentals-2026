function sort(one, two, three) {
    let biggest = 0;
    let smallest = 0;
    let middle = 0;

    if (one > two) {
        if (one > three) {
            biggest = one;

            if (two > three) {
                smallest = three;
                middle = two;

            } else {
                smallest = two;
                middle = three;
            }
        } else {
            biggest = three;
            if(one > two){
                smallest = two;
                middle = one;

            }else{
                smallest = one;
                middle = two;
            }

        }


    } else {
        if (two > three) {
            biggest = two;
            if(one > three){
                smallest = three;
                middle = one;

            }else{
                smallest = one;
                middle = three;

            }

        } else {
            biggest = three;
            if(one > two){
                smallest = two;
                middle = one;

            }else{
                smallest = one;
                middle = two;
            }
        }
    }

    console.log(biggest);
    console.log(middle);
    console.log(smallest);

}
sort(2,
    1,
    3
);