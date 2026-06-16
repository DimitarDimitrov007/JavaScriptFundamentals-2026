function vacation(people, type, day) {
    let price = 0;

    switch (type) {

        case "Students":
            if (day === "Friday") {
                price += people * 8.45;

            } else if (day === "Saturday") {
                price += people * 9.8;

            } else if (day === "Sunday") {
                price += people * 10.46;

            }

            if (people >= 30) {
                price = price * 0.85;
            }

            break;

        case "Business":
            if (day === "Friday") {
                if (people >= 100) {
                    price = (people - 10) * 10.9;

                } else {
                    price = people * 10.9;

                }


            } else if (day === "Saturday") {
                if (people >= 100) {
                    price = (people - 10) * 15.6;

                } else {
                    price = people * 15.6;

                }


            } else if (day === "Sunday") {
                if (people >= 100) {
                    price = (people - 10) * 16

                } else {
                    price = people * 16;

                }


            }

            break;



        case "Regular":
            if (day === "Friday") {
                price += people * 15;

            } else if (day === "Saturday") {
                price += people * 20;

            } else if (day === "Sunday") {
                price += people * 22.5;

            }

            if(people >= 10 && people <= 20){
                price = price * 0.95;
            }
            break;


    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(30,
    "Students",
    "Sunday"
);