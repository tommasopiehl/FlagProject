function LeaderboardPresenter(props){
    return(
        <LeaderboardView 
            points = {props.model.points}
            leaderboardStats = {props.model.stats}
        />
        )
    }