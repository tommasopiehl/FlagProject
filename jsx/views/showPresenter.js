     
const Show={ 
    props: ["hash"],
    data(){ return {hashState:window.location.hash}; },
    created(){  
    this.listener=()=> this.hashState= window.location.hash; 
    window.addEventListener("hashchange", this.listener);
    },
    unmounted(){ window.removeEventListener("hashchange", this.listener); },
    render(){
        if(this.hashState !== this.hash){
        return <div class={"hidden"} >{this.$slots.default()}</div>;
        }
        if(this.hashState === this.hash){
            return <div class={""} >{this.$slots.default()}</div>;
            }
},
}