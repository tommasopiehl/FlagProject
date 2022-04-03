function QuestionPresenter(props){
    return(
        <Question 
        points = {props.model.points}
        setInfo = {() => props.model.setInfo()}
        opengame = {() => props.model.openGame()}
        gamestatus = {props.model.showgame}
        index = {props.model.currentindex}
        count = {props.model.questioncount}
        countries = {props.model.countries}
        setCurrent = {x => props.model.setCurrent(x)}
        countryoptions = {props.model.countryoptions}
        setCountryAnswer = {x => props.model.setCountryAnswer(x)}
        confirmCountryAnswer = {() => props.model.confirmCountryAnswer()}
        countrystatus = {props.model.countryanswerstatus}
        capitaloptions = {props.model.capitaloptions}
        setCapitalAnswer = {x => props.model.setCapitalAnswer(x)}
        confirmCapitalAnswer = {() => props.model.confirmCapitalAnswer()}
        capitalstatus = {props.model.capitalanswerstatus}
        populationoptions = {props.model.populationoptions}
        setPopulationAnswer = {x => props.model.setPopulationAnswer(x)}
        confirmPopulationAnswer = {() => props.model.confirmPopulationAnswer()}
        current = {props.model.currentcountry}
        setBases = {x => props.model.setBases(x)}
        showquestion = {props.model.showquestion}
        setopenquestion = {() => props.model.openQuestion()}
        countryanswers = {props.model.countryanswers}
        capitalanswers = {props.model.capitalanswers}
        populationanswers = {props.model.populationanswers}
        countrychosen = {props.model.countrychosen}
        chosencountryindex = {props.model.chosencountryindex}
        capitalchosen = {props.model.capitalchosen}
        chosencapitalindex = {props.model.chosencapitalindex}
        populationchosen = {props.model.populationchosen}
        chosenpopulationindex = {props.model.chosenpopulationindex}
        />
        )
    }