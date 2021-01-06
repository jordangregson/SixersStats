function gameInProgress(apiDate) {

    //turning the date into sportsdata.io format

    var today = new Date();

    var date = today.getDate();
    var numDayOfWeek = today.getDay();
    var numMonth = today.getMonth();
    var year = today.getFullYear();

    var month;

    console.log(numMonth);


    if (numMonth == "0") {
        month = "Jan";
    }

    if (numMonth == "1") {
        month = "Feb";
    }

    if (numMonth == "2") {
        month = "Mar";
    }

    if (numMonth == "3") {
        month = "Apr";
    }

    if (numMonth == "4") {
        month = "May";
    }

    if (numMonth == "5") {
        month = "Jun";
    }

    if (numMonth == "6") {
        month = "Jul";
    }

    if (numMonth == "7") {
        month = "Aug";
    }

    if (numMonth == "8") {
        month = "Sep";
    }

    if (numMonth == "9") {
        month = "Oct";
    }

    if (numMonth == "10") {
        month = "Nov";
    }

    if (numMonth == "11") {
        month = "Dec";
    }

    console.log(month);

    var apiDate;
    apiDate = year + "-" + month + "-" + date;


    const api_url = ``;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);




        })
}
gameInProgress();
