console.log(dayjs());

function gameInProgress(apiDate) {

    //turning the date into sportsdata.io format

    var today = new Date();

    var numDate = today.getDate();
    
    var numMonth = today.getMonth();
    var year = today.getFullYear();

    var month;
    var date;


    //ADJUSTING THE STYLE OF THE DAY
    if (numDate == "1") {
        date = "01";
    }

    if (numDate == "2") {
        date = "02";
    }

    if (numDate == "3") {
        date = "03";
    }

    if (numDate == "4") {
        date = "04";
    }

    if (numDate == "5") {
        date = "05";
    }

    if (numDate == "6") {
        date = "06";
    }

    if (numDate == "7") {
        date = "07";
    }

    if (numDate == "8") {
        date = "08";
    }

    if (numDate == "9") {
        date = "09";
    }


    //ADJUSTING THE STYLE OF THE MONTH
    if (numMonth == "0") {
        month = "01";
    }

    if (numMonth == "1") {
        month = "02";
    }

    if (numMonth == "2") {
        month = "03";
    }

    if (numMonth == "3") {
        month = "04";
    }

    if (numMonth == "4") {
        month = "05";
    }

    if (numMonth == "5") {
        month = "06";
    }

    if (numMonth == "6") {
        month = "07";
    }

    if (numMonth == "7") {
        month = "08";
    }

    if (numMonth == "8") {
        month = "09";
    }

    if (numMonth == "9") {
        month = "10";
    }

    if (numMonth == "10") {
        month = "11";
    }

    if (numMonth == "11") {
        month = "12";
    }

    

    var apiDate;
    apiDate = year + "-" + month + "-" + date;


    const api_url = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${apiDate}?key=c8b0f33081df4e169dee41736301a0eb`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            

            for(var i = 0; i < data.length; i++) {
                if(data[i].HomeTeamID === 7 | data[i].AwayTeamID === 7) {
                    if(data[i].HomeTeamScore === "null" && data[i].AwayTeamScore === "null") {
                        var gameIsNotHappening;
                        gameIsNotHappening = document.getElementById("gip-answer");
                        gameIsNotHappening.textContent = "No";
                    }

                    else if(data[i].HomeTeamScore !== "null" && data[i].AwayTeamScore !== "null") {
                        var gameIsHappening;
                        gameIsHappening = document.getElementById("gip-answer");
                        gameIsHappening.textContent = "Yes";
                    }
                    console.log(data[i].DateTime)
                   
                    
                    var displayedDate = dayjs(data[i].DateTime).format('dddd, MMM D, YYYY');
                    var displayedTime = dayjs(data[i].DateTime).format('h:mma');
                    

                    var gameTime = document.getElementById("game-start-date");
                    gameTime.textContent = displayedDate;

                    var gameDate = document.getElementById("game-start-time");
                    gameDate.textContent = displayedTime;
                }

                
            }


        })
}
gameInProgress();
