function HomeView(props){
    return (
        <div class="homeContainer">
            <div class = "flex-column">
                <h1 class = "hometitle">Welcome to the Quiz</h1>
                <a onClick={()=> {props.setInfo();window.location.hash = "#difficulty"}} disabled={Object.keys(myModel.countries).length > 1} class="box-button"><span>Start</span></a>
                <div class="popup" onclick={props.function}>How to Play
                <span class="popuptext" id="myPopup">Popup text...</span>
                </div>
                <a onClick={()=> {props.setInfo();window.location.hash = "#leaderboard"}} class ="box-button">Leaderboard</a>
            </div> 
        </div>
    );
}

