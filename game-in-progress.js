//turning the date into sportsdata.io format

var today = new Date();

var date = today.getDate();
var numDayOfWeek = today.getDay();
var numMonth = today.getMonth();
var year = today.getFullYear();

var month;



if(month == "January"){
    month = "Jan";
}

if(month == "February"){
    month = "Feb";
}

if(month == "March"){
    month = "Mar";
}

if(month == "April"){
    month = "Apr";
}

if(month == "May"){
    month = "May";
}

if(month == "June"){
    month = "Jun";
}

if(month == "July"){
    month = "Jul";
}

if(month == "August"){
    month = "Aug";
}

if(month == "September"){
    month = "Sep";
}

if(month == "October"){
    month = "Oct";
}

if(month == "November"){
    month = "Nov";
}

if(month == "December"){
    month = "Dec";
}

console.log(month);

var apiDate;
apiDate = year + "-" + month + "-" + date;

console.log(apiDate);




function gameInProgress(apiMonth) {

    const api_url = `https://api.sportsdata.io/v3/nba/stats/json/BoxScores/${apiDate}?key=c8b0f33081df4e169dee41736301a0eb`;
    
    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            
    
            
    
        })
    }
    
    gameInProgress();
    