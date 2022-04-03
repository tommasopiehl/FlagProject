function Difficulty(props){
    return(
        <div class="difficulty-container">

            <header>
                <a onClick={()=> {props.setInfo();window.location.hash = "#home"}} class = "back-arrow"><i class="fa-solid fa-arrow-left fa-2x"></i></a>
                <h1 class = "difficulty-title">It's Game Time!</h1>
            </header>

            <h2>Choose difficulty-level:</h2>
            {(props.difficultychosen == 0 && Object.keys(props.countries).length > 0) &&
            <div class="difficulties">
                <a onClick={event => {props.setBases("beginner"); props.opengame()}} class="beginner-button"><span>Beginner</span></a>
                <a onClick={event => {props.setBases("average"); props.opengame()}} class="average-button"><span>Average</span></a>
                <a onClick={event => {props.setBases("beast"); props.opengame()}} class="beast-button"><span>Beast</span></a>
            </div>}

            {props.difficultychosen == 1 &&
            <div class="difficulties">
            {props.difficulty == "beginner" &&
            <div class = "difficulties">
            <a onClick={event => {props.setBases("beginner"); props.opengame()}} class="chosen-difficulty"><span>Beginner</span></a>
            <a onClick={event => {props.setBases("average"); props.opengame()}} class="average-button"><span>Average</span></a>
            <a onClick={event => {props.setBases("beast"); props.opengame()}} class="beast-button"><span>Beast</span></a>
            </div>}

            {props.difficulty == "average" &&
            <div class = "difficulties">
            <a onClick={event => {props.setBases("beginner"); props.opengame()}} class="beginner-button"><span>Beginner</span></a>
            <a onClick={event => {props.setBases("average"); props.opengame()}} class="chosen-difficulty"><span>Average</span></a>
            <a onClick={event => {props.setBases("beast"); props.opengame()}} class="beast-button"><span>Beast</span></a>
            </div>}

            {props.difficulty == "beast" &&
            <div class = "difficulties">
            <a onClick={event => {props.setBases("beginner"); props.opengame()}} class="beginner-button"><span>Beginner</span></a>
            <a onClick={event => {props.setBases("average"); props.opengame()}} class="average-button"><span>Average</span></a>
            <a onClick={event => {props.setBases("beast"); props.opengame()}} class="chosen-difficulty"><span>Beast</span></a>
            </div>}
            </div>}

            {(props.gamestatus == 1 && props.indeces.length > 0) &&
            <button onClick={() => {props.setCurrent(1); props.setopenquestion();  props.setInfo();window.location.hash = "#game"}} class="box-button">
            Play!</button>
            }
        </div>
    )}