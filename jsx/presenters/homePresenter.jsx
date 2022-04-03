function HomePresenter(props){   // assume a model prop
    return <HomeView
        function = {() => props.model.myFunction()}
        setInfo = {() => props.model.setInfo()}
     />
 }




 