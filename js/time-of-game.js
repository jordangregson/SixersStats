console.log(dayjs());

function gameInProgress(apiDate) {

    //turning the date into sportsdata.io format

    var today = new Date();

    var numDate = today.getDate();
    
    var numMonth = today.getMonth();
    var year = today.getFullYear();

    var month;
    var date;

    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();


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

    //ADJUSTING THE TIME LAYOUT
    var numHour;
    var numMin;

    if(hour == "0") {
        hour = 12;
    }

    if(hour == "1") {
        hour = 01;
    }

    if(hour == "2") {
        hour = 02;
    }

    if(hour == "3") {
        hour = 03;
    }

    if(hour == "4") {
        hour = 04;
    }

    if(hour == "5") {
        hour = 05;
    }

    if(hour == "6") {
        hour = 06;
    }

    if(hour == "7") {
        hour = 07;
    }

    if(hour == "8") {
        hour = 08;
    }

    if(hour == "9") {
        hour = 09;
    }

    //MINUTES

    if(minutes == "0") {
        minutes = 00;
    }

    if(minutes == "1") {
        minutes = 01;
    }

    if(minutes == "2") {
        minutes = 02;
    }

    if(minutes == "3") {
        minutes = 03;
    }

    if(minutes == "4") {
        minutes = 04;
    }

    if(minutes == "5") {
        minutes = 05;
    }

    if(minutes == "6") {
        minutes = 06;
    }

    if(minutes == "7") {
        minutes = 07;
    }

    if(minutes == "8") {
        minutes = 08;
    }

    if(minutes == "9") {
        minutes = 09;
    }


    //SECONDS

    if(seconds == "0") {
        seconds = 00;
    }

    if(seconds == "1") {
        seconds = 01;
    }

    if(seconds == "2") {
        seconds = 02;
    }

    if(seconds == "3") {
        seconds = 03;
    }

    if(seconds == "4") {
        seconds = 04;
    }

    if(seconds == "5") {
        seconds = 05;
    }

    if(seconds == "6") {
        seconds = 06;
    }

    if(seconds == "7") {
        seconds = 07;
    }

    if(seconds == "8") {
        seconds = 08;
    }

    if(seconds == "9") {
        seconds = 09;
    }

    var dateTime = year + "-" + month + "-" + numDate + "T" + hour + ":" + minutes + ":" + seconds;


    console.log(dateTime);
    var apiDate;
    apiDate = year + "-" + month + "-" + date;


    const api_url = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${apiDate}?key=c8b0f33081df4e169dee41736301a0eb`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            

            for(var i = 0; i < data.length; i++) {
                if(data[i].HomeTeamID === 13 | data[i].AwayTeamID === 13) {
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
                    
                   
                    
                    var displayedDate = dayjs(data[i].DateTime).format('dddd, MMM D, YYYY');
                    var displayedTime = dayjs(data[i].DateTime).format('h:mma');
                    

                    var gameTime = document.getElementById("game-start-date");
                    gameTime.textContent = displayedDate;

                    var gameDate = document.getElementById("game-start-time");
                    gameDate.textContent = displayedTime;
                }

                if(data[i].DateTime <= dateTime) {
                    var gameTime = document.getElementById("game-start-date");
                    gameTime.textContent = "  ";

                    var at = document.getElementById("at");
                    at.textContent = "  ";

                    var gameDate = document.getElementById("game-start-time");
                    gameDate.textContent = "  ";
                    

                }

                
                
            }


        })
}
gameInProgress();
