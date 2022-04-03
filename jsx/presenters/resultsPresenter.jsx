function ResultsPresenter(props){
    return(
        <Results
        points = {props.model.points}
        refreshGame = {()=>props.model.refreshGame()}
        nameInput = {x => props.model.setName(x)}
        name = {props.model.name}
        playerStats = {(n, s) => props.model.userStats(n,s)}
        />
        )
    }