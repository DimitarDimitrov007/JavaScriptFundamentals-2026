function reading(pages, pagerPerHour, days) {
    let pagesPerDay = pages / days;
    let timeNeeded = pagesPerDay / pagerPerHour;
    console.log(timeNeeded);

}
reading(212,
    20,
    2
);