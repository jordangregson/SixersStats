function gameInProgress(apiDate) {

    //turning the date into sportsdata.io format

    var today = new Date();

    var date = today.getDate();
    var numMonth = today.getMonth();
    var year = today.getFullYear();

    var month;


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

    

    var apiDate;
    apiDate = year + "-" + month + "-" + date;


    const api_url = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${apiDate}?key=c8b0f33081df4e169dee41736301a0eb`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //THIS IS AN ALGORITHM DESIGNED TO SEE WHICH ARRAY THE SIXERS GAME TAKES PLACE IN

            for(var i = 0; i < data.length; i++) {
                if(data[i].HomeTeamID === 7 | data[i].AwayTeamID === 7) {
                    
                    
                    if(data[i].AwayTeamScore === "null") {
                        var zeroPlaceHolder;
                        zeroPlaceHolder = document.getElementById("away-score");
                        zeroPlaceHolder.textContent = "0";
                    } 
                    
                    if(data[i].HomeTeamScore === "null") {
                        console.log("hi");
                    }





                }
                
            }

        })
}
gameInProgress();

setInterval(gameInProgress, 30000);



