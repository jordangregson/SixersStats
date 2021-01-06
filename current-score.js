
function currentScore() {

    const api_url = ``;
    
    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            
            
    
            
    
        })
    }
    
    currentScore();

    setInterval(mlbStandings, 10)
    