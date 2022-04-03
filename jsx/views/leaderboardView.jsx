function LeaderboardView(props){
    let place = 0;

    const difficultyLevels=["beast", "average", "beginner"];
    function difficultyLevel(level){
    if(level){
    	const tp= level.filter(value => difficultyLevels.includes(value));
    	if(tp.length){
            return tp[0];
        }
    }
    return "";
    }

    function compareDifficulty(a,b){
    
        let ai= difficultyLevels.indexOf(difficultyLevel(a));
        let bi= difficultyLevels.indexOf(difficultyLevel(b)); 

        if(ai < bi){return(-1);}
        else if(ai > bi){return(1);}
        else{return(0);}
    }

    function compareScore(a,b){

        if((a[1] > b[1]) && (a[2] == b[2])){return(-1);}
        else if(a[1] < b[1] && (a[2] == b[2])){return(1);}
        else{return(0);}
    }
 
    return (
        <div class="leaderboardContainer">
             <div class = "flex-column">
                <h1>Leaderboard</h1>
                <table>
                        <tr>
                            <th scope="col">Place</th>
                            <th scope="col">Player</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Score</th>
                            <th scope="col">Date</th>
                        </tr>
                        {[...props.leaderboardStats].sort((a,b) => compareDifficulty(a,b)).sort((a,b) => compareScore(a,b)).map(function(stat){return(                  
                        <tr >
                            <td>{place+=1}</td>
                            <td>{stat[0]}</td>
                            <td>{stat[2]}</td>
                            <td>{stat[1]}</td>
                            <td>{stat[3]}</td>
                        </tr>);})}          
                </table>
            </div>
        </div>
    );
}

