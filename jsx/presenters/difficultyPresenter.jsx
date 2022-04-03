function DifficultyPresenter(props){
    return(
        <Difficulty 
        points = {props.model.points}
        countries = {props.model.countries}
        indeces = {props.model.indeces}
        setInfo = {() => props.model.setInfo()}
        opengame = {() => props.model.openGame()}
        setCurrent = {x => props.model.setCurrent(x)}
        setBases = {x => props.model.setBases(x)}
        setopenquestion = {() => props.model.openQuestion()}
        gamestatus = {props.model.showgame}
        difficulty = {props.model.difficulty}
        difficultychosen = {props.model.difficultychosen}
        />
        )
    }