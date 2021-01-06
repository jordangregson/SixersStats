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


    const api_url = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${apiDate}?key=c8b0f33081df4e169dee41736301a0eb`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            //THIS IS A TOOL DESIGNED TO SEE WHICH ARRAY THE SIXERS GAME TAKES PLACE IN

            if (data[0].HomeTeamID == 7 | data[0].AwayTeamID == 7) {
                console.log("0");
            }

            else if (data[1].HomeTeamID == 7| data[1].AwayTeamID == 7) {
                console.log("1");
            }

            else if (data[2].HomeTeamID == 7| data[2].AwayTeamID == 7) {
                console.log("2");
            }

            else if (data[3].HomeTeamID == 7| data[3].AwayTeamID == 7) {
                console.log("3");
            }

            else if (data[4].HomeTeamID == 7| data[4].AwayTeamID == 7) {
                console.log("4");
            }

            else if (data[5].HomeTeamID == 7| data[5].AwayTeamID == 7) {
                console.log("5");
            }

            else if (data[6].HomeTeamID == 7| data[6].AwayTeamID == 7) {
                console.log("6");
            }

            else if (data[7].HomeTeamID == 7| data[7].AwayTeamID == 7) {
                console.log("7");
            }

            else if (data[8].HomeTeamID == 7| data[8].AwayTeamID == 7) {
                console.log("8");
            }

            else if (data[9].HomeTeamID == 7| data[9].AwayTeamID == 7) {
                console.log("9");
            }

            else if (data[10].HomeTeamID == 7| data[10].AwayTeamID == 7) {
                console.log("10");
            }

            else if (data[11].HomeTeamID == 7| data[11].AwayTeamID == 7) {
                console.log("11");
            }



        })
}
gameInProgress();
