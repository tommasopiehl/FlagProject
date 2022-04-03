class gameModel{
    constructor(countriesparam = {}, questionsparam = {}, pointsparam = 0, currentcountryparam = "", 
        observersparam = [], countryanswersparam = {}, capitalanswersparam = {}, 
        populationanswersparam = {} ,countryoptionsparam = [], capitaloptionsparam = [], 
        populationoptionsparam = [], usedcountriesparam = [], questioncountparam = 0, difficultyparam = "", nameparam = "", userStatsparam = [])
    {   
        this.countries = countriesparam;
        this.questions = questionsparam;
        this.countryanswers = countryanswersparam;
        this.capitalanswers = capitalanswersparam;
        this.populationanswers = populationanswersparam;
        this.usedcountries = usedcountriesparam;
        this.questioncount = questioncountparam;
        this.points = pointsparam;
        this.currentcountry = currentcountryparam;
        this.countryoptions = countryoptionsparam;
        this.capitaloptions = capitaloptionsparam;
        this.populationoptions = populationoptionsparam;
        this.basecountries = [];
        this.basecapitals = [];
        this.basepopulation = [];
        this.difficulty = difficultyparam;
        this.observers = observersparam;
        this.difficultychosen = 0;
        this.countrychosen = 0;
        this.capitalchosen = 0;
        this.populationchosen = 0;
        this.currentindex = -1;
        this.showquestion = 0;
        this.showgame = 0;
        this.name = nameparam;
        this.stats = userStatsparam;
    }

    addObserver(x) {
        this.observers = [...this.observers, x];
    }

    removeObserver(x) {
        this.observers = this.observers.filter(y => y !== x);
    }

    notifyObserver() {
        this.observers.forEach(cb => { 
            try { cb() } 
            catch (error) { console.log(error)}
        });
    }

    setName(name) {
        this.name = name;
        this.notifyObserver();
    }

    userStats(name, score){
        const d = new Date();
        this.stats = [...this.stats, [name, score, this.difficulty, d.getMonth().toString()+ "/"+d.getDate().toString()+ "-" + d.getFullYear().toString() + " at " + d.getHours().toString()+":"+d.getMinutes().toString()]];
        this.notifyObserver();
    } 

    refreshGame(){
        this.countryanswers = {};
        this.capitalanswers = {};
        this.populationanswers = {};
        this.questions = {};
        this.questioncount = 0;
        this.showgame = 0;
        this.showquestion = 0;
        this.currentindex = -1;
        this.difficultychosen = 0;
        this.points = 0;
    }

    openGame(){
        this.showgame = 1;
        this.notifyObserver();
    }

    openQuestion(){
        this.showquestion = 1;
        this.notifyObserver();
    }

    setInfo(){
        if(Object.keys(this.countries).length == 0){
        InfoSource.searchInfo("/all").
        then(data => data.map(country => this.countries[country.name.common.toLowerCase()] = country));
        InfoSource.searchInfo("/all").
        then(data => data.map(country => {country.name.common && (this.basecountries= [...this.basecountries, country.name.common.toLowerCase()])}));
        InfoSource.searchInfo("/all").
        then(data => data.map(country => {country.capital && (this.basecapitals = [...this.basecapitals, country.capital[0]])}));
        InfoSource.searchInfo("/all").
        then(data => data.map(country => {country.population && (this.basepopulation = [...this.basepopulation, country.population])}));
        this.notifyObserver();
        }
    }

    setBases(param){
        this.questions = {};
        this.difficulty = param;
        this.difficultychosen = 1;
        var lowlimit = 0;
        var highlimit = 0;
        if(this.difficulty=="beginner"){
            lowlimit=50000000;
            highlimit=10000000000;
        }
        if(this.difficulty=="average"){
            lowlimit=10000000;
            highlimit=50000000;
        }
        if(this.difficulty=="beast"){
            lowlimit = 0;
            highlimit=10000000;
        }
        this.indeces = [];
        while(this.indeces.length < 10){
            var x = Math.floor(Math.random()*(Object.keys(this.countries).length-1));
            if(this.indeces.indexOf(x) === -1){
                if(this.countries[Object.keys(this.countries)[x]] != undefined){
                    if(lowlimit <= this.countries[Object.keys(this.countries)[x]].population &&  this.countries[Object.keys(this.countries)[x]].population <= highlimit){
                this.indeces.push(x);
            }
            }
        }
        }
        this.indeces.map(index => this.questions[this.countries[Object.keys(this.countries)[index]].name.common.toLowerCase()]=this.countries[Object.keys(this.countries)[index]]);
        this.notifyObserver();
    }

    setCurrent(x){
        this.countrychosen = 0;
        this.capitalchosen = 0;
        this.populationchosen = 0;
        this.currentindex += x;
        this.questioncount += 1;
        this.countryoptions = [];
        this.capitaloptions = [];
        this.populationoptions = [];
        this.currentcountry = this.questions[Object.keys(this.questions)[this.currentindex]];
        this.countryoptions = [...this.countryoptions, this.currentcountry.name.common.toLowerCase()];
        this.capitaloptions = [...this.capitaloptions, this.currentcountry.capital[0]];
        var pop = this.currentcountry.population;
        this.populationoptions = [...this.populationoptions, pop.toLocaleString()];
        this.setCountryOptions();
        this.setCapitalOptions();
        this.setPopulationOptions();
        this.notifyObserver();
    }

    setCountryOptions(){
        var first = Math.floor(Math.random()*this.basecountries.length);
        while(this.basecountries.indexOf(this.currentcountry.name.common.toLowerCase())==first){
            first = Math.floor(Math.random()*this.basecountries.length);
        }
        this.countryoptions = [...this.countryoptions, this.basecountries[first]];
        var second = Math.floor(Math.random()*this.basecountries.length);
        while(first == second || this.basecountries.indexOf(this.currentcountry.name.common.toLowerCase())==second){
            second = Math.floor(Math.random()*this.basecountries.length);
        }
        this.countryoptions = [...this.countryoptions, this.basecountries[second]];
        this.countryoptions.sort(() => Math.random() - 0.5);
        this.notifyObserver();
    }

    setCapitalOptions(){
        var first = Math.floor(Math.random()*this.basecapitals.length);
        while(this.basecapitals.indexOf(this.currentcountry.capital[0])==first){
            first = Math.floor(Math.random()*this.basecapitals.length);
        }
        this.capitaloptions = [...this.capitaloptions, this.basecapitals[first]];
        var second = Math.floor(Math.random()*this.basecapitals.length);
        while(first == second || this.basecapitals.indexOf(this.currentcountry.capital[0])==second){
            second = Math.floor(Math.random()*this.basecapitals.length);
        }
        this.capitaloptions = [...this.capitaloptions, this.basecapitals[second]];
        this.capitaloptions.sort(() => Math.random() - 0.5);
        this.notifyObserver();
    }

    setPopulationOptions(){
        var first = Math.floor(Math.random()*this.basepopulation.length);
        while(this.basepopulation.indexOf(this.currentcountry.population)==first){
            first = Math.floor(Math.random()*this.basepopulation.length);
        }
        var option = this.basepopulation[first]
        this.populationoptions = [...this.populationoptions, option.toLocaleString()];
        var second = Math.floor(Math.random()*this.basepopulation.length);
        while(first == second || this.basepopulation.indexOf(this.currentcountry.population)==second){
            second = Math.floor(Math.random()*this.basepopulation.length);
        }
        var option2 = this.basepopulation[second]
        this.populationoptions = [...this.populationoptions, option2.toLocaleString()];
        this.populationoptions.sort(() => Math.random() - 0.5);
        this.notifyObserver();
    }

    setCountryAnswer(answer){
        this.chosencountryindex = this.countryoptions.indexOf(answer);
        this.countrychosen = 1;
        this.countryanswers[this.currentcountry.name.common.toLowerCase()] = answer;
        this.notifyObserver();
    }

    confirmCountryAnswer(){
        for(var i = 0; i < Object.keys(this.countryanswers).length; i++){
            if(Object.keys(this.countryanswers)[i] == this.countryanswers[Object.keys(this.countryanswers)[i]]){
                this.points += 1;
            }
        }
        this.notifyObserver();
    }

    setCapitalAnswer(answer){
        this.chosencapitalindex = this.capitaloptions.indexOf(answer);
        this.capitalchosen = 1;
        this.capitalanswers[this.currentcountry.capital[0]] = answer;
        this.notifyObserver();
    }

    confirmCapitalAnswer(){
        for(var i = 0; i < Object.keys(this.capitalanswers).length; i++){
            if(Object.keys(this.capitalanswers)[i] == this.capitalanswers[Object.keys(this.capitalanswers)[i]]){
                this.points += 1;
            }
        }
        this.notifyObserver();
    }

    setPopulationAnswer(answer){
        this.chosenpopulationindex = this.populationoptions.indexOf(answer);
        this.populationchosen = 1;
        this.populationanswers[this.currentcountry.population] = parseInt(answer.replace(/\s+/g, ''));
        this.notifyObserver();
    }

    confirmPopulationAnswer(){
        for(var i = 0; i < Object.keys(this.populationanswers).length; i++){
            if(parseInt(Object.keys(this.populationanswers)[i]) == this.populationanswers[Object.keys(this.populationanswers)[i]]){
                this.points += 1;
            }
        }
        this.notifyObserver();
    }

    myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        this.notifyObserver();
      }

}