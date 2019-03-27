import fetch from 'fetch'


class RestServiceCaller  {
   loadWords(){
    const URL = "http://localhost:3003/api/word/get/all"  
    return fetch(URL).then((result) =>{
          return result.json();
    })   
    }
}

export default RestServiceCaller

