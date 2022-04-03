function RenderTest(){ console.log("Vue sub-component render test"); return false; }
const App= (props)=>
<div>
<Show hash="#home"><HomePresenter model={props.model}/></Show>
<Show hash="#difficulty"><DifficultyPresenter model={props.model}/></Show>
<Show hash="#game"><QuestionPresenter model={props.model}/></Show>
<Show hash="#results"><ResultsPresenter model={props.model}/></Show>
<Show hash="#leaderboard"><LeaderboardPresenter model={props.model}/></Show>
</div>;

function defaultRoute(){
    if(!["#home", "#difficulty", "#game", "#results", "#leaderboard"].includes(window.location.hash)) window.location.hash="#home";
  }
  
  defaultRoute();
  
  window.addEventListener("hashchange", defaultRoute);
