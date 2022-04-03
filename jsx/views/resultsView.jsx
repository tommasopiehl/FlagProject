function Results(props){
    return(
        <div class="results">
            <h1>Your Score: {props.points}</h1>
            <input type="text" name="name" id="usernameInput" placeholder="Enter name" onInput={e => props.nameInput(e.target.value)}/>
            <button onClick={ e => {window.location.hash="#home";props.refreshGame(); 
            props.playerStats(props.name, props.points)}} disabled={props.name.length < 2} class="results-button">Save & Exit</button>
            <button onClick={ e => {window.location.hash="#home";props.refreshGame()}} class="results-button">Exit</button>
        </div>
    )}