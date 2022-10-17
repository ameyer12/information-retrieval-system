export const getTopScorers = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0c59b2f3ebmsh3c13f6b4fc1865fp100b8ajsnaebdba8feddc',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getTopAssisters = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0c59b2f3ebmsh3c13f6b4fc1865fp100b8ajsnaebdba8feddc',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
    
        return results
    } catch (error) {
        console.log(error)
    }
}
    

