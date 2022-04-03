
function Question(props){
    return(
        <div class="question">
            {props.current}
            {props.current && 
            <div class = "question-header">
                <div class = "question-title">Question: {props.index+1}/10</div>
                <div class = "flag">
                <img src = {props.current.flags.png} height = "200" width = "300" class="flagsquare"></img>
            </div>
            {props.index != 9 && props.countrychosen &&
            <div onClick={() => {props.setCurrent(1)}} class = "right-arrow"><i disabled={props.index >= 9} class="fa-solid fa-arrow-right fa-2x">
            </i></div>}

            {props.index == 9 && props.countrychosen && 
            <a onClick={() => {props.confirmCountryAnswer();props.confirmCapitalAnswer();props.confirmPopulationAnswer();window.location.hash="#results"
            }} class="submit-button">Submit answers!</a>}
            </div>
            }
            {props.showquestion == 1 &&
            <div class="answers">
            <div class = "country">
                <h3>Country:</h3>
                {props.countrychosen == 0 &&
                <div class = "country">
                <button onClick={() => props.setCountryAnswer(props.countryoptions[0])} class="answer-button">{props.countryoptions[0]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[1])} class="answer-button">{props.countryoptions[1]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[2])} class="answer-button">{props.countryoptions[2]}</button>
                </div>}
                {props.countrychosen == 1 &&
                <div class = "country">
                {props.chosencountryindex == 0 &&
                <div class = "country">
                <button onClick={() => props.setCountryAnswer(props.countryoptions[0])} class="chosen-button">{props.countryoptions[0]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[1])} class="answer-button">{props.countryoptions[1]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[2])} class="answer-button">{props.countryoptions[2]}</button>
                </div>}
                {props.chosencountryindex == 1 &&
                <div class = "country"> 
                <button onClick={() => props.setCountryAnswer(props.countryoptions[0])} class="answer-button">{props.countryoptions[0]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[1])} class="chosen-button">{props.countryoptions[1]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[2])} class="answer-button">{props.countryoptions[2]}</button>
                </div>}
                {props.chosencountryindex == 2 &&
                <div class = "country"> 
                <button onClick={() => props.setCountryAnswer(props.countryoptions[0])} class="answer-button">{props.countryoptions[0]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[1])} class="answer-button">{props.countryoptions[1]}</button>
                <button onClick={() => props.setCountryAnswer(props.countryoptions[2])} class="chosen-button">{props.countryoptions[2]}</button>
                </div>}
                </div>}
            </div> 
            <div class = "capital">
                <h3>Capital:</h3>
                {props.capitalchosen == 0 &&
                <div class = "capital">
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[0])} class="answer-button" >{props.capitaloptions[0]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[1])} class="answer-button" >{props.capitaloptions[1]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[2])} class="answer-button" >{props.capitaloptions[2]}</button>
                </div> }
                {props.capitalchosen == 1 &&
                <div class = "capital">
                {props.chosencapitalindex == 0 &&
                <div class = "capital">
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[0])} class="chosen-button" >{props.capitaloptions[0]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[1])} class="answer-button" >{props.capitaloptions[1]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[2])} class="answer-button" >{props.capitaloptions[2]}</button>
                </div>}
                {props.chosencapitalindex == 1 &&
                <div class = "capital"> 
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[0])} class="answer-button" >{props.capitaloptions[0]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[1])} class="chosen-button" >{props.capitaloptions[1]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[2])} class="answer-button" >{props.capitaloptions[2]}</button>
                </div>}
                {props.chosencapitalindex == 2 &&
                <div class = "capital"> 
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[0])} class="answer-button" >{props.capitaloptions[0]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[1])} class="answer-button" >{props.capitaloptions[1]}</button>
                <button onClick={() => props.setCapitalAnswer(props.capitaloptions[2])} class="chosen-button" >{props.capitaloptions[2]}</button>
                </div>}
                </div>}
            </div>  
            <div class = "population">
                <h3>Citizen:</h3>
                {props.populationchosen == 0 &&
                <div class = "population">
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[0])} class="answer-button" id="btn">{props.populationoptions[0]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[1])} class="answer-button" id="btn">{props.populationoptions[1]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[2])} class="answer-button" id="btn">{props.populationoptions[2]}</button>
                </div> }
                {props.populationchosen == 1 &&
                <div class = "population">
                {props.chosenpopulationindex == 0 &&
                <div class = "population">
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[0])} class="chosen-button">{props.populationoptions[0]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[1])} class="answer-button">{props.populationoptions[1]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[2])} class="answer-button">{props.populationoptions[2]}</button>
                </div>}
                {props.chosenpopulationindex == 1 &&
                <div class = "population"> 
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[0])} class="answer-button">{props.populationoptions[0]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[1])} class="chosen-button">{props.populationoptions[1]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[2])} class="answer-button">{props.populationoptions[2]}</button>
                </div>}
                {props.chosenpopulationindex == 2 &&
                <div class = "population"> 
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[0])} class="answer-button">{props.populationoptions[0]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[1])} class="answer-button">{props.populationoptions[1]}</button>
                <button onClick={() => props.setPopulationAnswer(props.populationoptions[2])} class="chosen-button">{props.populationoptions[2]}</button>
                </div>}
                </div>}
        </div>
       
        </div>
            }
            </div>)}