function promiseNoData(promise,data,error){
    return((!promise && <span>no data</span>)|| 
    (((!data && !error) && <span><img src = 
        { "http://www.csc.kth.se/~cristi/loading.gif" } height = "200"></img></span>)|| 
    (error && <span>some error</span>)||false))
}