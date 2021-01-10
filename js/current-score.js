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
                    console.log(data[i]);
                    
                    var teamsPlaying;
                    teamsPlaying = document.getElementById("teams-playing-txt");
                    teamsPlaying.textContent = data[i].AwayTeam + " at " + data[i].HomeTeam;
                    
                    var awayName;
                    awayName =document.getElementById("away");
                    awayName.textContent = data[i].AwayTeam;

                    var homeName;
                    homeName =document.getElementById("home");
                    homeName.textContent = data[i].HomeTeam;

                    if(data[i].HomeTeamID === 7) {
                        var sixersHome;
                        sixersHome = document.getElementById("home-score");
                        sixersHome.textContent = data[i].HomeTeamScore;
                        
                        var gameStatus;
                        gameStatus = document.getElementById("status");
                        gameStatus.textContent = data[i].Status;
                        

                    }

                    else if(data[i].AwayTeamID === 7) {
                        var sixersAway;
                        sixersAway = document.getElementById("away-score");
                        sixersAway.textContent = data[i].AwayTeamScore;

                        var gameStatus;
                        gameStatus = document.getElementById("status");
                        gameStatus.textContent = data[i].Status;
                        
                    

                    }

                    

                    if(data[i].HomeTeamID !== 7) {
                        var opponentHome;
                        opponentHome = document.getElementById("home-score");
                        opponentHome.textContent = data[i].HomeTeamScore;
                        
                    }

                    if(data[i].AwayTeamID !== 7) {
                        var opponentAway;
                        opponentAway = document.getElementById("away-score");
                        opponentAway.textContent = data[i].AwayTeamScore;
                        

                    }

                    if(data[i].AwayTeamScore === null) {
                        var zeroPlaceHolderAway;
                        zeroPlaceHolderAway = document.getElementById("away-score");
                        zeroPlaceHolderAway.textContent = "0";
                    } 
                    
                    if(data[i].HomeTeamScore === null) {
                        var zeroPlaceHolderHome;
                        zeroPlaceHolderHome = document.getElementById("home-score");
                        zeroPlaceHolderHome.textContent = "0";
                    }
                    
                    console.log(data[i])





                }
                
            }

        })
}
gameInProgress();

setInterval(gameInProgress, 30000);
