const  InfoSource={   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL+params, {
            "method": "GET",
	})
         // check HTTP response: 
          .then(response=>{ if(response.status !== 200 || !response.ok){throw response.statusText = "not ok!"}
          else return response})   
          // from HTTP headers to HTTP response data:
          .then(response => response.json())   ;
       }
    ,   
     searchInfo(params){
    return InfoSource.apiCall(params).
    then(data=> {return data});}
 };